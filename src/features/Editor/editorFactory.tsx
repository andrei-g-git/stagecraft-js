import { FULL_TEXT_EDITOR, NAME_EDITOR, NO_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR,/* , TEXT_EDITOR  */
TITLE_EDITOR} from "@/constants/editors";
import { 
    withArgumentNameState, 
    withArgumentValueState, 
    withNameEditorState, 
    withQuillFullTextState, 
    withQuillPreviewState, 
    withScriptEditorState, 
    withScriptState, 
    withTitleEditorState 
} from "./higher-order-components/editorHOC";
import ScriptEditor from "./script-editor/ScriptEditor";
import {QuillEditor} from "@/features/Editor";
import TextField from "../components/TextField";
import { withChangeAtItem, withClick } from "../components/higher-order-components/listeners";
import ArgumentGroup from "./script-editor/ArgumentGroup";
import LineEditor from "./script-editor/LineEditor";
import {AddElement} from "@/features/components";
import { withNewArgumentState } from "./higher-order-components/editor-buttons.hoc";
import ScriptEditorBP from "./script-editor/ScriptEditorBP";


export const createEditor = (type: number) => {
    switch(type){
        case NO_EDITOR:
            return <div></div>

        case PREVIEW_TEXT_EDITOR:
            const PreviewEditorWithState = withQuillPreviewState(QuillEditor);
            return <PreviewEditorWithState />

        case FULL_TEXT_EDITOR:
            const FullTextEditorWithState = withQuillFullTextState(QuillEditor);
            return <FullTextEditorWithState />

        case TITLE_EDITOR:
            const TitleEditorWithState = withTitleEditorState(LineEditor);
            return <TitleEditorWithState />

        case NAME_EDITOR:
            const NameEditorWithState = withNameEditorState(LineEditor);
            return <NameEditorWithState />

        case SCRIPT_EDITOR:
            //const ScriptEditorWithState = withScriptEditorState(ScriptEditor);
            const Editor = withScriptEditorState(ScriptEditorBP);

            //const ScriptField = withScriptState(TextField);

            //const Element = withChangeAtItem(TextField);
            // const ArgumentNameField = withArgumentNameState(Element);
            // const ArgumentValueField = withArgumentValueState(Element);                 
            // const ArgumentGroupJsx = ArgumentGroup(ArgumentNameField, ArgumentValueField);

            // const AddArgument = withClick( 
            //     withNewArgumentState(AddElement)
            // );

            // return <div style={{width: "100%", height: "70%", backgroundColor: "gray"}}>
            //     <ScriptEditorWithState 
            //         Script={ScriptField}
            //         Argument={ArgumentGroupJsx}
            //         Add={AddArgument}
            //     />
            // </div>

            return <Editor />
                
    }
}

function makeAddArgumentButton(AddElement: any, withNewArgumentState: any, withClick: any) {
    throw new Error("Function not implemented.");
}

