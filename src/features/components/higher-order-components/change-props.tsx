export const withMoreProps = (WrappedComponent: React.FunctionComponent<any>, extraProps: {[key: string]: any}) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} {...extraProps}/>
        )
    }