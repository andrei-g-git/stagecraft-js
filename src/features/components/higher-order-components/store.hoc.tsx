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

