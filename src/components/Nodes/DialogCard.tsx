import NodeTextAndPreview from "./NodeTextAndPreview";
import "./DialogCard.scss";
import { DialogContent } from "@/models/nodeModels";

const DialogCard = (props: {
    preview: string, 
    full: string,
    content: DialogContent,
    id: number,
    toggleEditor: Function,
    selectNode: Function,
    sendContentToEditor: Function,
    contentChanged: boolean
}) => {

    return (
        <div className="dialog-node-container"
            onClick={() => handleClick(props.id, props.toggleEditor, props.selectNode, props.sendContentToEditor, props.content)}
        >
            <NodeTextAndPreview preview={props.preview}
                fullContent={props.full}
            />
        </div>
    )
}

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, sendContentToEditor: Function, content: DialogContent) => {
    selectNode(id);
    toggleEditor(true);
    sendContentToEditor(content);
}

export default DialogCard;