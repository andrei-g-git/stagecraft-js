import { NamedValue } from "@/models/nodeModels";
import "./ScriptCard.scss";
import { useEffect } from "react";

const ScriptCard = (props: any) => {

    return(
        <div className="script-card"
            onClick={props.handleClick}
        >
            <div className={`script-and-arguments${argumentsLengthTooLong(props.arguments) ? " flex-column" : ""}`}>
                <div>
                    <span className="function-span">
                        {
                            props.script
                        }                    
                    </span>

                    <span className="paranthesis">
                        {"("}
                    </span>                
                </div>
                {
                    makeParanthesisAndArguments(props.arguments, argumentsLengthTooLong)
                }
            </div>
        </div>
    )
}

const argumentsLengthTooLong = (args: NamedValue[]) => {
    let isTooLong = false;
    const combinedStringLength = args
        .map((arg: NamedValue) => arg.name + "=" + arg.value?.toString())
        .join()
        .length;

    if((args.length > 2) || combinedStringLength > 30){
        isTooLong = true;        
    } 
    return isTooLong;        
}

const makeParanthesisAndArguments = (args: NamedValue [], argumentsTooLong: Function) => {
    let additionalClass = "";
    let extraArgPairClass = "";
    if(argumentsLengthTooLong(args)){
        additionalClass = " flex-column";
        extraArgPairClass = " argument-padding";
    }
    let argumentElements = <div className={`after-open-paranthesis${additionalClass}`}>
        <span className={`arguments-line${additionalClass}`}>
            {
                args.map((arg: NamedValue, index: number) =>
                    <div className={`argument-name-value${extraArgPairClass}`}>
                        <span className="argument-left-hand">
                            {
                                arg.name
                            }
                        </span>
                        <span className="argument-equal-sign">
                            =    
                        </span>   
                        <span className={`argument-${chooseValueType(arg.value)}`}>
                            {
                                arg.value?.toString()
                            }
                        </span>    
                        {
                            index < args.length - 1 ?
                                <span className="argument-comma">
                                    {", "}
                                </span>    
                            :
                                <div></div>                          
                        }               
                    </div> 

                )      
            }
        </span>

        <span className="paranthesis">
            {")"}
        </span>      
    </div>


    return argumentElements;

}

const chooseValueType = (value: string | number | boolean | null) => {
    const stringValue = String(value);
    if(stringValue === "null") return stringValue;
    switch(typeof value){
        case "string": return "string";
        case "number": return "number";
        case "boolean": return "boolean";
        default: return "string";
    }
}

export default ScriptCard;
