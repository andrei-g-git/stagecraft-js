import { NodeModels } from '@/models/nodeModels';
import { useEffect } from 'react';

const ExportJson = (props: any) => { //needs to export only json, not also the html within --- and get rid of the composition objects
    return (
        <props.MenuItem name={props.name}
            handleClick={() => exportModelJson(props.model)}
        />
    )
}

const exportModelJson = async (model: NodeModels) => {
    console.log("MODEL:  ", model)
    const data = model.getJson();

    const jsonBlob = new Blob([data], { type: "text/plain" });
    const fileHandler = await window.showSaveFilePicker({
        suggestedName: "json-model.json",
        types: [
            {
                description: "Json File",
                accept: {
                    "text/plain": [".json"]
                }
            }
        ]
    });

    const writableFileStream = await fileHandler.createWritable();
    await writableFileStream.write(jsonBlob);
    await writableFileStream.close();
}

export default ExportJson;