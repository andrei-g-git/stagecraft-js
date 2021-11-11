import { PropsWithContent } from "@/features/components/types";
import { NamedValue } from "@/models/nodeModels";


const ScriptEditor = (props: {
    script: string,
    arguments: NamedValue[],
    Script: (props: PropsWithContent) => JSX.Element,
    Argument: (props: PropsWithContent) => JSX.Element,
    Add: React.FunctionComponent<any>
}) => {

    return(
        <div className="script-edditor">                   
            <props.Script content={props.script}/>
            {
                props.arguments.map((arg: NamedValue, index: number) => 
                    <props.Argument content={arg} 
                        index={index}
                    />
                )
            }
            <props.Add />
        </div>
    )
}

export default ScriptEditor;