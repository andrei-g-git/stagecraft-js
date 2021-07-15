import { ReactNode } from "react";
import { connect } from "react-redux"; 
import NodeTextAndPreview from "./NodeTextAndPreview";
import "./DialogNode.scss";
import { changedEditorHtml, selectedNodeId, toggledTextEditor } from "@/redux/actions";

const DialogNode = (props: any/* {preview: ReactNode, fullContent: ReactNode} */) => {

    return (
        <div className="dialog-node-container"
            onClick={() => handleClick(props.id, props.toggleEditor, props.selectNode, props.sendHtmlToEditor, props.fullContent)}
        >
            <NodeTextAndPreview preview={props.preview}
                fullContent={props.fullContent}
            />
        </div>
    )
}

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, sendHtmlToEditor: Function, fullContent: string) => {
    selectNode(id);
    toggleEditor(true);
    sendHtmlToEditor(fullContent);
}

const mapStateToProps = (state: any) => {
    return {
        
    }
}

const dispatchStateToProps = (dispatch: any) => {
    return {
        toggleEditor: (visible: boolean) => {
            dispatch(toggledTextEditor(visible))
        },
        selectNode: (id: number) => {
            dispatch(selectedNodeId(id))
        },
        sendHtmlToEditor: (html: string) => {
            dispatch(changedEditorHtml(html))
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(DialogNode);