import { Classes, InputGroup} from "@blueprintjs/core";
import React from "react";
import { LegacyRef, useRef, useState } from "react";

// import { ForwardedRef, MutableRefObject } from 'react';

// function setComponentRefs<T>(ref: MutableRefObject<T | null>, forwardedRef: ForwardedRef<T>){
//    return (el: T) => {
//         ref.current = el;
//         if (typeof forwardedRef === 'function') forwardedRef(el);
//         else if (forwardedRef) forwardedRef.current = el;
//     }
// }



const TextInputBP = //React.forwardRef(
    (props: {
            content: string, 
            icon?: any, 
            fill: boolean, 
            placeholder: string, 
            handleChange: Function //(event: React.ChangeEvent) => void
        }/* ,
        forwardRef: any */
    ) => {

        const [text, setText] = useState(props.content);
        //const inputRef = useRef<HTMLDivElement/* InputGroup */>(null);
        const inputRef = useRef<HTMLInputElement>(null);

        return (
            <InputGroup className={Classes.INPUT_GROUP}
                onChange={(event) => props.handleChange(event.target.value)}//handleInnerChange(props.handleChange, setText, inputRef)}
                //defaultValue={props.content}//""
                fill={props.fill}
                placeholder={props.placeholder}
                type="text"
                leftIcon={props.icon}
                value={props.content/* text */}
                ref={inputRef as unknown as LegacyRef<InputGroup>}
            />

            // <div className="bp4-input-group">
            //     <span className={`bp4-icon bp4-icon-${props.icon}`}></span>
            //     <input className="bp4-input" 
            //         type="text"  
            //         placeholder={props.placeholder} 
            //         onChange={handleInnerChange(props.handleChange/* , setText, inputRef */)}
            //         defaultValue={props.content}//""
            //         //value={text}
            //         ref={inputRef}
            //     />                
            // </div>
        )
    }
//)

const handleInnerChange = (
    handleChange: (event: React.ChangeEvent) => void,
    //setText: React.Dispatch<React.SetStateAction<string>>,
    //inputRef: /* LegacyRef<InputGroup> */React.RefObject</* HTMLDivElement */HTMLInputElement>
    //inputRef: any//LegacyRef<HTMLInputElement>
) => (event: React.ChangeEvent) => {
        //if(inputRef && inputRef.current){
            //inputRef.current.focus();
            handleChange(event);
            //setText((event.target as HTMLInputElement).value);          
        //}

    }


export default TextInputBP;