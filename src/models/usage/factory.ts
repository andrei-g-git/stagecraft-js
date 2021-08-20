import { 
    DIALOG_NODE, 
    SCRIPT_NODE 
} from "@/const/toolbarItems";
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

//for testing until I implement it for real
// class MockNode implements Common{
//     get Id(): number {
//         throw new Error("Method not implemented.");
//     }
//     set Id(id: number) {
//         throw new Error("Method not implemented.");
//     }
//     get Title(): string {
//         throw new Error("Method not implemented.");
//     }
//     set Title(title: string) {
//         throw new Error("Method not implemented.");
//     }
//     get Type(): string {
//         throw new Error("Method not implemented.");
//     }
//     set Type(type: string) {
//         throw new Error("Method not implemented.");
//     }
//     get Ingoing(): number[] {
//         throw new Error("Method not implemented.");
//     }
//     set Ingoing(ingoing: number[]) {
//         throw new Error("Method not implemented.");
//     }
//     get Outgoing(): number[] {
//         throw new Error("Method not implemented.");
//     }
//     set Outgoing(outgoing: number[]) {
//         throw new Error("Method not implemented.");
//     }
//     setIngoing =  (ingoing: number, index: number) => {} ;
//     setOutgoing = (outgoing: number, index: number) => {};
    
// }