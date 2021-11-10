import { Button, Classes, Intent } from "@blueprintjs/core"

const BPButton = (props: {name: string, icon: any, handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void}) => {
    return (
        <Button className={Classes.BUTTON}
            icon={props.icon}
            intent={Intent.PRIMARY}
            onClick={props.handleClick}
            text={props.name}
            type="button"
        />
    )
}

export default BPButton;