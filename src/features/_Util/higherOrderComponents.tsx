import React from "react";
import { MapStateToPropsParam, connect } from "react-redux";

export const withState = (
    WrappedComponent: React.FunctionComponent<any>,
    mapStateToProps: MapStateToPropsParam<{}, {}, unknown>, //(state: any) => any, //{[key: string]: any},
    mapDispatchToProps: Function, //(dispatch: Function) => any //{[key: string]: Function}
) => connect(mapStateToProps, mapDispatchToProps)(
    (props: any): JSX.Element => {
        return (
            <WrappedComponent {...props} />
        )
    }
)
