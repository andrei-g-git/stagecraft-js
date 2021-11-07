import { useRef } from "react";

const FilePicker = (props: {children: React.ReactNode, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div onClick={handleClick(inputRef)}>
            <input style={{display: "none"}} 
                ref={inputRef}
                type="file" 
                onChange={props.handleChange}
            />    
            {
                props.children
            }        
        </div>

    )
}

const handleClick = (inputRef: any) => {
    return (event: React.MouseEvent) => {
        if(inputRef && inputRef.current){
            try{
                inputRef.current.click()   
            } catch(error){
                console.log(error)
            }             
        }        
    }
}

export default FilePicker;