import {expect, describe, test, expectTypeOf} from "vitest";
import { Common, Dialog } from "@/models/nodeModels";
import { createNode } from "@/models/usage/factory";

describe("node model factory", () => {
    test("createNode makes instance of right class from string", () => {


        const NODE_TYPE = "DIALOG";
        const nodeModel = createNode(NODE_TYPE);
        const hasDialogMethod = hasDialogInterfaceMethod(nodeModel); //doesn't work, is falsy
        //expectTypeOf(nodeModel).toMatchTypeOf<Common>(); //factory has default case for dialog node so this never fails...
        expect(hasDialogMethod).toBeTruthy();
    })
})

const hasDialogInterfaceMethod = (node: any) => { //this is dependent on the class implementation and makes the test brittle
    return typeof node["Content"] === "function";
}

// const isDialog = (ob: any): obj is Dialog => {
//     return 
// }