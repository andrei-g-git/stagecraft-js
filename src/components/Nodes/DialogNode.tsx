import { ReactNode } from "react";
import NodeTextAndPreview from "./NodeTextAndPreview";
import "./DialogNode.scss";

const DialogNode = (props: {preview: ReactNode, fullContent: ReactNode}) => {

    return (
        <div className="dialog-node-container">
            <NodeTextAndPreview preview={props.preview}
                fullContent={props.fullContent}
            />
        </div>
    )
}

export default DialogNode;