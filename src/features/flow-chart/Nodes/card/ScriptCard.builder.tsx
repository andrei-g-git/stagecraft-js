import { NamedValue, ScriptContent } from "@/models/nodeModels";
import "./ScriptCard.scss";

const wrapClass = "flex-column";

const ScriptCardBuilder = (props: {script: string, arguments: NamedValue[], ScriptElement: React.FunctionComponent<any>, content: ScriptContent,handleClick: (event: React.MouseEvent) => void}) => {

    return (
        <props.ScriptElement script={props.script}
            arguments={makeArguments(props.arguments)}
            wrapContent={argumentsLengthTooLong(props.arguments)}
            wrapClass={wrapClass}
            handleClick={props.handleClick}
            content={props.content}
        />
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

//maybe needs decorator
const makeArguments = (args: NamedValue []) => {
    let additionalClass = "";
    let extraArgPairClass = "";
    if(argumentsLengthTooLong(args)){
        additionalClass = ` ${wrapClass}`;//" flex-column";
        extraArgPairClass = " argument-padding";
    }

    return args.map((arg: NamedValue, index: number) =>
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

const chooseValueType = (value: string | number | boolean | null) => {
    console.log("arg type:  ", typeof value)
    const stringValue = String(value);
    if(stringValue === "null") return stringValue;
    switch(typeof value){
        case "string": return "string";
        case "number": return "number";
        case "boolean": return "boolean";
        default: return "string";
    }
}

export default ScriptCardBuilder;