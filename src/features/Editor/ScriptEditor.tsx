import { NamedValue } from "@/models/nodeModels";
import { useEffect } from "react";

const ScriptEditor = (props: any) => {

    return(
        <div>
            {
                props.renderScript(props.script)
            }
            {
                props.arguments.map((arg: NamedValue, index: number) => 
                    <div>
                        <>  
                            {
                                props.renderArgumentName(arg.name, index)
                            }
                        </>
                        <p>
                            {" = "}
                        </p>
                        <>
                            {
                                props.renderArgumentValue(arg.value, index)
                            }
                        </>
                            
                            
                    </div>
                    
                )
            }                       

        </div>
    )
}

export default ScriptEditor;