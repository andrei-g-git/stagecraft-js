import { FULL_TEXT_EDITOR, NO_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR/* , TEXT_EDITOR  */} from "@/constants/editors";
import { withArgumentNameState, withArgumentValueState, withQuillFullTextState, withQuillPreviewState, withScriptEditorState, withScriptState } from "./higher-order-components/editorHOC";
import ScriptEditor from "./script-editor/ScriptEditor";
//import QuillEditor from "./QuillEditor_Old.jsx";
import QuillEditor from "./dialog-editor/QuillEditor.jsx";
import SmallContainer from "../components/SmallContainer";
import TextField from "../components/TextField";
import { withChange, withChangeAtItem } from "../components/higher-order-components/listeners";
import ArgumentGroup from "./script-editor/ArgumentGroup";


export const createEditor = (type: number) => {
    switch(type){
        case NO_EDITOR:
            return <div></div>

        // case TEXT_EDITOR: //no longer exists
        //     const TextEditorWithState = withQuillEditorState(QuillEditor);
        //     return <TextEditorWithState />
            

        case PREVIEW_TEXT_EDITOR:
            const PreviewEditorWithState = withQuillPreviewState(QuillEditor)
            return <PreviewEditorWithState />

        case FULL_TEXT_EDITOR:
            const FullTextEditorWithState = withQuillFullTextState(QuillEditor)
            return <FullTextEditorWithState />

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


// export const createEditor_old = (type: number) => {
//     switch(type){
//         case NO_EDITOR:
//             return <div></div>

//         case TEXT_EDITOR:
//             const TextEditorWithState = withQuillEditorState(QuillEditor)
//             return <TextEditorWithState />


//         case SCRIPT_EDITOR:
//             const ScriptEditorWithState = withScriptEditorState(ScriptEditor);
          
//             const ScriptField = withScriptState(TextField);
//             const ScriptFieldWithChange = withChange(ScriptField);

//             const Element = withChangeAtItem(TextField);

//             const ArgumentNameField = withArgumentNameState(Element);

//             const ArgumentValueField = withArgumentValueState(Element);

//             /* 
            
//                 There's no way in hell I can keep this up, I can barely make heads or tails of it and I wrote
//                 the damn thing. I should just go the dumb component > smart component route, just inject the 
//                 dumb component as a normal prop. Way more flexible, I can switch state management to whatever
//                 I want, I can refactor any way I want and it's still largely decoupled code.
//             */

//             return <div style={{width: "100%", height: "70%", backgroundColor: "gray"}}>
//                 <ScriptEditorWithState 
//                     renderScript={(content: string) => {
//                         return(
//                             <SmallContainer styles={["medium-size"]}>
//                                 <ScriptFieldWithChange content={content}/>
//                             </SmallContainer>
//                         )
//                     }}      
//                     renderArgument={(name: string, value: string, index: number) => {
//                         return(
//                             <SmallContainer styles={["large-size"]}>
//                                 <ArgumentGroup 
//                                     index={index}
//                                     name={name}
//                                     value={value}
//                                     renderName={(content: string, index: number) => {
//                                         return(
//                                             <SmallContainer styles={["small-size", "background-antiquewhite"]}>
//                                                 <ArgumentNameField content={content}
//                                                     index={index}
//                                                 /> 
//                                             </SmallContainer>
//                                         )
//                                     }}
//                                     renderValue={(content: string, index: number) => {
//                                         return(
//                                             <SmallContainer styles={["small-size", "background-antiquewhite"]}>
//                                                 <ArgumentValueField content={content}
//                                                     index={index}
//                                                 /> 
//                                             </SmallContainer>
//                                         )
//                                     }}                                      
//                                 />
//                             </SmallContainer>
//                         )
//                     }}
//                 />
//             </div>

//         default: return <div></div>
//     }
// }