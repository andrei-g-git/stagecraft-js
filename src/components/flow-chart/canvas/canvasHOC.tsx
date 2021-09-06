import { withState } from "../../_Util/higherOrderComponents"

export const withCountState = (
    WrappedComponent: React.FunctionComponent<any>
) => {
    return withState(WrappedComponent, mapStateToProps, mapDispatchToProps)
}

const mapStateToProps = (state: any) => {
    return {
        count: state.ui.dragCount
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {}
};


