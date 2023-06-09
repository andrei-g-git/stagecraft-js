import { createEditor } from "./editorFactory.js";
import { FULL_TEXT_EDITOR, NAME_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR, TITLE_EDITOR } from "@/constants/editors.js";
import { withCloseDialogEditor, withCloseDialogEditorState, withCloseFullTextEditor, withCloseNameEditor, withCloseNameEditorState, withClosePreviewEditor, withCloseScriptEditor, withCloseScriptEditorState, withCloseTitleEditor, withCloseTitleEditorState, withNewArgumentState } from "./higher-order-components/editor-buttons.hoc";
import { GenericButton } from "../components";//"@/components";
import "./EditorContainer.scss"
import AddElement from "../components/AddElement.js";
import { withClick } from "../components/higher-order-components/listeners.js";

const EditorContainer = (props: any) => {
    
    return (
        props.visible && 
            <div className="editor-container">
                {
                    createEditor(props.type)
                }   

                {
                    makeCloseEditor(props.type)
                }

                {
                    makeAddArgumentButton( //should this be nested here?....
                        AddElement,
                        withNewArgumentState,
                        withClick
                    )
                }
            </div>
    )
}

const makeCloseEditor = (type: number) => {
    switch(type){
        case FULL_TEXT_EDITOR:
            const CloseFullTextButton = withCloseDialogEditorState(
                withCloseFullTextEditor(GenericButton)
            )
            return <CloseFullTextButton name="Close Full Editor"/>     

        case PREVIEW_TEXT_EDITOR:
            const ClosePreviewButton = withCloseDialogEditorState(
                withClosePreviewEditor(GenericButton)
            )
            return <ClosePreviewButton name="Close Preview Editor"/>        

        
        case TITLE_EDITOR:
            const CloseTitleButton = withCloseTitleEditorState(
                withCloseTitleEditor(GenericButton)
            )
            return <CloseTitleButton name="Close Title Editor" />

        case NAME_EDITOR:
            const CloseNameButton = withCloseNameEditorState(
                withCloseNameEditor(GenericButton)
            )
            return <CloseNameButton name="Close Name Editor" />

        case SCRIPT_EDITOR:
            const CloseScriptButton = withCloseScriptEditorState(
                withCloseScriptEditor(GenericButton)
            )
            return <CloseScriptButton name="Close Script Editor"/>

        default: return <div></div>
    }
}

const makeAddArgumentButton = (Base: any, withState: Function, withClick: Function) => {
    const SecondStage = withState(Base);
    const AddArgument = withClick(SecondStage); 
    return <AddArgument />    
}

export default EditorContainer;