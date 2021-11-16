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
import { withAssetsWorkingDirectoryState, withFlowCardState } from "./card/hoc/state.hoc";
import FilePicker from "@/features/components/FilePicker";
//import {ScriptCardBuilder} from "@/features/flow-chart";
import ScriptCardBuilder from "./card/ScriptCard.builder";
import { SCRIPT_EDITOR } from "@/constants/editors";
import {ScriptCardDumb} from "@/features/flow-chart";

export const createCardLayout = (type: string, index: number, model: NodeModels) => {
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
                id 
            );

            const Name = withId(
                withNameState(
                    withHandlers(
                        withClickHandler(TextLabel)
                    )
                ),
                id
            )

            const Avatar = withId(
                withModelState(
                    withAssetsWorkingDirectoryState(
                        withModelAvatar(ClickableThumbnail)
                    )
                ),
                id
            )

            const CustomizableAvatar = <FilePicker handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if(event.target.files){
                        const fileName: string = event.target.files[0].name;
                        model.setAvatarById(id, fileName);                 
                    }

                }}
            >
                <Avatar size="fill"/>

            </FilePicker>

            return <DialogCardLayout picture={CustomizableAvatar} 
                name={<Name content={model.getName(index)} />}
                preview={<PreviewContnet content={model.getPreviewHtml(index)}/>}
                full={<FullContnet content={model.getFullHtml(index)}/>}              
            />

        case SCRIPT:
            const WithHandlers = withHandlers(ScriptCardBuilder/* ScriptCard */); //need to call this first even though it uses store state that hansn't yet been added...
            const WithStateAndHandlers = /* withScriptCardState */withFlowCardState(
                WithHandlers,
                SCRIPT_EDITOR
            );
            return <WithStateAndHandlers
                //new
                ScriptElement={ScriptCardDumb}

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