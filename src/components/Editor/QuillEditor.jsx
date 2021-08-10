import {connect} from "react-redux";
import ReactQuill from "react-quill";
import { changedEditorContent, changedEditorHtml } from "@/redux/actions";
import 'react-quill/dist/quill.snow.css';
import "./QuillEditor.scss";
import { useEffect } from "react";

const QuillEditor = (props) => {
    useEffect(() => {
        if(props.visible) {
            props.changeHtml(props.html)
        }
    },
        [props.visible]
    )

    return(
        // props.visible ?
        //      <div className="quill-container">
        //         <ReactQuill theme="snow"
        //             value={props.html}
        //             modules={getModules()}
        //             formats={null}
        //             onChange={handleChange(props.changeContent, props.changeHtml)}
        //         >

        //         </ReactQuill>            
        //     </div>
        // :
        //     <div></div> 
        <div className="quill-container">
            <ReactQuill theme="snow"
                value={props.html}
                modules={getModules()}
                formats={null}
                onChange={handleChange(props.changeContent, props.changeHtml)}
            >

            </ReactQuill>               
        </div>

    )
}

const handleChange = (changeContent, changeHtml) => {
    return (value, delta, source, editor) => {
        changeContent(editor.getContents());
        changeHtml(value);
    }
}

const getModules = () =>{
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}],
            ['clean']
        ]
    }
    return modules;
}

const getFormats = () => {
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'color'
    ]
    return formats;
}

// const mapStateToProps = (state) => {
//     return {
//         content: state.editor.content,
//         html: state.editor.html,
//         visible: state.ui.textEditorVisible,
//         id: state.model.selected
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeContent: (content) => {
//             dispatch(changedEditorContent(content))
//         },
//         changeHtml: (html) => {
//             dispatch(changedEditorHtml(html))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(QuillEditor);

export default QuillEditor;