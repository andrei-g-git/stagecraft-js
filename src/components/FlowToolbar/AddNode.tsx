import { useEffect } from "react";
import "./AddNode.scss";

const AddNode = (props: any) => {
    useEffect(() => {
        console.log("SSSSELECTED:  ", props.selected, "   AND PROP ENUM:  ",  props.itemEnum)
    }, 
        [props.selected]
    )
    return(
        <div className={`add-node ${props.classAffix}-item ${props.selected == props.itemEnum ? "toolbar-item-selected" : ""}`}
            onClick={handleClick(props.selectItem, props.itemEnum)}
        >

        </div>
    )
}

const handleClick = (selectItem: Function, itemEnum: number) => {
    return () => {
        selectItem(itemEnum);
    }
}

export default AddNode;