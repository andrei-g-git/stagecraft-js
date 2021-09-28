import { changedFlowToolbarItem } from "@/redux-store/actions";
import { withState } from "../../../_Util/higherOrderComponents";
import { MapStateToPropsParam } from "react-redux";
import { useEffect, useState } from "react";


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
            //console.log("from what should be a CALLBACK, state:  ", state.ui)
            return{
                selected: state.ui.flowToolbarSelection
            }
        }
    )
}

export const withAddNodeState = (WrappedComponent: React.FunctionComponent<any> ) => { //doesn't seem like I needed to do this seeing how 'selected' is common to all flow toolbar items
    return withToolbarItemState(
        WrappedComponent, 
        (state: any) => {
            //console.log("from what should be a CALLBACK, state:  ", state.ui)
            return{
                selected: state.ui.flowToolbarSelection
            }
        }
    )
}

export const withSelectedToggle = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        const [active, setActive] = useState(false);
        useEffect(() => {
            props.selected? setActive(true) : setActive(false);
        },
            [props.selected]
        ) 
        return(
            <WrappedComponent {...props}
                active={active} //couldn't I just use the 'selected' prop in the wrapped component?...
            />
        )
    }

