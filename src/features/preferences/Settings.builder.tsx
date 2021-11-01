import { Classes } from "@blueprintjs/core";
import CenteredTitledModal from "../components/CenteredTitledModal";
import { withCloseSettings } from "./hoc/handlers.hoc";
import { withVisibilityState } from "./hoc/state.hoc";
import {Settings} from "@/features/preferences";
import {SettingsToolbar} from "@/features/preferences";
import {FlowCardSettings} from "@/features/preferences";

const SettingsBuilder = (props: any) => {
    const Modal = withVisibilityState(
        withCloseSettings(CenteredTitledModal)
    )

    return (
        <div className={Classes.DIALOG_CONTAINER}>
            <Modal title="Settings"
                icon="cog"
            >
                <Settings>
                    <SettingsToolbar 
                        flowCard={<FlowCardSettings />}
                    />
                </Settings>
            </Modal>
        </div>
    )
}

export default SettingsBuilder;