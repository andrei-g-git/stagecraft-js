import { NamedValue } from "@/models/nodeModels";
import { Button, ControlGroup, Divider, FormGroup, Intent } from "@blueprintjs/core";
import "./ScriptEditor.scss";

const ScriptEditorBP = (props: {
    script: string,
    arguments: NamedValue[],
    Function: React.FunctionComponent<any>
    Arguments: JSX.Element,
    AddArgument?: React.FunctionComponent<any>,
    children?: React.ReactNode
}) => {
    return (
        <div className="bp4-form-content script-editor">
            <FormGroup  
                label="Function/Method:"
                labelInfo="(required)"
                labelFor="function-group"
            >
                <ControlGroup id="function-group">
                    <props.Function icon="function"
                        fill={true}
                        placeholder="provide function..."
                        content={props.script}
                    />
                    {
                        props.AddArgument? 
                            <props.AddArgument text="Argument"
                                icon="insert"
                                theme="cta"
                            />
                        :
                            props.children? <>{props.children}</> : <></>
                            
                    }

                </ControlGroup>
            </FormGroup>

            <Divider />

            {
                props.Arguments
            }
        </div>
    )
}

export default ScriptEditorBP;