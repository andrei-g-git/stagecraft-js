import { changedEditorContent, changedEditorDialog, changedEditorHtml, changedEditorScriptArgument, changedEditorScriptName, loadedFlowModel, toggledEditor, toggledTextEditor } from "@/redux-store/actions"
import { withState } from "../../_Util/higherOrderComponents"
import { Delta } from "../types"
import { DialogContent, NodeModels } from "@/models/nodeModels"
import { connect } from "react-redux"

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
                dialog: state.editor.dialog,
                script: state.editor.script
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

export const withScriptState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent,
        (state: any) => {return{}},
        (dispatch: Function) => {
            return{       
                handleChange: (text: string) => {
                    dispatch(changedEditorScriptName(text));
                }                        
            }

        }
    )
}

// export const withArgumentState = (WrappedComponent: React.FunctionComponent<any>) => {
//     return withState(
//         WrappedComponent,
//         (state: any) => {return{}},
//         (dispatch: Function) => {
//             return{
//                 storeText: (text: string, index: number) => {
//                     dispatch(changedEditorScriptArgument(text, index));
//                 }                
//             }

//         }
//     )
// }

export const withArgumentState = (
    WrappedComponent: React.FunctionComponent<any>,
) => connect(
    (state: any) => {return{}}, 
    (dispatch: Function) => {
        return{
            handleChange: (text: string, index: number) => {
                console.log("<editorHOC.tsx> CALLED HANDLECHANGE FROM FINAL OR SECOND FINAL COMPONENT, content and index:   ", text, "  ", index)
                dispatch(changedEditorScriptArgument(text, index));
            }                
        }

    }
)(
    (props: any): JSX.Element => {
        return (
            <WrappedComponent {...props} />
        )
    }
)