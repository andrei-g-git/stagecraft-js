import { ButtonGroup } from "@blueprintjs/core"
import AddNodeBP from "./AddNodeBP";
import { withAddNodeState, withSelectedToggle } from "./higher-order-components/flowToolbarHOC";
import "./FlowToolbarBP.scss";

const AddNode = withSelectedToggle(
    withAddNodeState(AddNodeBP)
)

const FlowToolbarBP = (props: any) => {
    return(
        <div className="flow-toolbar">
            <ButtonGroup 
                minimal={true}
                vertical={true}
            >
                {
                    props.cardTypes.map((cardType: number, index: number) => 
                        <AddNode itemType={cardType}
                            icon={props.icons[index]} 
                        />
                    )
                }
            </ButtonGroup>
        </div>

    )
}

export default FlowToolbarBP;