import { FULL_TEXT_EDITOR, NAME_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR, TITLE_EDITOR, editorBlueprintjsIconMap, editorTitleMap } from "@/constants/editors";
import { withEditorState } from "@/features/Editor";
import { createEditor } from "./editorFactory";
import { SyntheticEvent } from "react";
import { withCloseDialogEditorState, withCloseFullTextEditor, withCloseNameEditor, withCloseNameEditorState, withClosePreviewEditor, withCloseScriptEditor, withCloseScriptEditorState, withCloseTitleEditor, withCloseTitleEditorState } from "./higher-order-components/editor-buttons.hoc";
import { GenericButton } from "../components";
import BPButton from "../components/BPButton";

const EditorDrawerBuilder = (props: {
    Editor: React.FunctionComponent<any>,
    type: number
    handleClose: Function
}) => {

    const Editor = withEditorState(props.Editor);

    return (
        <Editor icon={editorBlueprintjsIconMap[props.type]}
            title={editorTitleMap[props.type]}
            handleClose={props.handleClose}
            //visible={props.visible}
        >
            {
                createEditor(props.type)
            }
            {
                makeCloseEditor(props.type)
            }
        </Editor>

    )
}

// const handleClose = () => {
//     return (event: SyntheticEvent<HTMLElement, Event>) => {
        
//     }
// }

const makeCloseEditor = (type: number) => {
    switch(type){
        case FULL_TEXT_EDITOR:
            const CloseFullTextButton = withCloseDialogEditorState(
                withCloseFullTextEditor(BPButton)
            )
            return <CloseFullTextButton name="Close Full Editor"
                icon="confirm"
            />     

        case PREVIEW_TEXT_EDITOR:
            const ClosePreviewButton = withCloseDialogEditorState(
                withClosePreviewEditor(BPButton)
            )
            return <ClosePreviewButton name="Close Preview Editor"
                icon="confirm"
            />        

        
        case TITLE_EDITOR:
            const CloseTitleButton = withCloseTitleEditorState(
                withCloseTitleEditor(BPButton)
            )
            return <CloseTitleButton name="Close Title Editor" 
                icon="confirm"
            />

        case NAME_EDITOR:
            const CloseNameButton = withCloseNameEditorState(
                withCloseNameEditor(BPButton)
            )
            return <CloseNameButton name="Close Name Editor" 
                icon="confirm"
            />

        case SCRIPT_EDITOR:
            const CloseScriptButton = withCloseScriptEditorState(
                withCloseScriptEditor(BPButton)
            )
            return <CloseScriptButton name="Close Script Editor"
                icon="confirm"
            />

        default: return <div></div>
    }
}

export default EditorDrawerBuilder;