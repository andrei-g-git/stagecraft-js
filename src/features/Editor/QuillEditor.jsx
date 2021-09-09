import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./QuillEditor.scss";

const QuillEditor = (props) => {

    return(
        <div className="quill-container">
            <ReactQuill className="preview-quill"
                theme="snow"
                value={props.preview}
                modules={getModules()}
                formats={null}
                //onChange={handleChange(props.changeContent, props.changeHtml)}
                //onChange={handleChange(props.changeDialog)}
                onChange={handleChangePreview(props.changePreviewDialog, props.dialog)}
            >

            </ReactQuill>  

            <ReactQuill className="full-quill"
                theme="snow"
                value={props.full}
                modules={getModules()}
                formats={null}
                //onChange={handleChange(props.changeContent, props.changeHtml)}
                //onChange={handleChange(props.changeDialog)}
                onChange={handleChangeFull(props.changeFullDialog, props.dialog)}
            >

            </ReactQuill>               
        </div>

    )
}

const handleChangeFull = (changeFullDialog, oldDialogState/* I should not be able to access this from here, I only use it for this one thing... */) => {
    return (value, delta, source, editor) => {
        changeFullDialog(value, editor.getContents(), oldDialogState);
    }
}
const handleChangePreview = (changePreviewDialog, oldDialogState) => {
    return (value, delta, source, editor) => {
        changePreviewDialog(value, editor.getContents(), oldDialogState);
    }
}

const handleChange = (changeDialog/* changeContent, changeHtml */) => {
    return (value, delta, source, editor) => {
        // changeContent(editor.getContents());;;;
        // changeHtml(value);
        console.log("typing")
        changeDialog({
            preview: "zzzz",
            full: value,
            delta: editor.getContents()
        })
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

export default QuillEditor;