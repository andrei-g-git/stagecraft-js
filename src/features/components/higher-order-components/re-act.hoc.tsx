import { memo } from "react";

export const withMemo = (WrappedComponent: React.FunctionComponent<any>) => 
    memo(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props} />
            )
        }
)
