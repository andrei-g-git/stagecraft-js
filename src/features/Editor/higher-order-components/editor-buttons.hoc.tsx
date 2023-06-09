import { withState } from "@/features/_Util/higherOrderComponents";
import { StandardRichContent } from "@/models/StandardRichContent";
import { DialogContent, NodeModels, ScriptContent } from "@/models/nodeModels";
import { literalToClass } from "@/models/usage/dataConversion";
import { addedEditorArgument, toggledEditor } from "@/redux-store/actions";
import { MapStateToPropsParam } from "react-redux";

const withCloseEditorState = (
    WrappedComponent: React.FunctionComponent<any>,
    mapStateToProps: MapStateToPropsParam<{}, {}, unknown>
) => {
    return withState(
        WrappedComponent,
        mapStateToProps,
        (dispatch: Function) => {
            return{       
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledEditor(visible));
                }                  
            }

        }
    )
}

export const withCloseDialogEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withCloseEditorState(
        WrappedComponent,
        (state: any) => {
            return{
                id: state.model.selected,
                model: state.model.nodeModel,
                dialog: state.editor.dialog              
            }
        },
    )
}

export const withCloseScriptEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withCloseEditorState(
        WrappedComponent,
        (state: any) => {
            return{
                id: state.model.selected,
                model: state.model.nodeModel,
                script: state.editor.script             
            }
        },
    )
}

export const withCloseTitleEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withCloseEditorState(
        WrappedComponent,
        (state: any) => {
            return{
                id: state.model.selected,
                model: state.model.nodeModel,
                content: state.editor.title             
            }
        },
    )
}

export const withCloseNameEditorState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withCloseEditorState(
        WrappedComponent,
        (state: any) => {
            return{
                id: state.model.selected,
                model: state.model.nodeModel,
                content: state.editor.name 
            }
        },
    )
}

export const withCloseScriptEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return(
        <WrappedComponent {...props} 
            handleClick={() => closeScriptEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.script  
            )}
        />
    )
}

export const withCloseDialogEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return(
        <WrappedComponent {...props} 
            handleClick={() => closeDialogEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.dialog
            )}
        />
    )
}

export const withClosePreviewEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return(
        <WrappedComponent {...props} 
            handleClick={() => closePreviewEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.dialog
            )}
        />
    )
}

export const withCloseFullTextEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return(
        <WrappedComponent {...props} 
            handleClick={() => closeFullTextEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.dialog
            )}
        />
    )
}

export const withCloseTitleEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return(
        <WrappedComponent {...props} 
            handleClick={() => closeTitleEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.content
            )}
        />
    )
}

export const withCloseNameEditor = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => { //dry
    return(
        <WrappedComponent {...props} 
            handleClick={() => closeNameEditor(
                props.toggleEditor,
                props.model,
                props.id,
                props.content
            )}
        />
    )
}

const closeDialogEditor = (toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent) => {

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

const closePreviewEditor = (toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent) => {

    model.setPreviewHtmlById(id, dialog.preview.html);

    const literal = {
        content: dialog.preview.json.ops
    }
    
    const previewRichContent = literalToClass(
        literal,
        StandardRichContent
    )
    model.setPreviewJsonById(id, previewRichContent);
    toggleEditor(false);
}

const closeFullTextEditor = (toggleEditor: Function, model: NodeModels, id: number, dialog: DialogContent) => {

    model.setFullHtmlById(id, dialog.full.html);

    const literal = {
        content: dialog.full.json.ops
    }
    const fullRichContent = literalToClass(
        literal,
        StandardRichContent
    )
    model.setFullJsonById(id, fullRichContent);
    toggleEditor(false);
}

const closeTitleEditor = (toggleEditor: Function, model: NodeModels, id: number, title: string) => {
    model.setTitleById(title, id);
    toggleEditor(false);
}

const closeNameEditor = (toggleEditor: Function, model: NodeModels, id: number, name: string) => {
    model.setNameById(name, id);
    toggleEditor(false);
}

const closeScriptEditor = (toggleEditor: Function, model: NodeModels, id: number, script: ScriptContent) => {

    model.setScriptById(id, script.script);
    model.setArgumentsById(id, script.arguments);

    toggleEditor(false)
}

export const withNewArgumentState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent,
        (state: any) => {
            return{

            }
        },
        (dispatch: Function) => {
            return{
                handleClick: () => {
                    dispatch(addedEditorArgument());
                }
            }
        }    
    )
}