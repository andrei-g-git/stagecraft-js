import AddNode from "./AddNode";
import "./FlowToolbar.scss";
import { withAddDialogState } from "./flowToolbarHOC";
import {
    DIALOG_NODE,
    SCRIPT_NODE
} from "../../const/toolbarItems";

const AddStatefulNode = withAddDialogState(AddNode); //mapStateToProps fumbles flowToolbarSelection after initial state, everything else works ...

const FlowToolbar = (props: any) => {

    return(
        <div className="flow-toolbar">
            <AddStatefulNode classAffix="dialog"
                itemEnum={DIALOG_NODE}
            />
        </div>
    )
}

export default FlowToolbar;