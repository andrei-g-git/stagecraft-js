import { 
    DIALOG_NODE, 
    SCRIPT_NODE 
} from "@/constants/toolbarItems";
import { CommonNode } from "../commonNode";
import { BasicDialogNode } from "../dialogNode";
import { NodeCoordinates } from "../nodeCoordinates";
import { NodeDialog } from "../nodeDialog";
import { Common } from "../nodeModels";
import { NodeNames } from "../nodeNames";
import { NodePictures } from "../nodePictures";
import {
    DIALOG,
    SCRIPT
} from "../typeOfNodes";
import { BasicScriptNode } from "../scriptNode";
import { NodeScript } from "../nodeScript";

export const createNode = (nodeType: number/* string */): Common => {
    switch(nodeType){
        case DIALOG_NODE: //DIALOG:
            const dialogNode =  <Common><unknown> new BasicDialogNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeNames(),
                new NodePictures(),
                new NodeDialog()
            ); 
            dialogNode.Type = convertTypeFromNumberToString(DIALOG_NODE);
            return dialogNode;
        case SCRIPT_NODE: //SCRIPT:
            const scriptNode =  <Common><unknown> new BasicScriptNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeScript()
            );
            scriptNode.Type = convertTypeFromNumberToString(SCRIPT_NODE);
            return scriptNode;
        default:
            const defaultNode =  <Common><unknown> new BasicDialogNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeNames(),
                new NodePictures(),
                new NodeDialog()
            ); 
           defaultNode.Type = convertTypeFromNumberToString(DIALOG_NODE);
            return defaultNode;           
    }
}

export const convertTypeFromNumberToString = (enumType: number) => { //why did I need this again?...
    const stringTypes = [
        {enum: DIALOG_NODE, str: DIALOG},
        {enum: SCRIPT_NODE, str: SCRIPT}
    ]
    return stringTypes.filter(pair => pair.enum === enumType)[0].str;
}
