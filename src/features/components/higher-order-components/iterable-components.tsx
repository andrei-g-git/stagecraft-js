export const withIndex = (WrappedComponent: React.FunctionComponent<any>, index: number) => (props: any) =>{
    return (
        <WrappedComponent {...props}
            index={index}
        />
    )
}