import { changedAvatarDirectory, toggledSettings } from "@/redux-store/actions";
import { connect } from "react-redux";

export const withVisibilityState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                isOpen: state.ui.settingsVisible 
            }
        },
        (dispatch: Function) => {
            return{
                closeSettings: (visible: boolean) => {
                    //debugger
                    console.log("visiblity:  ", visible)
                    dispatch(toggledSettings(visible));
                }
            }
        }
    )(
        (props: any) => {
            return(
                <WrappedComponent {...props} />
            )
        }
    )


export const withAvatarDirectoryState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                content: state.workspace.avatars 
            }
        },
        (dispatch: Function) => {
            return{
                modifyAvatarDirectory: (path: string) => {
                    dispatch(changedAvatarDirectory(path));
                }
            }
        }
    )(
        (props: any) => {
            return(
                <WrappedComponent {...props} />
            )
        }
    )