import "./EditorContainer.scss"
import { DialogContent, NodeModels, ScriptContent } from "@/models/nodeModels";
import { createEditor } from "./editorFactory.js";
import { literalToClass } from "@/models/usage/dataConversion.js";
import { StandardRichContent } from "@/models/StandardRichContent.js";
import { TEXT_EDITOR } from "@/constants/editors.js";
const EditorContainer = (props: any) => {

    return (
        props.visible? 
            <div className="editor-container">
                {
                    createEditor(props.type)
                }   
                <button onClick={props.type === TEXT_EDITOR ? 
                            () => handleClick(
                                props.toggleEditor,
                                props.nodeModel,
                                props.id,
                                props.dialog
                            ) 
                        :
                            () => handleScriptClick(
                                props.toggleEditor,
                                props.nodeModel,
                                props.id,
                                props.script                                
                            )
                    } 
                >
                    Done!
                </button>
            </div>

        :
            <div></div>
    )
}

const handleClick = (toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent) => {

    model.setPreviewHtmlById(id, dialog.preview.html);
    model.setFullHtmlById(id, dialog.full.html);

    const previewRichContent = literalToClass(
        dialog.preview.json,
        StandardRichContent
    )
    model.setPreviewJsonById(id, previewRichContent);
    const fullRichContent = literalToClass(
        dialog.full.json,
        StandardRichContent
    )
    model.setFullJsonById(id, fullRichContent);
    toggleEditor(false);
}

const handleScriptClick = (toggleEditor: Function, model: NodeModels, id: number, script: ScriptContent) => {

    model.setScriptById(id, script.script);
    model.setArgumentsById(id, script.arguments);

    toggleEditor(false)
}

export default EditorContainer;