import AddNode from "./AddNode";
import "./FlowToolbar.scss";
import { withAddDialogState } from "./flowToolbarHOC";
import {
    DIALOG_NODE,
    SCRIPT_NODE
} from "../../const/toolbarItems";

const AddStatefulNode = withAddDialogState(AddNode); //mapStateToProps fumbles flowToolbarSelection after initial state, everything else works ...  -- still current?

const FlowToolbar = (props: any) => {

    return(
        <div className="flow-toolbar">
            <AddStatefulNode classAffix="dialog"
                itemEnum={DIALOG_NODE}
            />

            <AddStatefulNode classAffix="script"
                itemEnum={SCRIPT_NODE}
            />                        
        </div>
    )
}

export default FlowToolbar;