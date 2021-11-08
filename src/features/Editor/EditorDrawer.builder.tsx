import { editorBlueprintjsIconMap, editorTitleMap } from "@/constants/editors";
import { withEditorState } from "@/features/Editor";
import { createEditor } from "./editorFactory";

const EditorDrawerBuilder = (props: {
    Editor: React.FunctionComponent<any>,
    type: number

}) => {

    const Editor = withEditorState(props.Editor);

    return (
        <Editor icon={editorBlueprintjsIconMap[props.type]}
            title={editorTitleMap[props.type]}
            handleClose={handleClose}
            //visible={props.visible}
        >
            {
                createEditor(props.type)
            }
        </Editor>

    )
}

const handleClose = () => {

}

export default EditorDrawerBuilder;