import "./TextField.scss";

const TextField = (props: {content: string, handleChange: Function}) => {
    return(
        <input className="text-field" 
            type="text" 
            value={props.content}
            onChange={(event) => {props.handleChange(event.target.value)}}
            //onChange={(event) => props.notify(event.target.value)}
        />
    )
}

export default TextField;