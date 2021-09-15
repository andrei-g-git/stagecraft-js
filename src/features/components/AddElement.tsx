
const AddElement = (props: any) => {
    return(

        <button className="add-element"
            //onClick={props.notify}
            onClick={props.handleClick}
        >
            +
        </button>
    )
}

export default AddElement;