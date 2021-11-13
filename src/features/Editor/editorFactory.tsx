import { FULL_TEXT_EDITOR, NAME_EDITOR, NO_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR, TITLE_EDITOR} from "@/constants/editors";
import {
    withNameEditorState, 
    withQuillFullTextState, 
    withQuillPreviewState, 
    withScriptEditorState, 
    withScriptState, 
    withTitleEditorState 
} from "./higher-order-components/editorHOC";
import {QuillEditor, ScriptEditorBuilder} from "@/features/Editor";
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

        case NAME_EDITOR:
            const NameEditorWithState = withNameEditorState(LineEditor);
            return <NameEditorWithState />

        case SCRIPT_EDITOR:
            const Editor = withScriptEditorState(ScriptEditorBuilder);    

            return <Editor />
                
    }
}

function makeAddArgumentButton(AddElement: any, withNewArgumentState: any, withClick: any) {
    throw new Error("Function not implemented.");
}

