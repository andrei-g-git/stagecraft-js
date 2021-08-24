import { NodeModels } from "@/models/nodeModels";
import {
    DIALOG,
    SCRIPT
} from "../../models/typeOfNodes";
import { withDialogCardState, withScriptCardState } from "./nodesHOC";
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
            const ScriptCardWithState = withScriptCardState(ScriptCard);
            return <ScriptCardWithState
                id={model.getId(index)}
                //script={model.getScript(index)}
                //arguments={model.getArguments(index)}
                script="setCharacterLevel"
                //arguments={["Tristran", 111111, 222222, 333333]}
                arguments={[
                    {name: "charName", value: "Tristran"},
                    {name: "level", value: 22},
                    {name: "isWounded", value: true},
                    {name: "weapon", value: null}
                ]}
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