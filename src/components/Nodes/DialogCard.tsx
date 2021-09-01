import { connect } from "react-redux"; 
import NodeTextAndPreview from "./NodeTextAndPreview";
import { changedEditorHtml, selectedNodeId, toggledTextEditor } from "@/redux/actions";
import "./DialogCard.scss";
import { DialogContent } from "@/models/nodeModels";
import { useEffect } from "react";

const DialogCard = (props: {
    preview: string, 
    full/* Content */: string,
    content: DialogContent,
    id: number,
    toggleEditor: Function,
    selectNode: Function,
    //sendHtmlToEditor: Function
    sendContentToEditor: Function
}) => {
    useEffect(() => {
        console.log("CONTENT SHOULD CHANGE")
    },
        [props.preview, props.full]
    )
    return (
        <div className="dialog-node-container"
            onClick={() => handleClick(props.id, props.toggleEditor, props.selectNode, /* props.sendHtmlToEditor, */props.sendContentToEditor, props.content/* props.preview, props.fullContent */)}
        >
            <NodeTextAndPreview preview={props.preview}
                fullContent={props.full/* Content */}
            />
        </div>
    )
}

const handleClick = (id: number, toggleEditor: Function, selectNode: Function, /* sendHtmlToEditor: Function, */sendContentToEditor: Function, content: DialogContent/* preview: string, fullContent: string */) => {
    selectNode(id);
    toggleEditor(true);
    //sendHtmlToEditor(fullContent);
    // sendContentToEditor({
    //     preview: preview,
    //     full: fullContent
    // })
    sendContentToEditor(content);
}

// const mapStateToProps = (state: any) => {
//     return {
        
//     }
// }

// const dispatchStateToProps = (dispatch: any) => {
//     return {
//         toggleEditor: (visible: boolean) => {
//             dispatch(toggledTextEditor(visible))
//         },
//         selectNode: (id: number) => {
//             dispatch(selectedNodeId(id))
//         },
//         sendHtmlToEditor: (html: string) => {
//             dispatch(changedEditorHtml(html))
//         }
//     }
// }

// export default connect(mapStateToProps, dispatchStateToProps)(DialogCard);
export default DialogCard;