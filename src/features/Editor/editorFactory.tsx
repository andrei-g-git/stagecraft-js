import { FULL_TEXT_EDITOR, NO_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR,/* , TEXT_EDITOR  */
TITLE_EDITOR} from "@/constants/editors";
import { 
    withArgumentNameState, 
    withArgumentValueState, 
    withQuillFullTextState, 
    withQuillPreviewState, 
    withScriptEditorState, 
    withScriptState, 
    withTitleEditorState 
} from "./higher-order-components/editorHOC";
import ScriptEditor from "./script-editor/ScriptEditor";
import QuillEditor from "./dialog-editor/QuillEditor.jsx";
import TextField from "../components/TextField";
import { withChangeAtItem } from "../components/higher-order-components/listeners";
import ArgumentGroup from "./script-editor/ArgumentGroup";
import LineEditor from "./script-editor/LineEditor";


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

        case SCRIPT_EDITOR:
            const ScriptEditorWithState = withScriptEditorState(ScriptEditor);
            
            const ScriptField = withScriptState(TextField);

            const Element = withChangeAtItem(TextField);
            const ArgumentNameField = withArgumentNameState(Element);
            const ArgumentValueField = withArgumentValueState(Element);                 
            const ArgumentGroupJsx = ArgumentGroup(ArgumentNameField, ArgumentValueField);

            return <div style={{width: "100%", height: "70%", backgroundColor: "gray"}}>
                <ScriptEditorWithState 
                    Script={ScriptField}
                    Argument={ArgumentGroupJsx}
                />
            </div>
                
    }
}

