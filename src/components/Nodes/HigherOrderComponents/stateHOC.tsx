import { changedEditorHtml, changedEditorScript, selectedNodeId, toggledScriptEditor, toggledTextEditor } from "@/redux/actions";
import { withState } from "../../_Util/higherOrderComponents";
import { ScriptContent } from "@/models/nodeModels";

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
                    dispatch(toggledTextEditor(visible))
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                sendHtmlToEditor: (html: string) => {
                    dispatch(changedEditorHtml(html))
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
            console.log("store dispatches from stateHOC")
            return {
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledScriptEditor(visible))
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                sendContentToEditor: (content: ScriptContent) => {
                    dispatch(changedEditorScript(content))
                }                
            }
        }
    )
}