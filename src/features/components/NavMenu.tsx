import { Button, Menu } from '@blueprintjs/core';
import { Classes, Popover2 } from '@blueprintjs/popover2';

const NavMenu = (props: any) => {
    return (
        <Popover2 popoverClassName={Classes.POPOVER2_CONTENT}
            content={
                <Menu key="menu">
                    {
                        props.children
                    }
                </Menu>
            }
            position="bottom"
            interactionKind="click"
            autoFocus={false}
        >
            <Button 
                minimal
                large={false}
                icon={props.icon}
                text={props.name}
            />
        </Popover2>
    )
}

export default NavMenu;