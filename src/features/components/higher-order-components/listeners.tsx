export const withChange = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleChange={props.handleChange}
        />
    )
}

export const withChangeAtItem = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleChange={(content: string) => {
                console.log("<listeners.tsx> CALLED HANDLECHANGE FROM FINAL OR SECOND FINAL COMPONENT, content and index:   ", content, "  ", props.index)
                props.handleChange(content, props.index); 
            }}
        />
    )
}