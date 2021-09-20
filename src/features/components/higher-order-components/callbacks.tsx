
export const withNotifyIndexedContentChange = (WrappedComponent: React.FunctionComponent<any>, index: number) => //won't be using...
    (props: any) => {
        return (
            <WrappedComponent {...props}    
                index={index}
                notify={props.handleChange}
            />
        )
    }