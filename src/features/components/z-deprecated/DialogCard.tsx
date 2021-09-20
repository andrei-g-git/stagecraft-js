import NodeTextAndPreview from "./NodeTextAndPreview";
import "./DialogCard.scss";

const DialogCard = (props: {
    preview: string, 
    full: string,
    handleClick: React.MouseEventHandler
}) => {

    return (
        <div className="dialog-node-container"
            //onClick={() => handleClick(props.id, props.toggleEditor, props.selectNode, props.sendContentToEditor, props.content)}
            onClick={props.handleClick}
        >
            <NodeTextAndPreview preview={props.preview}
                fullContent={props.full}
            />
        </div>
    )
}

export default DialogCard;