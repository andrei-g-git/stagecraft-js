export const withIndex = (WrappedComponent: React.FunctionComponent<any>, index: number) => (props: any) =>{
    return (
        <WrappedComponent {...props}
            index={index}
        />
    )
}

export const withId = (WrappedComponent: React.FunctionComponent<any>, id: number) => (props: any) =>{
    return (
        <WrappedComponent {...props}
            id={id}
        />
    )
}

export const withPropsIndex = (WrappedComponent: React.FunctionComponent<any>) => (props: any) =>{
    return (
        <WrappedComponent {...props}
            index={props.index}
        />
    )
}