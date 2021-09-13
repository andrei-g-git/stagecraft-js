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
                props.handleChange(content, props.index); 
            }}
        />
    )
}