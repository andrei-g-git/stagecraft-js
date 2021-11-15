import TextInputBP from "@/features/components/TextInputBP";
import { withChangeAtItem } from "@/features/components/higher-order-components/listeners";
import { NamedValue } from "@/models/nodeModels";
import { FormGroup, ControlGroup, Button, Intent } from "@blueprintjs/core";

const ArgumentGroupBP = (props: {
    name: string,
    value: NamedValue["value"]  
    index: number, 
    ArgumentName: React.FunctionComponent<any>, 
    ArgumentValue: React.FunctionComponent<any>,
    Confirmation?: React.FunctionComponent<any>    
}) => {

    let PopoverConfirmation: React.FunctionComponent<any> = (props: {target: JSX.Element, placement: string}) => props.target;
    if(props.Confirmation) PopoverConfirmation = props.Confirmation;

    return (
        <FormGroup
            label={`argument ${props.index}`}
            labelInfo="(required)"
            labelFor={`argument-group ${props.index}`}        
        >
            <ControlGroup className="argument-group"
                id={`argument-group ${props.index}`}
            >
                <props.ArgumentName content={props.name} 
                    index={props.index}
                />
                {
                    " = "
                }
                <props.ArgumentValue content={props.value} 
                    index={props.index}
                    icon="variable"
                />   
                <PopoverConfirmation 
                    message={
                        <h1>Delete?</h1>                      
                    }
                    placement="left"
                    index={props.index}
                >
                    <Button icon="delete" 
                        intent={Intent.DANGER}
                    />  
                </PopoverConfirmation>
            
            </ControlGroup>

        </FormGroup>
    )
}

export default ArgumentGroupBP