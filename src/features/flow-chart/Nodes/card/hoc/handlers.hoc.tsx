export const withModelAvatar = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {
        return(
            <WrappedComponent {...props} 
                image={ require("path").join(props.directory, props.model.getAvatarById(props.id))}
            />
        )
    }
    