
const ScriptEditor = (props: any) => {

    return(
        <div>
            {
                props.renderScript(props.script)
            }
            {
                props.arguments.map((arg: any, index: number) => 
                    props.renderArgument(arg.value, index)
                )
            }            
        </div>
    )
}

export default ScriptEditor;