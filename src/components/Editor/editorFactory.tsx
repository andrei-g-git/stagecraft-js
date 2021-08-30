import { NO_EDITOR, SCRIPT_EDITOR, TEXT_EDITOR } from "@/const/editors";
import { withQuillEditorState, withScriptEditorState } from "./editorHOC";
import ScriptEditor from "./ScriptEditor";
import QuillEditor from "./QuillEditor.jsx";

export const createEditor = (type: number) => {
    switch(type){
        case NO_EDITOR:
            return <div></div>
        case TEXT_EDITOR:
            const TextEditorWithState = withQuillEditorState(QuillEditor)
            return <TextEditorWithState />

        case SCRIPT_EDITOR:
            const ScriptEditorWithState = withScriptEditorState(ScriptEditor);
            return <div style={{width: "100%", height: "70%", backgroundColor: "gray"}}>
                <ScriptEditorWithState />
            </div>

        default: return <div></div>
    }
}