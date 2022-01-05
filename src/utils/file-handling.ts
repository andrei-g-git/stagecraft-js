import { AllNodeModels } from "@/models/AllNodeModels";
import { TextFormat } from "@/types/file-and-formats";


export async function verifyPermission(fileHandle: FileSystemFileHandle, readWrite: boolean) {
    let options = {};
    if (readWrite) {
        options = {
            mode: 'readwrite'
        }
    }
    // Check if permission was already granted. If so, return true.
    if ((await fileHandle.queryPermission(options)) === 'granted') {
        return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === 'granted') {
        return true;
    }
    // The user didn't grant permission, so return false.
    return false;
}

const getPickerOptions = (type: "text" | "json") => {
    return {
        types: [
            {
                description: `${type === "text" ? "Text" : "Json"} File`, //this should be injected 
                accept: {
                    "text/plain": [`.${type}`]
                }
            }
        ]
    }    
}

export const saveTextFile = async (data: string, suggestedName: string, type: "text" | "json") => {
    const jsonBlob = new Blob([data], { type: "text/plain" });
    const fileHandler = await window.showSaveFilePicker({
        suggestedName: suggestedName,
        types: [
            {
                description: `${type === "text" ? "Text" : "Json"} File`, //this should be injected
                accept: {
                    "text/plain": [`.${type}`]
                }
            }
        ]
    });

    const writableFileStream = await fileHandler.createWritable();
    await writableFileStream.write(jsonBlob);
    await writableFileStream.close();
}


const selectFile = async (type: TextFormat) => {
    const [handler] = await window.showOpenFilePicker(getPickerOptions(type));
    return await handler.getFile();    
}

export const loadTextFile = async (type: TextFormat, doAfterReading: Function) => {
    const selected = await selectFile(type);

    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
        doAfterReading(reader.result);
    });
    reader.readAsText(selected);
}

export const loadTextFileToInstance = async (type: TextFormat, doAfterReading: Function) => {
    const selected = await selectFile(type);

    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
        if(reader.result){
            const nodesLiteral = JSON.parse(reader.result as TextFormat);
            const nodesModel = AllNodeModels.createNested(nodesLiteral);
            //console.log("LOADDED MODEL:: ", nodesModel)
            doAfterReading(nodesModel);            
        }

    });
    reader.readAsText(selected);
}

export const selectFolder = async () => {
    const handler = await window.showDirectoryPicker();
    for await (const entry of handler.values()){
        if(entry.kind === "directory"){
            const newHandler = await handler.getDirectoryHandle(entry.name, {create: false})

            console.log("DIRECTORY:   ", entry.name)

            break; //only need the first folder
        }
    }
}