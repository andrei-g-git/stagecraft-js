import { ButtonGroup } from "@blueprintjs/core"
import AddNodeBP from "./AddNodeBP";
import { withAddNodeState, withSelectedToggle } from "./higher-order-components/flowToolbarHOC";

const AddNode = withSelectedToggle(
    withAddNodeState(AddNodeBP)
)

const FlowToolbarBP = (props: any) => {
    return(
        <ButtonGroup minimal={true}
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
    )
}

export default FlowToolbarBP;