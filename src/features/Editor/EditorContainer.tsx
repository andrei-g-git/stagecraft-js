import "./EditorContainer.scss"
import { DialogContent, NodeModels, ScriptContent } from "@/models/nodeModels";
import { createEditor } from "./editorFactory.js";
import { literalToClass } from "@/models/usage/dataConversion.js";
import { StandardRichContent } from "@/models/StandardRichContent.js";
import { TEXT_EDITOR } from "@/constants/editors.js";
import { withCloseDialogEditor, withCloseDialogEditorState, withCloseScriptEditor, withCloseScriptEditorState } from "./higher-order-components/editor-buttons.hoc";
import { GenericButton } from "../components";//"@/components";


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



export default EditorContainer;