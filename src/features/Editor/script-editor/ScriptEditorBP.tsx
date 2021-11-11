import { withChangeAtIndex, withNotifyChange } from "@/features/components";
import TextInputBP from "@/features/components/TextInputBP";
import { NamedValue, ScriptContent } from "@/models/nodeModels";
import { Button, Classes, ControlGroup, Divider, FormGroup, Intent, Label } from "@blueprintjs/core";
import "./ScriptEditor.scss";
import { useState } from "react";
import { withArgumentNameState, withArgumentValueState, withScriptState } from "../higher-order-components/editorHOC";
import { withChangeAtItem, withClick } from "@/features/components/higher-order-components/listeners";
import { withNewArgumentState } from "../higher-order-components/editor-buttons.hoc";
import ButtonBP from "@/features/components/ButtonBP";

const ScriptEditorBP = (props: {
    script: string,
    arguments: NamedValue[]
}) => {

    // const [script, setScript] = useState({ //this causes the subcomponents that call the function that use this to loose focus because the parent keeps re-rendering
    //     script: props.script,
    //     arguments: props.arguments
    // })

    const fullScript = {
        script: props.script,
        arguments: props.arguments        
    }

    // const FunctionInput = withNotifyChange(
    //     TextInputBP,
    //     rememberFunctionInput(/* script, setScript */fullScript)
    // )

    const FunctionInput = withScriptState(TextInputBP)
    const Element = withChangeAtItem(TextInputBP);
    const ArgumentName = withArgumentNameState(Element);
    const ArgumentValue = withArgumentValueState(Element);  
    
    const AddArgument = withClick(
        withNewArgumentState(ButtonBP)
    )

    return (
       
            <div className="bp4-form-content script-editor">
                {/* {
                    blah()
                } */}
                <FormGroup  
                    label="Function/Method:"
                    labelInfo="(required)"
                    labelFor="function-group"
                >
                    <ControlGroup id="function-group">
                        <FunctionInput icon="function"
                            fill={true}
                            placeholder="provide function..."
                            content={props.script}
                        />
                        <AddArgument text="Argument"
                            icon="insert"
                            theme="cta"
                        />
                    </ControlGroup>
                </FormGroup>

                <Divider />

                {
                    props.arguments.map((arg: NamedValue, index: number) => 
                        makeArgumentGroup(arg, index , /*script, setScript *//* fullScript */ArgumentName, ArgumentValue)
                    )
                }
            </div>

   
    )
}

const makeArgumentGroup = (arg: NamedValue, index: number, /* script: ScriptContent, setScript: React.Dispatch<any> *//* fullScript: ScriptContent */ArgumentName: React.FunctionComponent<any>, ArgumentValue: React.FunctionComponent<any>) => {
    // const ArgumentName = withChangeAtIndex(
    //     TextInputBP,
    //     index,
    //     rememberArgumentName(/* script, setScript */fullScript)
    // );
    // const ArgumentValue = withChangeAtIndex(
    //     TextInputBP,
    //     index,
    //     rememberArgumentValue(/* script, setScript */fullScript)
    // );    

    return (
        <FormGroup
            label={`argument ${index}`}
            labelInfo="(required)"
            labelFor={`argument-group ${index}`}        
        >
            <ControlGroup className="argument-group"
                id={`argument-group ${index}`}
            >
                <ArgumentName content={arg.name} 
                    index={index}
                />
                {
                    " = "
                }
                <ArgumentValue content={arg.value} 
                    index={index}
                    icon="variable"
                />   
                <Button icon="delete" 
                    intent={Intent.DANGER}
                />             
            </ControlGroup>

        </FormGroup>
    )
}

const rememberFunctionInput = (/* script: ScriptContent, setScript: React.Dispatch<any> */fullScript: ScriptContent) =>
    (value: string) => {
        // setScript({
        //     script: value,
        //     arguments: script.arguments            
        // })
        fullScript.script = value
    }

const rememberArgumentName = (/* script: ScriptContent, setScript: React.Dispatch<any> */fullScript: ScriptContent) =>
    (index: number, name: string) => {
        // const args = script.arguments;
        // args[index].name = name;

        // setScript({
        //     script: script.script,
        //     arguments: args         
        // })
        fullScript.arguments[index].name = name;
    }
const rememberArgumentValue = (/* script: ScriptContent, setScript: React.Dispatch<any> */fullScript: ScriptContent) =>
    (index: number, value: string) => {
        // const args = script.arguments;
        // args[index].value = value;

        // setScript({
        //     script: script.script,
        //     arguments: args         
        // })    
        fullScript.arguments[index].value = value;
    }

const handleAddArgument = () => {

}

export default ScriptEditorBP;