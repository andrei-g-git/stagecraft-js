import { NamedValue } from "@/models/nodeModels";


const ScriptEditor = (props: any) => {

    return(
        <div>
            {
                props.renderScript(props.script)
            }
            {
                props.arguments.map((arg: NamedValue, index: number) => 
                    props.renderArgument(arg.name, arg.value, index)
                )
            }                       

        </div>
    )
}

export default ScriptEditor;