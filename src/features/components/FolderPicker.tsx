import { Button, Classes, ControlGroup } from "@blueprintjs/core"
import {TextField} from "@/features/components";
import "./FolderPicker.scss";

const remote = require("@electron/remote");
const {dialog} = remote;

const FolderPicker = (props: {content: string, handleChange: Function, icon: any}) => {
    return (
        <ControlGroup>
            <Button className="folder-picker-button"//{Classes.BUTTON} 
                icon={props.icon} 
                onClick={handleClick(props.handleChange)}
            />
            <TextField handleChange={props.handleChange} 
                content={props.content}
                handleClick={() => {}}
            />

        </ControlGroup>
    )
}

const handleClick = (handleChange: Function) => 
    async () => {
        const handler = await dialog.showOpenDialog({properties: ['openDirectory', 'multiSelections']})
        const folderPath = handler.filePaths[0];
        handleChange(folderPath);
    }

export default FolderPicker;