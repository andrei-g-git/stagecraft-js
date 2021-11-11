import { Classes, Drawer, DrawerSize } from "@blueprintjs/core";
import { SyntheticEvent, useEffect, useState } from "react";

const EditorDrawer = (props: {children: React.ReactNode, icon: any, visible: boolean, /* type: string, */ title: string, handleClose: (event: SyntheticEvent<HTMLElement, Event>) => void}) => {
    const [isOpen, setOpen] = useState(false);    
    useEffect(() => {
        setOpen(props.visible)
    }, 
        [props.visible]
    )    
    return (
        <Drawer className={Classes.DRAWER}
            icon={props.icon}
            title={props.title}
            onClose={() => setOpen(false)/* props.handleClose */}
            isOpen={isOpen/* props.visible */}
            hasBackdrop={true}
            canOutsideClickClose={false}
            canEscapeKeyClose={false}
            enforceFocus={true}
            size={"35%"/* DrawerSize.SMALL */}
        >
            <div className={Classes.DRAWER_BODY}>
                {
                    props.children
                }                
            </div>
            <div className={Classes.DRAWER_FOOTER}>
                blah
            </div>

        </Drawer>
    )
}

export default EditorDrawer;