import { changedEditorContent, changedEditorDialog, changedEditorHtml, loadedFlowModel, toggledEditor, toggledTextEditor } from "@/redux/actions"
import { withState } from "../_Util/higherOrderComponents"
import { Delta } from "./quillTypes"
import { DialogContent, NodeModels } from "@/models/nodeModels"

export const withQuillEditorState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.content,
                html: state.editor.dialog.full,//state.editor.html,
                //visible: state.ui.textEditorVisible,
                id: state.model.selected
            }
        }, 
        (dispatch: Function) => {
            return {
                // changeContent: (content: Delta) => {
                //     dispatch(changedEditorContent(content))
                // },
                // changeHtml: (html: string) => {
                //     dispatch(changedEditorHtml(html))
                // }
                changeDialog: (dialog: DialogContent) => {
                    dispatch(changedEditorDialog(dialog));
                },                
            }
        }
    )
}
//####################

export const withScriptEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent,
        (state: any) => {
            return{
                script: state.editor.script.script,
                arguments: state.editor.script.arguments
            }
        }, 
        (dispatch: Function) => {
            return {

            }
        }

    )
}



export const withEditorContainerState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                //content: state.editor.content,
                html: state.editor.html,
                //visible: state.ui.textEditorVisible,
                visible: state.ui.editorVisible,
                id: state.model.selected,
                type: state.ui.editor
            }
        }, 
        (dispatch: Function) => {
            return {
                updateModel: (model: NodeModels) => {
                    dispatch(loadedFlowModel(model));
                },
                toggleEditor: (visible: boolean) => {
                    //dispatch(toggledTextEditor(visible))
                    dispatch(toggledEditor(visible));
                },        
            }
        }
    )
}