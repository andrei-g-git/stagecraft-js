import {connect} from "react-redux";
import ReactQuill from "react-quill";
import { changedEditorContent, changedEditorHtml } from "@/redux-store/actions";
import { Delta } from "./types";
import "./QuillEditor.scss";

const QuillEditor = (props: any) => {

    return(
        // <ReactQuill theme="snow"
        // value={props.html}
        // modules={getModules()}
        // formats={getFormats()}
        // onChange={handleChange(props.changeContent, props.changeHtml)}
        // >

        // </ReactQuill>
        <div></div>
    )
}

// const handleChange = (changeContent: Function, changeHtml: Function)/* (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor) => void */ => {
//     return (value: string, delta: any /* lol */, source: any, editor: ReactQuill.UnprivilegedEditor) => {
//         changeContent(editor.getContents());
//         changeHtml(value);//editor.getHTML())
//     }
// }

// const getModules = () =>{
//     const modules = {
//         toolbar: [
//             [{ 'header': [1, 2, false] }],
//             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//             ['link', 'image'],
//             [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}],
//             ['clean']
//         ]
//     }
//     return modules;
// }

// const getFormats = (): string[] => {
//     const formats = [
//         'header',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image',
//         'color'
//     ]
//     return formats;
// }

// const mapStateToProps = (state: any) => {
//     return {
//         content: state.editor.content,
//         html: state.editor.html
//     }
// }
// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         changeContent: (content: Delta) => {
//             dispatch(changedEditorContent(content))
//         },
//         changeHtml: (html: string) => {
//             dispatch(changedEditorHtml(html))
//         }
//     }
// }



//export default connect(mapStateToProps, mapDispatchToProps)(QuillEditor);
