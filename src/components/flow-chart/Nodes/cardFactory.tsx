import { NodeModels } from "@/models/nodeModels";
import {
    DIALOG,
    SCRIPT
} from "@/models/typeOfNodes";
import { withDialogCardState, withScriptCardState } from "./HigherOrderComponents/stateHOC";//"./nodesHOC";
import { withHandlers } from "./HigherOrderComponents/cardHOC";
import DialogCard from "./DialogCard";
import ScriptCard from "./ScriptCard";

export const createCard = (type: string, index: number, model: NodeModels) => {
    switch(type){

        case DIALOG:
            const DialogWithHandlers = withHandlers(DialogCard);
            const DialogWithStateAndHandlers = withDialogCardState(DialogWithHandlers);
            return<DialogWithStateAndHandlers 
                id={model.getId(index)}
                preview={model.getPreviewHtml(index)} 
                full={model.getFullHtml(index)}
                content={{
                    preview: {
                        html: model.getPreviewHtml(index),
                        json: model.getPreviewJson(index)
                    },
                    full: {
                        html: model.getFullHtml(index),
                        json: model.getFullJson(index)
                    }                    
                }}
            />
        case SCRIPT:

            const WithHandlers = withHandlers(ScriptCard); //need to call this first even though it uses store state that hansn't yet been added...
            const WithStateAndHandlers = withScriptCardState(WithHandlers);
            return <WithStateAndHandlers
                id={model.getId(index)}
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