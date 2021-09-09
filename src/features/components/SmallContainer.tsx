const SmallContainer = (props: any) => {
    return(
        <div className={`small-container ${props.styles.join(" ")}`} >
            {
                props.children
            }
        </div>
    )
}

export default SmallContainer;