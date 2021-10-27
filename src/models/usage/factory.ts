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
            return <Common><unknown> new BasicDialogNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeNames(),
                new NodePictures(),
                new NodeDialog()
            ); 
        case SCRIPT_NODE: //SCRIPT:
            return <Common><unknown> new BasicScriptNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeScript()
            );
        default:
            return <Common><unknown> new BasicDialogNode(
                    new CommonNode(),
                    new NodeCoordinates(),
                    new NodeNames(),
                    new NodePictures(),
                    new NodeDialog()
            );            
    }
}
