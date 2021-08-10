import { changedEditorContent, changedEditorHtml, loadedFlowModel, toggledTextEditor } from "@/redux/actions"
import { withState } from "../_Util/higherOrderComponents"
import { Delta } from "./quillTypes"
import { NodeModels } from "@/models/nodeModels"

export const withQuillEditorState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.content,
                html: state.editor.html,
                visible: state.ui.textEditorVisible,
                id: state.model.selected
            }
        }, 
        (dispatch: Function) => {
            return {
                changeContent: (content: Delta) => {
                    dispatch(changedEditorContent(content))
                },
                changeHtml: (html: string) => {
                    dispatch(changedEditorHtml(html))
                }
            }
        }
    )
}
//####################

export const withEditorContainerState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.content,
                html: state.editor.html,
                visible: state.ui.textEditorVisible,
                id: state.model.selected
            }
        }, 
        (dispatch: Function) => {
            return {
                updateModel: (model: NodeModels) => {
                    dispatch(loadedFlowModel(model));
                },
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledTextEditor(visible))
                },        
            }
        }
    )
}