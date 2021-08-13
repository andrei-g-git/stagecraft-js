import { changedFlowToolbarItem } from "@/redux/actions";
import { withState } from "../_Util/higherOrderComponents";
import { MapStateToPropsParam } from "react-redux";


const withToolbarItemState = (
    WrappedComponent: React.FunctionComponent<any>,
    //getStateLiteral: (state: any) => {[key: string]: any} 
    mapStateToProps: MapStateToPropsParam<{}, {}, unknown>
) => {
    return withState(
        WrappedComponent, 
        // (state: any) => {
        //     return getStateLiteral(state)
        // }, 
        mapStateToProps,
        (dispatch: Function) => {
            return {
                selectItem: (itemEnum: number) => {
                    dispatch(changedFlowToolbarItem(itemEnum))
                }
            }
        }
    )
}
//####################
export const withAddDialogState = (WrappedComponent: React.FunctionComponent<any> ) => { //doesn't seem like I needed to do this seeing how 'selected' is common to all flow toolbar items
    return withToolbarItemState(
        WrappedComponent, 
        (state: any) => {
            console.log("from what should be a CALLBACK, state:  ", state.ui)
            return{
                selected: state.ui.flowToolbarSelection
            }
        }
    )
}

