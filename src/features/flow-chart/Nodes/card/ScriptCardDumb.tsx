import { ScriptContent } from "@/models/nodeModels";
import "./ScriptCard.scss";

const ScriptCardDumb = (props: {script: string, content: ScriptContent, wrapContent: boolean, arguments: JSX.Element[] | JSX.Element,/* arguments: NamedValue, */ handleClick: (event: React.MouseEvent) => void}) => {
    return (
        <div className="script-card"
            onClick={props.handleClick}
        >
            <div className={`script-and-arguments${props.wrapContent? " flex-column" : ""}`}>
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
                <div className={`after-open-paranthesis${props.wrapContent? " flex-column" : ""}`}>
                    <span className={`arguments-line${props.wrapContent? " flex-column" : ""}`}>

                    </span>
                        {
                            props.arguments
                        }
                    <span className="paranthesis">
                        {")"}
                    </span>                      
                </div>
            </div>
        </div>
    )
}

export default ScriptCardDumb;