import { NodeModels } from "@/models/nodeModels";
import {
    DIALOG,
    SCRIPT
} from "@/models/typeOfNodes";
import { /* withDialogCardState,  */withFullTextState, withNameState, withPreviewState, withScriptCardState } from "./higher-order-components/stateHOC";
import { withHandlers } from "./higher-order-components/card.hoc";
import ScriptCard from "./card/ScriptCard";
import DialogCardLayout from "./card/DialogCardLayout";
import DialogContent from "./card/DialogContent";
import { withClickHandler } from "@/features/components/higher-order-components/listeners";
import { withId } from "@/features/components/higher-order-components/iterable-components";
import TextLabel from "@/features/components/TextLabel";
import { ClickableThumbnail, withModelState } from "@/features/components";
import { withModelAvatar } from "./card/hoc/handlers.hoc";
import { withAssetsWorkingDirectoryState } from "./card/hoc/state.hoc";

export const createCard = (type: string, index: number, model: NodeModels) => {
    switch(type){

        case DIALOG:
            const id = model.getId(index);

            const PreviewContnet = withId(
                withPreviewState(
                    withHandlers(
                        withClickHandler(DialogContent)
                    )
                ),
                id//model.getId(index)
            );

            const FullContnet = withId(
                withFullTextState(
                    withHandlers(
                        /* withClickHandler( */DialogContent/* ) */
                    )
                ),
                id //model.getId(index)
            );

            const Name = withId(
                withNameState(
                    withHandlers(
                        withClickHandler(TextLabel)
                    )
                ),
                id //model.getId(index)
            )

            const Avatar = withId(
                withModelState(
                    withAssetsWorkingDirectoryState(
                        withModelAvatar(ClickableThumbnail)
                    )
                ),
                id
            )

            return <DialogCardLayout picture={<Avatar size="fill"/>} 
                name={<Name content={model.getName(index)} />}
                preview={<PreviewContnet content={model.getPreviewHtml(index)}/>}
                full={<FullContnet content={model.getFullHtml(index)}/>}              
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