import "./ScriptCard.scss";

const ScriptCard = (props: any) => {

    return(
        <div className="script-node-container">
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


                {/* <span className={`arguments-span${argumentsLengthTooLong(props.arguments) ? " one-per-line" : ""}`}>
                    {
                        mergeArguments(props.arguments)
                    }
                </span>

                <span className="paranthesis">
                    {")"}
                </span>                 */}
                {
                    makeParanthesisAndArguments(props.arguments, argumentsLengthTooLong)
                }
            </div>
        </div>
    )
}

const mergeArguments = (args: string[]) => {
    return args.join();
}

const argumentsLengthTooLong = (args: string[]) => {
    let isTooLong = false;
    const combinedStringLength = args.join("").length;
    if((args.length > 3) || combinedStringLength > 30){
        isTooLong = true;        
    } 
    return isTooLong;
}

const makeParanthesisAndArguments = (args: string[], argumentsTooLong: Function) => {
    let argumentElements = <div className="after-open-paranthesis">{/* <div className="script-and-arguments"> */}
        {/* <span className="paranthesis">
            {"("}
        </span> */}

        <span className="arguments-span">
            {
                mergeArguments(args)
            }
        </span>

        <span className="paranthesis">
            {")"}
        </span>      
    </div>
    if(argumentsTooLong(args)){
        argumentElements = <div className="after-open-paranthesis-one-per-line">
            {/* <span className="paranthesis">
                {"("}
            </span> */}

            {/* <div className="arguments-per-line"> */}
                {
                    args.map((arg: string) => 
                        <span className="single-argument">
                            {"    " + arg + ","}
                        </span>
                    )
                }
            {/* </div> */}            

            <span className="paranthesis">
                {")"}
            </span>         
        </div>
    }

    return argumentElements;
}

export default ScriptCard;