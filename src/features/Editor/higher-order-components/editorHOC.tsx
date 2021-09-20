import { 
    changedEditorArgumentName, 
    changedEditorArgumentValue, 
    changedEditorDialog,
    changedEditorFullText,
    changedEditorFullTextJson,
    changedEditorPreview, 
    changedEditorPreviewJson, 
    changedEditorScriptName, 
    changedTitle, 
    //changedTitleJson, 
    loadedFlowModel, 
    toggledEditor
} from "@/redux-store/actions"
import { withState } from "../../_Util/higherOrderComponents"
import { Delta } from "../types"
import { DialogContent, NodeModels } from "@/models/nodeModels"
import { connect } from "react-redux"


export const withQuillPreviewState = ( WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.dialog.preview.html
            }
        }, 
        (dispatch: Function) => {
            return {      
                changeDialog: (html: string, json: Delta) => {
                    dispatch(changedEditorPreview(html));
                    dispatch(changedEditorPreviewJson(json)); //not actually json, it's a literal
                }     
            }
        }
    )
}

export const withQuillFullTextState = ( WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.dialog.full.html
            }
        }, 
        (dispatch: Function) => {
            return {      
                changeDialog: (html: string, json: Delta) => {
                    dispatch(changedEditorFullText(html));
                    dispatch(changedEditorFullTextJson(json)); //not actually json, it's a literal
                }     
            }
        }
    )
}

export const withQuillTitleState = ( WrappedComponent: React.FunctionComponent<any>) => { //no longer using
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.title.html
            }
        }, 
        (dispatch: Function) => {
            return {      
                changeDialog: (html: string, json: Delta) => {
                    dispatch(changedTitle(html));
                    //dispatch(changedTitleJson(json)); //not actually json, it's a literal
                }     
            }
        }
    )
}

export const withTitleEditorState = ( WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.title
            }
        }, 
        (dispatch: Function) => {
            return {      
                changeContent: (title: string, json: Delta) => {
                    dispatch(changedTitle(title));
                }     
            }
        }
    )
}

// export const withQuillFullState = ( WrappedComponent: React.FunctionComponent<any>) => {
//     return withState(
//         WrappedComponent, 
//         (state: any) => {
//             return {
//                 content: state.editor.dialog.preview.html
//             }
//         }, 
//         (dispatch: Function) => {
//             return {      
//                 changePreviewDialog: (html: string, json: Delta, dialog: DialogContent) => {
//                     const newDialog={
//                         preview: {
//                             html: html,
//                             json: json
//                         },
//                         full: {
//                             html: dialog.full.html, 
//                             json: dialog.full.json
//                         }
//                     }
//                     dispatch(changedEditorDialog(newDialog));
//                 },        
//                 changeFullDialog: (html: string, json: Delta, dialog: DialogContent) => { 
//                     const newDialog={
//                         preview: {
//                             html: dialog.preview.html,
//                             json: dialog.preview.json
//                         },
//                         full: {
//                             html: html, 
//                             json: json
//                         }
//                     }
//                     dispatch(changedEditorDialog(newDialog));
//                 }       
//             }
//         }
//     )
// }


// export const withQuillEditorState = ( WrappedComponent: React.FunctionComponent<any>) => {
//     return withState(
//         WrappedComponent, 
//         (state: any) => {
//             return {
//                 content: state.editor.content,
//                 html: state.editor.dialog.full.html,
//                 id: state.model.selected,
//                 dialog: state.editor.dialog,
//                 full: state.editor.dialog.full.html,
//                 preview: state.editor.dialog.preview.html
//             }
//         }, 
//         (dispatch: Function) => {
//             return {      
//                 changePreviewDialog: (html: string, json: Delta, dialog: DialogContent) => {
//                     const newDialog={
//                         preview: {
//                             html: html,
//                             json: json
//                         },
//                         full: {
//                             html: dialog.full.html, 
//                             json: dialog.full.json
//                         }
//                     }
//                     dispatch(changedEditorDialog(newDialog));
//                 },        
//                 changeFullDialog: (html: string, json: Delta, dialog: DialogContent) => { 
//                     const newDialog={
//                         preview: {
//                             html: dialog.preview.html,
//                             json: dialog.preview.json
//                         },
//                         full: {
//                             html: html, 
//                             json: json
//                         }
//                     }
//                     dispatch(changedEditorDialog(newDialog));
//                 }       
//             }
//         }
//     )
// }

export const withScriptEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent,
        (state: any) => {
            return{
                script: state.editor.script.script,
                arguments: state.editor.script.arguments,
                argumentsLength: state.editor.arguments
            }
        }, 
        (dispatch: Function) => {
            return {}
        }

    )
}

export const withEditorContainerState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                visible: state.ui.editorVisible,
                type: state.ui.editor,
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

const withArgumentState = (
    WrappedComponent: React.FunctionComponent<any>,
    argumentAction: Function
) => connect(
    (state: any) => {return{}}, 
    (dispatch: Function) => {
        return{
            handleChange: (text: string, index: number) => {
                dispatch(argumentAction(text, index));
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


export const withArgumentNameState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withArgumentState(WrappedComponent, changedEditorArgumentName);
}

export const withArgumentValueState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withArgumentState(WrappedComponent, changedEditorArgumentValue);
}


