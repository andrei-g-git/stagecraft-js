import { changedEditorHtml, selectedNodeId, toggledTextEditor } from "@/redux/actions";
import { withState } from "../_Util/higherOrderComponents";

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
            return {
                toggleEditor: (visible: boolean) => {
                    //dispatch(toggledTextEditor(visible))
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                }
            }
        }
    )
}