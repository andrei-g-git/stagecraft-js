export const withDeleteArgument = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => props.deleteArgument(props.index)}
            />
        )
    }