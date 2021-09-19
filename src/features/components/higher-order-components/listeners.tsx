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

export const withClick = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleClick={props.handleClick}
        />
    )
}

export const withClickHandler = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <div style={{width: "100%", height: "100%"}} //so this is pretty bad... 
            onClick={props.handleClick}>
            <WrappedComponent {...props}
                //handleClick={props.handleClick}
            />            
        </div>

    )
}