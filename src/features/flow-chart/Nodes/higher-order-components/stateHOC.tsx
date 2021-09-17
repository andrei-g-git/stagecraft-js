import { changedEditor, changedEditorDialog, changedEditorHtml, changedEditorScript, selectedNodeId, toggledEditor, toggledScriptEditor, toggledTextEditor } from "@/redux-store/actions";
import { withState } from "@/features/_Util/higherOrderComponents";
import { DialogContent, ScriptContent } from "@/models/nodeModels";
import { SCRIPT_EDITOR, TEXT_EDITOR } from "@/constants/editors";

export const withDialogCardState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent,
        (state: any) => {
            return {}
        }, 
        (dispatch: Function) => {
            return {
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledEditor(visible));
                    dispatch(changedEditor(TEXT_EDITOR));
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                sendContentToEditor: (content: DialogContent) => {
                    dispatch(changedEditorDialog(content)); //this and changedEditorScript can be used for polymorphism, but on;ly when sending to the editor;
                }                                               //changedEditorDialog can also be used by the Editor backward to the node, but not changedEditorScript which is replaced by more complex actions
            }
        }
    )
}

export const withScriptCardState = (WrappedComponent: React.FunctionComponent<any>) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {}
        }, 
        (dispatch: Function) => {
            return {
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledEditor(visible));
                    dispatch(changedEditor(SCRIPT_EDITOR));
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                sendContentToEditor: (content: ScriptContent) => {
                    dispatch(changedEditorScript(content));
                }                
            }
        }
    )
}