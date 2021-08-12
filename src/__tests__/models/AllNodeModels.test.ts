import {expect, describe, test, it} from "vitest";
import { AllNodeModels } from "@/models/AllNodeModels";
import { Common } from "@/models/nodeModels";
import { createNode } from "@/models/usage/factory";
import { DIALOG_NODE } from "@/const/toolbarItems";

describe("AllNodeModels", () => {
    it("generates unique node id", () => {
        const nodeModels: Common[] = []; //this is starting to lool like an integration test...
        const allNodes = new AllNodeModels(nodeModels);
        for(var i = 0; i <= 1009; i++){
            nodeModels.push(createNode(DIALOG_NODE));            
            allNodes.setId(i, allNodes.generateId(/* allNodes */));   
        }

        const ids = allNodes.Models.map(node => node.Id);
        const uniqueIds = new Set(ids);

        expect(ids.length).toEqual(uniqueIds.size);
    });
});