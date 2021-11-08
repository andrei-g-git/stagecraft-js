import { Classes, Drawer, DrawerSize } from "@blueprintjs/core";
import { SyntheticEvent } from "react";

const EditorDrawer = (props: {children: React.ReactNode, icon: any, visible: boolean, /* type: string, */ title: string, handleClose: (event: SyntheticEvent<HTMLElement, Event>) => void}) => {
    return (
        <Drawer className={Classes.DRAWER}
            icon={props.icon}
            title={props.title}
            onClose={props.handleClose}
            isOpen={props.visible}
            hasBackdrop={true}
            canOutsideClickClose={false}
            canEscapeKeyClose={false}
            enforceFocus={true}
            size={DrawerSize.SMALL}
        >
            {
                props.children
            }
        </Drawer>
    )
}

export default EditorDrawer;