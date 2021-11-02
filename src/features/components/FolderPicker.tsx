import { Button, Classes, ControlGroup } from "@blueprintjs/core"
import {TextField} from "@/features/components";
import { ChangeEvent, useRef } from "react";
import "./FolderPicker.scss";

//import { selectFolder } from "@/utils/file-handling";

//const {dialog, ipcMain, BrowserWindow} = require("@electron/remote");

const FolderPicker = (props: {content: string, handleChange: Function, icon: any}) => {
    const inputRef = useRef(null);

    return (
        <ControlGroup>
            <Button className="folder-picker-button"//{Classes.BUTTON} 
                icon={props.icon} 
                onClick={handleClick(inputRef)}
            />

            <input type="file"      
                /* @ts-expect-error */    
                webkitdirectory="" 
                directory="" 
                multiple 
                ref={inputRef} 
                style={{display: "none"}} 
                onChange={handleInputChange(props.handleChange)}
            />            
            <TextField handleChange={props.handleChange} 
                content={props.content}
                handleClick={() => {}}
            />

        </ControlGroup>
    )
}

const handleInputChange = (handleChange: Function) => 
    (event: ChangeEvent<HTMLInputElement>) => {
        //handleChange()



        // const relativePath = event.target.files![0].path;
        // const folder = relativePath.split("/");

        // console.log("FOLDER 0:   ", folder[0])
    }

const handleClick = (inputRef: any) => 
    async () => {
        inputRef.current.click();

        //selectFolder();

        // const fullPath = await dialog.showOpenDialog({properties: ['openDirectory', 'multiSelections']})
        // console.log("FULL DIRECTORY PATH:   ", fullPath)

        // ipcMain.on("select-dirs", async (event, arg) => {

        // })
    }

export default FolderPicker;