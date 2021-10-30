import { toggledSettings } from "@/redux-store/actions";
import { connect } from "react-redux";

export const withSettingsToggleState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return{
                visible: state.ui.settingsVisible //don't need
            }
        },
        (dispatch: Function) => {
            return{
                openSettings: (visible: boolean) => {
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

export const withOpenSettings = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} handleClick={() => props.openSettings(true)}/>
        )
    }