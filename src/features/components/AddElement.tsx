
const AddElement = (props: any) => {
    return(

        <button className="add-element"
            onClick={props.notify}
        >
            +
        </button>
    )
}

export default AddElement;