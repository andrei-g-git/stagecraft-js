import { NodeModels } from "@/models/nodeModels";
import { loadedFlowModel } from "@/redux-store/actions";
import { connect } from "react-redux";

export const withModelState = (WrappedComponent: React.FunctionComponent<any>) => 
    connect(
        (state: any) => {
            return {
                model: state.model.nodeModel
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

export const withLoadNodesState = (WrappedComponent: React.FunctionComponent<any>) => 
connect(
    null, 
    (dispatch: Function) => {
        return{
            storeNodes: (nodes: NodeModels) => {
                dispatch(loadedFlowModel(nodes))
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

