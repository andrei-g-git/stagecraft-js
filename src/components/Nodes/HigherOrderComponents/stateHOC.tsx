import { changedEditor, changedEditorDialog, changedEditorHtml, changedEditorScript, selectedNodeId, toggledEditor, toggledScriptEditor, toggledTextEditor } from "@/redux/actions";
import { withState } from "../../_Util/higherOrderComponents";
import { DialogContent, ScriptContent } from "@/models/nodeModels";
import { SCRIPT_EDITOR, TEXT_EDITOR } from "@/const/editors";

//NOT USING, MOVED TO stateHOC.tsx in HigherORderComponents

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
                    //dispatch(toggledTextEditor(visible))
                    dispatch(toggledEditor(visible));
                    dispatch(changedEditor(TEXT_EDITOR));
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                // sendHtmlToEditor: (html: string) => {
                //     dispatch(changedEditorHtml(html))
                // },
                sendContentToEditor: (content: DialogContent) => {
                    dispatch(changedEditorDialog(content));
                }  
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
            //console.log("store dispatches from stateHOC")
            return {
                toggleEditor: (visible: boolean) => {
                    //dispatch(toggledScriptEditor(visible))
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