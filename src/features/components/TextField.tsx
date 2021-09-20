
import { MouseEventHandler, useState } from "react";
import "./TextField.scss";
import { NodeModels } from "@/models/nodeModels";

const TextField = (props: {content: string, handleChange: Function, className?: string, /* model: NodeModels */handleClick: MouseEventHandler}) => {
    const [count, setCount] = useState(0);
    return(
        <input className={props.className? props.className : "text-field"}
            type="text" 
            value={/* props.model.getTitle(0)} */ props.content}
            onChange={(event) => {
                props.handleChange(event.target.value);
                // setCount(count + 1);
                // if(count > 1000) setCount(0)
            }}
            onClick={props.handleClick}
        />
    )
}

export default TextField;
