import QuillEditor from "./QuillEditor.jsx";
import "./EditorContainer.scss"
import { connect } from "react-redux";
import { loadedFlowModel, toggledTextEditor } from "@/redux/actions.js";
import { NodeModels } from "@/models/nodeModels.js";
import { Delta } from "./quillTypes.js";

const EditorContainer = (props: any) => {
    return (
        props.visible? 
            <div className="editor-container">
                <QuillEditor />

                <button onClick={() => handleClick(
                        props.updateModel,
                        props.toggleEditor,
                        props.nodeModel,
                        props.id,
                        props.content,
                        props.html
                    )}
                >
                    Done!
                </button>
            </div>
        :
            <div></div>
    )
}

const handleClick = (updateModel: Function, toggleEditor: Function, model: NodeModels, id: number, delta: Delta, html: string) => {
    model.setHtmlById(id, html);
    model.setJsonById(id, delta);
    toggleEditor(false);
}

const mapStateToProps = (state: any) => {
    return {
        content: state.editor.content,
        html: state.editor.html,        
        visible: state.ui.textEditorVisible,
        id: state.model.selected
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateModel: (model: NodeModels) => {
            dispatch(loadedFlowModel(model));
        },
        toggleEditor: (visible: boolean) => {
            dispatch(toggledTextEditor(visible))
        },        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);