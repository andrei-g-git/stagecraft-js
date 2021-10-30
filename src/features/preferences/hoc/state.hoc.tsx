import { toggledSettings } from "@/redux-store/actions";
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