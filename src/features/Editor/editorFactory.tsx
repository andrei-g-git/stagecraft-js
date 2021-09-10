import { NO_EDITOR, SCRIPT_EDITOR, TEXT_EDITOR } from "@/constants/editors";
import { withArgumentState, withQuillEditorState, withScriptEditorState, withScriptState } from "./higher-order-components/editorHOC";
import ScriptEditor from "./ScriptEditor";
import QuillEditor from "./QuillEditor.jsx";
import SmallContainer from "../components/SmallContainer";
import TextField from "../components/TextField";
import { withIndex } from "../components/higher-order-components/iterable-components";
import { withChange, withChangeAtItem } from "../components/higher-order-components/listeners";

export const createEditor = (type: number) => {
    switch(type){
        case NO_EDITOR:
            return <div></div>

        case TEXT_EDITOR:
            const TextEditorWithState = withQuillEditorState(QuillEditor)
            return <TextEditorWithState />


        case SCRIPT_EDITOR:
            const ScriptEditorWithState = withScriptEditorState(ScriptEditor);

          
            const ScriptField = withScriptState(TextField);
            const ScriptFieldWithChange = withChange(ScriptField);  

            //const Element = withArgumentState(TextField);
            const Element = withChangeAtItem(TextField);
            //const ArgumentField = withChangeAtItem(Element);
            const ArgumentField = withArgumentState(Element);

            return <div style={{width: "100%", height: "70%", backgroundColor: "gray"}}>
                <ScriptEditorWithState 
                    renderScript={(content: string) => {
                        return(
                            <SmallContainer styles={["medium-size"]}>
                                <ScriptFieldWithChange content={content}/>
                            </SmallContainer>
                        )
                    }}

                    renderArgument={(content: string, index: number) => {
                        return(
                            <SmallContainer styles={["small-size", "background-antiquewhite"]}>
                                <ArgumentField content={content}
                                    index={index}
                                /> 
                            </SmallContainer>
                        )
                    }}
                />
            </div>

        default: return <div></div>
    }
}