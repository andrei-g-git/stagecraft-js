import { Button, Intent } from "@blueprintjs/core";
import { Classes, Placement, Popover2 } from "@blueprintjs/popover2";

const PopoverConfirmation = (props: {
    message: JSX.Element,
    placement: Placement,
    children: React.ReactNode,
    handleClick: (event: React.MouseEvent) => void
}) => {
    return (
        <Popover2 content={
            <div>
                {
                    props.message
                }
                <Button className={Classes.POPOVER2_DISMISS}
                    text="Yes"
                    onClick={props.handleClick}
                    intent={Intent.DANGER}
                />
            </div>
        } 
            placement={props.placement}
        >
            {
                props.children
            }
        </Popover2>      
    )
}

export default PopoverConfirmation