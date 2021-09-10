import "./TextField.scss";

const TextField = (props: any) => {
    return(
        <input className="text-field" 
            type="text" 
            value={props.content}
            //onChange={(event) => props.storeText(event.target.value)}
            onChange={(event) => props.handleChange(event.target.value)}
        />
    )
}

export default TextField;