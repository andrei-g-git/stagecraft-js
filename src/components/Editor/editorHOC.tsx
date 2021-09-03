import { changedEditorContent, changedEditorDialog, changedEditorHtml, loadedFlowModel, toggledEditor, toggledTextEditor } from "@/redux/actions"
import { withState } from "../_Util/higherOrderComponents"
import { Delta } from "./quillTypes"
import { DialogContent, NodeModels } from "@/models/nodeModels"

export const withQuillEditorState = ( //this causes the editor to loose focus on every key press...

    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.content,
                html: state.editor.dialog.full.html,
                id: state.model.selected,
                dialog: state.editor.dialog,
                full: state.editor.dialog.full.html,
                preview: state.editor.dialog.preview.html
            }
        }, 
        (dispatch: Function) => {
            return {      
                changePreviewDialog: (html: string, json: Delta, dialog: DialogContent) => {
                    const newDialog={
                        preview: {
                            html: html,
                            json: json
                        },
                        full: {
                            html: dialog.full.html, 
                            json: dialog.full.json
                        }
                    }
                    dispatch(changedEditorDialog(newDialog));
                },        
                changeFullDialog: (html: string, json: Delta, dialog: DialogContent) => { //I should not require the editor to know the full ddialog state -- on the other hand the editor only needs to pass it to a function so it's just passing through...
                    const newDialog={
                        preview: {
                            html: dialog.preview.html,
                            json: dialog.preview.json
                        },
                        full: {
                            html: html, 
                            json: json
                        }
                    }
                    dispatch(changedEditorDialog(newDialog));
                }       
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
                html: state.editor.dialog.full,
                json: state.editor.dialog.delta,
                visible: state.ui.editorVisible,
                id: state.model.selected,
                type: state.ui.editor,
                dialog: state.editor.dialog
            }
        }, 
        (dispatch: Function) => {
            return {
                updateModel: (model: NodeModels) => {
                    dispatch(loadedFlowModel(model));
                },
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledEditor(visible));
                },        
            }
        }
    )
}