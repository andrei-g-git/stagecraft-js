import { Button} from "@blueprintjs/core";

const AddNodeBP = (props: any) => {
    return (
        <Button icon={props.icon}
            onClick={() => props.selectItem(props.itemType)}
            active={props.active}
        />
    )
}

export default AddNodeBP;
