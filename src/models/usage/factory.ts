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

export const createNode = (nodeType: string): Common => {
    switch(nodeType){
        case DIALOG:
            return <Common> new BasicDialogNode(
                new CommonNode(),
                new NodeCoordinates(),
                new NodeNames(),
                new NodePictures(),
                new NodeDialog()
            ); 
        case SCRIPT:
            return <Common> new MockNode()
        default:
            return <Common> new BasicDialogNode(
                    new CommonNode(),
                    new NodeCoordinates(),
                    new NodeNames(),
                    new NodePictures(),
                    new NodeDialog()
            );            
    }
}

//for testing until I implement it for real
class MockNode implements Common{
    get Id(): number {
        throw new Error("Method not implemented.");
    }
    set Id(id: number) {
        throw new Error("Method not implemented.");
    }
    get Title(): string {
        throw new Error("Method not implemented.");
    }
    set Title(title: string) {
        throw new Error("Method not implemented.");
    }
    get Type(): string {
        throw new Error("Method not implemented.");
    }
    set Type(type: string) {
        throw new Error("Method not implemented.");
    }
    get Ingoing(): number[] {
        throw new Error("Method not implemented.");
    }
    set Ingoing(ingoing: number[]) {
        throw new Error("Method not implemented.");
    }
    get Outgoing(): number[] {
        throw new Error("Method not implemented.");
    }
    set Outgoing(outgoing: number[]) {
        throw new Error("Method not implemented.");
    }
    setIngoing =  (ingoing: number, index: number) => {} ;
    setOutgoing = (outgoing: number, index: number) => {};
    
}