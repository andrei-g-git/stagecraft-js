import { NodeModels } from "@/models/nodeModels";
import {
    DIALOG,
    SCRIPT
} from "@/models/typeOfNodes";
import { /* withDialogCardState,  */withFullTextState, withPreviewState, withScriptCardState } from "./higher-order-components/stateHOC";
import { withHandlers } from "./higher-order-components/card.hoc";
import DialogCard from "./card/DialogCard";
import ScriptCard from "./card/ScriptCard";
import DialogCardLayout from "./card/DialogCardLayout";
import DialogContent from "./card/DialogContent";
import { withClickHandler } from "@/features/components/higher-order-components/listeners";
import { withId } from "@/features/components/higher-order-components/iterable-components";

export const createCard = (type: string, index: number, model: NodeModels) => {
    switch(type){

        case DIALOG:
            
            // const DialogWithStateAndhandlers = withId( //I have to trimm these out...
            //     withDialogCardState(
            //         withHandlers(
            //             withClickHandler(DialogCardLayout)
            //         )
            //     ),
            //     model.getId(index)
            // )


            const PreviewContnet = withId(
                withPreviewState(
                    withHandlers(
                        withClickHandler(DialogContent)
                    )
                ),
                model.getId(index)
            );

            const FullContnet = withId(
                withFullTextState(
                    withHandlers(
                        withClickHandler(DialogContent)
                    )
                ),
                model.getId(index)
            );

            return <DialogCardLayout picture={<div>Picture</div>}
                name={<div>Name</div>}
                // preview={<DialogContent content={model.getPreviewHtml(index)}/>}
                // full={<DialogContent content={model.getFullHtml(index)}/>}
                preview={<PreviewContnet content={model.getPreviewHtml(index)}/>}
                full={<FullContnet content={model.getFullHtml(index)}/>}
                // content={{
                //     preview: {
                //         html: model.getPreviewHtml(index),
                //         json: model.getPreviewJson(index)
                //     },
                //     full: {
                //         html: model.getFullHtml(index),
                //         json: model.getFullJson(index)
                //     }                    
                // }}                
            />

        case SCRIPT:

            const WithHandlers = withHandlers(ScriptCard); //need to call this first even though it uses store state that hansn't yet been added...
            const WithStateAndHandlers = withScriptCardState(WithHandlers);
            return <WithStateAndHandlers
                id={model.getId(index)}
                script={model.getScript(index)}

                arguments={model.getArguments(index)}
                content={{
                    script: model.getScript(index),
                    arguments: model.getArguments(index)
                }}                
            />
        default:

            return <></> 
    }
}