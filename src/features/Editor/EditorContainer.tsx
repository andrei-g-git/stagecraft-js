import { createEditor } from "./editorFactory.js";
import { FULL_TEXT_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR } from "@/constants/editors.js";
import { withCloseDialogEditor, withCloseDialogEditorState, withCloseScriptEditor, withCloseScriptEditorState, withNewArgumentState } from "./higher-order-components/editor-buttons.hoc";
import { GenericButton } from "../components";//"@/components";
import "./EditorContainer.scss"
import AddElement from "../components/AddElement.js";
import { withClick } from "../components/higher-order-components/listeners.js";

const EditorContainer = (props: any) => {
    
    return (
        props.visible/* ? */ && 
            <div className="editor-container">
                {
                    createEditor(props.type)
                }   

                {
                    (props.type === PREVIEW_TEXT_EDITOR) || (props.type === FULL_TEXT_EDITOR) ? 
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

/*         :
            <div></div> */
    )
}

const makeCloseEditor = (type: number) => {
    switch(type){
        case PREVIEW_TEXT_EDITOR:
        case FULL_TEXT_EDITOR:
            const CloseDialogButton =  withCloseDialogEditorState(
                withCloseDialogEditor(GenericButton)
            )
            return <CloseDialogButton name="Close"/>

        case SCRIPT_EDITOR:
            const CloseScriptButton = withCloseScriptEditorState(
                withCloseScriptEditor(GenericButton)
            )
            return <CloseScriptButton name="Close"/>

        default: return <div></div>
    }
}

const makeCloseEditorButton = (Base: any, withState: Function, withClose: Function) => {
    //console.log("ADDING CLOSE")
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