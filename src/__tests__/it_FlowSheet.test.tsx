import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import FlowSheet from "@/components/FlowSheet.tsx/FlowSheet";
import {makeStore} from "@/redux/makeStore";
import { loadedFlowModel } from "@/redux/actions";
import { AllNodeModels } from "@/models/AllNodeModels";
import { BasicDialogNode } from "@/models/dialogNode";
import { NodeCoordinates } from "@/models/nodeCoordinates";
import { CommonNode } from "@/models/commonNode";
import { NodeNames } from "@/models/nodeNames";
import { NodePictures } from "@/models/nodePictures";
import { NodeDialog } from "@/models/nodeDialog";
import { Store } from "redux";
import { selectedNodeId } from "@/redux/actions";

describe("FlowSheet - DialogNode integration test", () => {
    it("renders correct markup from model to node", () => {
        const store = makeStore();
        const node1 = new BasicDialogNode(
            new CommonNode(),
            new NodeCoordinates(),
            new NodeNames(),
            new NodePictures(),
            new NodeDialog()
        );
        node1.Html = `<p><strong>aaaaaaa</strong><strong style="color: rgb(230, 0, 0);">abbb<u>bb</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>bbbbbbbbb</u></p>`;
        const model = new AllNodeModels([node1]);
        store.dispatch(loadedFlowModel(model));

        render(
            <Provider store={store}>
                <FlowSheet />
            </Provider>
        );

        expect(screen.getByText(/aaa/i)).toBeDefined();
    })

    it("opens the editor with the correct node content", () => {
        const store = makeStore();
        makeABunchOfNodes(
            store, 
            [
                `<p><strong>aaaaaaa</strong><strong style="color: rgb(230, 0, 0);">abbb<u>bb</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>bbbbbbbbb</u></p>`,
                `<p>zzzzzzzzzzzzzzzzzzz    zzzzzzzzzzzzzzzzzz</p>`,
                `<p style = "color: rgb(0, 255, 0)> xxxxxxxxxxx</p>`                
            ]
        );

        render(
            <Provider store={store}>
                <FlowSheet />
            </Provider>
        );  
        
        store.dispatch(selectedNodeId(store.getState().model.nodeModel.Models[2].Id)) //demeter rolling in his grave (he's probably not actually dead yet)

        //Fuck this I'll finish it after implementation...
    })
})

const makeABunchOfNodes = (store: Store, htmlForAllNodes: string[]): void => {
    for(var i=0; i < htmlForAllNodes.length; i++){
        const node = new BasicDialogNode(
            new CommonNode(),
            new NodeCoordinates(),
            new NodeNames(),
            new NodePictures(),
            new NodeDialog()
        );
        node.Id = Math.floor(Math.random() * 1000);
        node.Html = htmlForAllNodes[i];
        const model = new AllNodeModels([node]);
        store.dispatch(loadedFlowModel(model));
    }
}


