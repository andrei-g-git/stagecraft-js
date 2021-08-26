import { NodeModels } from "@/models/nodeModels";
import {
    DIALOG,
    SCRIPT
} from "../../models/typeOfNodes";
import { withDialogCardState, withScriptCardState } from "./HigherOrderComponents/stateHOC";//"./nodesHOC";
import { withHandlers } from "./HigherOrderComponents/cardHOC";
import DialogCard from "./DialogCard";
import ScriptCard from "./ScriptCard";

export const createCard = (type: string, index: number, model: NodeModels) => {
    switch(type){
        case DIALOG:
            const DialogCardWithState = withDialogCardState(DialogCard);
            return <DialogCardWithState 
                id={model.getId(index)} 
                preview="<div> . . . .1234</div>"
                fullContent={model.getHtml(index)}
            /> 
        case SCRIPT:
            //const ScriptCardWithState = withScriptCardState(ScriptCard);
            //const WithStateAndHandlers = withHandlers(ScriptCardWithState);
            //return <ScriptCardWithState
            
            const WithHandlers = withHandlers(ScriptCard); //need to call this first even though it uses store state that hansn't yet been added...
            const WithStateAndHandlers = withScriptCardState(WithHandlers);
            return <WithStateAndHandlers
                id={model.getId(index)}
                //script={model.getScript(index)}
                //arguments={model.getArguments(index)}
                script="setCharacterLevel"
                arguments={[
                    {name: "charName", value: "Tristran"},
                    {name: "level", value: 22},
                    {name: "isWounded", value: true},
                    {name: "weapon", value: null}
                ]}
                content={{
                    script: "setCharacterLevel",
                    arguments: [
                        {name: "charName", value: "Tristran"},
                        {name: "level", value: 22},
                        {name: "isWounded", value: true},
                        {name: "weapon", value: null}
                    ]
                }}
            />
        default:
            const DefaultCard = withDialogCardState(DialogCard);
            return <DefaultCard 
                id={model.getId(index)} 
                preview="<div> . . . .1234</div>"
                fullContent={model.getHtml(index)}
            /> 
    }
}