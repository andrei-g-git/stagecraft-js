import { useEffect } from "react";
import "./AddNode.scss";
import { connect } from "react-redux";
import { changedFlowToolbarItem, testtt } from "@/redux/actions";

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

const mapStateToProps = (state: any) => {
    return{
        selected: state.ui.blah //state.ui.flowToolbarSelection
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        selectItem: (/* itemEnum: number */item: string) => {
            //dispatch(changedFlowToolbarItem(itemEnum));
            dispatch(testtt(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNode);