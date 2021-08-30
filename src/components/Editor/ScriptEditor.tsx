
const ScriptEditor = (props: any) => {

    return(
        <div>
            {
                props.script
            }
            {
                props.arguments.map((arg: any) => 
                    <p>{arg.value}</p>
                )
            }
        </div>
    )
}

export default ScriptEditor;