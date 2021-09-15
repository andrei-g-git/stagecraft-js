const GenericButton = (props: any) => {
    return(
        <button className="generic-button"
            onClick={props.handleClick}
        >
            {
                props.name
            }
        </button>
    )
}

export default GenericButton;