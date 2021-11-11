export const withChange = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleChange={props.handleChange}
        />
    )
}

export const withNotifyChange = (
    WrappedComponent: React.FunctionComponent<any>,
    notify: Function
) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleChange={(event: React.ChangeEvent) => notify((event.target) as HTMLInputElement).value}
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

export const withChangeAtIndex = (
    WrappedComponent: React.FunctionComponent<any>,
    index: number,
    notifyChange: Function
) => (props: any) => {
    return (
        <WrappedComponent {...props}
            handleChange={(event: React.ChangeEvent) => notifyChange(index, (event.target as HTMLInputElement).value)}
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