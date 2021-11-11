import { toggledEditor, changedEditor, selectedNodeId, changedEditorPreview, changedEditorFullText, changedTitle, changedName, changedEditorScript } from "@/redux-store/actions";
import { connect } from "react-redux"
import {ScriptContent} from "@/models/nodeModels";
import { FULL_TEXT_EDITOR, NAME_EDITOR, PREVIEW_TEXT_EDITOR, SCRIPT_EDITOR, TITLE_EDITOR } from "@/constants/editors";
import { withState } from "@/features/_Util/higherOrderComponents";

const actionMap: {[key: number]: Function} = {};
actionMap[PREVIEW_TEXT_EDITOR] = changedEditorPreview;
actionMap[FULL_TEXT_EDITOR] = changedEditorFullText;
actionMap[TITLE_EDITOR] = changedTitle;
actionMap[NAME_EDITOR] = changedName;
actionMap[SCRIPT_EDITOR] = changedEditorScript;


export const withFlowCardState = (
    WrappedComponent: React.FunctionComponent<any>,
    type: number
) => withState(
        WrappedComponent,
        (state: any) => {
            return {}
        }, 
        (dispatch: Function) => {
            return {
                toggleEditor: (visible: boolean) => {
                    dispatch(toggledEditor(visible));
                    dispatch(changedEditor(type));
                },
                selectNode: (id: number) => {
                    dispatch(selectedNodeId(id))
                },
                sendContentToEditor: (content: string | ScriptContent) => {
                    dispatch(actionMap[type](content)); 
                }                 
            }
        }    
    )

// export const withFlowCardState = (
//     WrappedComponent: React.FunctionComponent<any>,
//     type: number
// ) => connect(
//         (state: any) => {
//             return {}
//         }, 
//         (dispatch: Function) => {
//             return {
//                 toggleEditor: (visible: boolean) => {
//                     dispatch(toggledEditor(visible));
//                     dispatch(changedEditor(type));
//                 },
//                 selectNode: (id: number) => {
//                     dispatch(selectedNodeId(id))
//                 },
//                 sendContentToEditor: (content: string | ScriptContent) => {
//                     dispatch(actionMap[type](content)); 
//                 }                 
//             }
//         }    
//     )(
//         (props: any) => {
//             return(
//                 <WrappedComponent {...props} />
//             )
//         }        
//     ) 


// export const withAvatarState = (WrappedComponent: React.FunctionComponent<any>) => 
//     connect(
//         (state: any) => {
//             return{
//                 image: state.model.nodeModel.getAvatarById(fuckthis)
//             } 
//         },
//         null
//     )(
//         (props: any) => {
//             return(
//                 <WrappedComponent {...props} />
//             )
//         }
//     )

export const withAssetsWorkingDirectoryState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                directory: state.workspace.avatars
            } 
        },
        null
    )(
        (props: any) => {
            return(
                <WrappedComponent {...props} />
            )
        }
    )

// export const withAvatarDispatch = (WrappedComponent: React.FunctionComponent<any>) => 
//     connect(
//         (state: any) => {
//             return{

//             } 
//         },
//         (dispatch: Function) => {
//             return{
//                 changeAvatar: (fileName: string) => {
//                     dispatch(nahhhhhhhh)   nope
//                 }
//             }
//         }
//     )(
//         (props: any) => {
//             return(
//                 <WrappedComponent {...props} />
//             )
//         }
//     )    