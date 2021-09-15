import { createEditor } from "./editorFactory.js";
import { TEXT_EDITOR } from "@/constants/editors.js";
import { withCloseDialogEditor, withCloseDialogEditorState, withCloseScriptEditor, withCloseScriptEditorState, withNewArgumentState } from "./higher-order-components/editor-buttons.hoc";
import { GenericButton } from "../components";//"@/components";
import "./EditorContainer.scss"
import AddElement from "../components/AddElement.js";
import { withClick } from "../components/higher-order-components/listeners.js";

const EditorContainer = (props: any) => {

    return (
        props.visible? 
            <div className="editor-container">
                {
                    createEditor(props.type)
                }   

                {
                    props.type === TEXT_EDITOR ? 
                        makeCloseEditorButton(
                            GenericButton,
                            withCloseDialogEditorState,
                            withCloseDialogEditor
                        )
                    :   
                        makeCloseEditorButton(
                            GenericButton,
                            withCloseScriptEditorState,
                            withCloseScriptEditor
                        )
                }

                {
                    makeAddArgumentButton(
                        AddElement,
                        withNewArgumentState,
                        withClick
                    )
                }
            </div>

        :
            <div></div>
    )
}

const makeCloseEditorButton = (Base: any, withState: Function, withClose: Function) => {
    const SecondStage = withClose(Base);
    const CloseButton = withState(SecondStage); 
    return <CloseButton name="Close"/>
}

const makeAddArgumentButton = (Base: any, withState: Function, withClick: Function) => {
    const SecondStage = withState(Base);
    const AddArgument = withClick(SecondStage); 
    return <AddArgument />    
}

export default EditorContainer;