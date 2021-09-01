import QuillEditor from "./QuillEditor.jsx";
import "./EditorContainer.scss"
import { connect } from "react-redux";
import { loadedFlowModel, toggledTextEditor } from "@/redux/actions";
import { DialogContent, NodeModels } from "@/models/nodeModels";
import { Delta } from "./quillTypes";
import { withQuillEditorState } from "./editorHOC";
import { createEditor } from "./editorFactory.js";
import { literalToClass } from "@/models/usage/dataConversion.js";
import { StandardRichContent } from "@/models/StandardRichContent.js";
const EditorContainer = (props: any) => {

    const EditorWithState = withQuillEditorState(QuillEditor); //this causes the editor to loose focus on every key press...

    return (
        props.visible? 
            <div className="editor-container">
                {/* <EditorWithState /> */}
                {
                    createEditor(props.type)
                }   

                <button onClick={() => handleClick(
                        props.updateModel,
                        props.toggleEditor,
                        props.nodeModel,
                        props.id,
                        //props.content,
                        // props.json,
                        // props.html
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

const handleClick = (updateModel: Function, toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent/* delta: Delta, html: string */) => {
    //model.setHtmlById(id, html);
    //model.setJsonById(id, delta);



    //console.log("ATTEMPRING TO TOGGLE EDITOR OFF --- html: \n", html)
    model.setPreviewHtmlById(id, dialog.preview.html);//`<p>preview ${id}</p>`);
    model.setFullHtmlById(id, dialog.full.html);//html);

    const previewRichContent = literalToClass(
        //{content: [{attributes: [], insert: `preview ${id}`}]},
        dialog.preview.json,
        StandardRichContent
    )
    model.setPreviewJsonById(id, previewRichContent);
    const fullRichContent = literalToClass(
        //{content: delta.ops},
        dialog.full.json,
        StandardRichContent
    )
    model.setFullJsonById(id, fullRichContent);
    toggleEditor(false);
}

// const mapStateToProps = (state: any) => {
//     return {
//         content: state.editor.content,
//         html: state.editor.html,        
//         visible: state.ui.textEditorVisible,
//         id: state.model.selected
//     }
// }
// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         updateModel: (model: NodeModels) => {
//             dispatch(loadedFlowModel(model));
//         },
//         toggleEditor: (visible: boolean) => {
//             dispatch(toggledTextEditor(visible))
//         },        
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);

export default EditorContainer;