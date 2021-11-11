import { Button, Classes, Intent } from "@blueprintjs/core"
type Themes = {
    cta: string,
    warning: string,
    success: string,
    danger: string,
}
var themeMap: {[key: string/* in keyof Themes */]: Intent | undefined} = {
    cta: Intent.PRIMARY,
    warning: Intent.WARNING,
    success: Intent.SUCCESS,
    danger: Intent.DANGER,
}

const ButtonBP = (props: {text: string, icon: any, theme: string, handleClick: (event: React.MouseEvent) => void}) => {
    return (
        <Button className={Classes.BUTTON}
            intent={themeMap[props.theme]}
            icon="insert"
            text="Argument"
            onClick={props.handleClick}
        />
    )
}

export default ButtonBP