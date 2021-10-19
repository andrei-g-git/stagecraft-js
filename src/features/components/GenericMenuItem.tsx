import { MenuItem } from "@blueprintjs/core";
import {MenuItemProps} from "@/features/components";
import "./GenericMenuItem.scss";

const GenericMenuItem = ({name, icon, handleClick}: MenuItemProps) => {

    console.log("NAMEEE:  ", name)
    return (
       <MenuItem className="generic-menu-item"
            text={name}
            icon={icon} //prop value can be omitted and it's fine
            onClick={handleClick}
       /> 
    )
}



export default GenericMenuItem;