import { withState } from "@/features/_Util/higherOrderComponents";
import { StandardRichContent } from "@/models/StandardRichContent";
import { DialogContent, NodeModels, ScriptContent } from "@/models/nodeModels";
import { literalToClass } from "@/models/usage/dataConversion";
import { toggledEditor } from "@/redux-store/actions";
import { MapStateToPropsParam } from "react-redux";

const withCloseEditorState = (
    WrappedComponent: React.FunctionComponent<any>,
    mapStateToProps: MapStateToPropsParam<{}, {}, unknown>
) => {
    return withState(
        WrappedComponent,
        // (state: any) => {
        //     return{
        //         id: state.model.selected,
        //         dialog: state.editor.dialog,
        //         script: state.editor.script                
        //     }
        // },
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

const closeScriptEditor = (toggleEditor: Function, model: NodeModels, id: number, script: ScriptContent) => {

    model.setScriptById(id, script.script);
    model.setArgumentsById(id, script.arguments);

    toggleEditor(false)
}
