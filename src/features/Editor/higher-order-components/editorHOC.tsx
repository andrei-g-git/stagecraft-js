import { 
    changedEditorArgumentName, 
    changedEditorArgumentValue, 
    changedEditorFullText,
    changedEditorFullTextJson,
    changedEditorPreview, 
    changedEditorPreviewJson, 
    changedEditorScriptName, 
    changedName, 
    changedTitle,
    loadedFlowModel, 
    toggledEditor
} from "@/redux-store/actions"
import { withState } from "../../_Util/higherOrderComponents"
import { Delta } from "../types"
import { NodeModels } from "@/models/nodeModels"
import { connect } from "react-redux"
import { SyntheticEvent } from "react"


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
                changeContent: (title: string, json: Delta) => { //I don't think I need the second argument anymore...
                    dispatch(changedTitle(title));
                }     
            }
        }
    )
}

export const withNameEditorState = ( WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                content: state.editor.name 
            }
        }, 
        (dispatch: Function) => {
            return {      
                changeContent: (name: string, json: Delta) => { //don't need second argument
                    dispatch(changedName(name));
                }     
            }
        }
    )
}

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


export const withCloseEditor = (WrappedComponent: React.FunctionComponent<any>) =>
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClose={(event: SyntheticEvent<HTMLElement, Event>) => {
                    //props.toggleEditor(false);
                }}
            />
        )
    }







