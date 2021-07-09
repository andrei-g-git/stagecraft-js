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
})


