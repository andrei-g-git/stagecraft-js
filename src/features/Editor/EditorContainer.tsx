import QuillEditor from "./QuillEditor.jsx";
import "./EditorContainer.scss"
import { connect } from "react-redux";
import { loadedFlowModel, toggledTextEditor } from "@/redux-store/actions.js";
import { DialogContent, NodeModels } from "@/models/nodeModels";
import { Delta } from "./types.js";
import { withQuillEditorState } from "./higher-order-components/editorHOC.js";
import { createEditor } from "./editorFactory.js";
import { literalToClass } from "@/models/usage/dataConversion.js";
import { StandardRichContent } from "@/models/StandardRichContent.js";
const EditorContainer = (props: any) => {

    return (
        props.visible? 
            <div className="editor-container">
                {
                    createEditor(props.type)
                }   
                <button onClick={() => handleClick(
                        props.toggleEditor,
                        props.nodeModel,
                        props.id,
                        props.dialog
                    )}
                >
                    Done!
                </button>
            </div>

        :
            <div></div>
    )
}

const handleClick = (toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent) => {

    model.setPreviewHtmlById(id, dialog.preview.html);
    model.setFullHtmlById(id, dialog.full.html);

    const previewRichContent = literalToClass(
        dialog.preview.json,
        StandardRichContent
    )
    model.setPreviewJsonById(id, previewRichContent);
    const fullRichContent = literalToClass(
        dialog.full.json,
        StandardRichContent
    )
    model.setFullJsonById(id, fullRichContent);
    toggleEditor(false);
}

export default EditorContainer;