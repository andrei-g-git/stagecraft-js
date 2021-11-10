import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./QuillEditor.scss";
import { useEffect, useRef } from "react";

const QuillEditor = (props) => {
    const quillRef = useRef(null);
    useEffect(() => {
        quillRef.current.focus();
    },
        []
    )
    return(
        <div className="quill-container">
            <ReactQuill className="quill-editor"
                theme="snow"
                value={props.content}
                modules={getModules()}
                formats={null}
                onChange={handleChange(props.changeDialog)}
                ref={quillRef}
            >

            </ReactQuill>               
        </div>

    )
}

const handleChange = (changeDialog) => {
    return (value, delta, source, editor) => {
        changeDialog(value, editor.getContents());
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
        ],
    }
    return modules;
}

export default QuillEditor;





// const testHandle = (testDispatch) => {
//     return (value, delta, source, editor) => {
//         testDispatch(value, editor.getContents());
//     }    
// }


// const mapStateToProps = (state) => {
//     return {
//         content: state.editor.dialog.preview.html
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         testDispatch: (html, delta) => {
//             dispatch(changedEditorPreview(html, delta))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(QuillEditor);