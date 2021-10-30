export const withCloseSettings = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => props.closeSettings(false)}
                handleClose={() => props.closeSettings(false)}
            />
        )
    }