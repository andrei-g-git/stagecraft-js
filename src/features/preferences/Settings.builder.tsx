import { Classes } from "@blueprintjs/core";
import CenteredTitledModal from "../components/CenteredTitledModal";
import { withCloseSettings } from "./hoc/handlers.hoc";
import { withVisibilityState } from "./hoc/state.hoc";

const SettingsBuilder = (props: any) => {
    const Modal = withVisibilityState(
        withCloseSettings(CenteredTitledModal)
    )

    return (
        <div className={Classes.DIALOG_CONTAINER}>
            <Modal title="Settings"
                icon="cog"
            >
                <div style={{width: 400, height: 300, background: "lightgray", border: "solid 1px green"}}></div>
            </Modal>
        </div>
    )
}

export default SettingsBuilder;