import { changedOutgoingConnectorId, toggledConnecting } from "@/redux-store/actions";
import { withState } from "../../../_Util/higherOrderComponents";
//import { MapStateToPropsParam } from "react-redux";


export const withOutConnectorState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                //connecting: state.ui.connecting
            }
        },        
        (dispatch: Function) => {
            return {
                draggingOut: (dragging: boolean) => {
                    dispatch(toggledConnecting(dragging));
                },
                setOutgoing: (id: number) => {
                    dispatch(changedOutgoingConnectorId(id));
                },
            }
        }
    )
}

export const withInConnectorState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(
        WrappedComponent, 
        (state: any) => {
            return {
                connecting: state.ui.connecting
            }
        },        
        (dispatch: Function) => {
            return {
                draggingOut: (dragging: boolean) => {
                    dispatch(toggledConnecting(dragging));
                },
                setIngoing: (id: number) => {
                    dispatch(changedOutgoingConnectorId(id));
                },
            }
        }
    )
}
