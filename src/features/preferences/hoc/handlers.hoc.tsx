export const withCloseSettings = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                handleClick={() => props.closeSettings(false)}
                handleClose={() => props.closeSettings(false)}
            />
        )
    }

export const withAvatarDirectory = (WrappedComponent: React.FunctionComponent<any>) => 
(props: any) => {
    return(
        <WrappedComponent {...props} 
            handleChange={props.modifyAvatarDirectory}
        />
    )
}