import { NodeModels } from "@/models/nodeModels";
import FlowCanvas from "../Canvas/FlowCanvas";
import FlowSheet from "./FlowSheet";
import { useState, MouseEvent } from "react";
import { withCountState } from "../Canvas/canvasHOC";
import { connect } from "react-redux";
import { changedFlowToolbarItem } from "@/redux/actions";
import { NO_SELECTION } from "@/const/toolbarItems";
import { createNode } from "@/models/usage/factory";
import { SCRIPT } from "@/models/typeOfNodes";

const FlowContainer = (props: any) => {
    const [sheetCurrent, setSheetCurrent] = useState(null);

    const FlowCanvasWithState = withCountState(FlowCanvas); //FlowCanvas has refs...

    return(
        <div style={{width: "100%", height: "100%", position: "relative"}}
            onClick={handleClick(props.resetSelection, props.selected, props.nodeModel)}
        >
            <FlowSheet notifyCurrentRef={sendFlowSheetCurrentRef(setSheetCurrent)}/>
            <FlowCanvas receiveCoordinates={updateInOutCoordinates(props.nodeModel)} 
                sheetCurrent={sheetCurrent}
            />
        </div>    
    )
}

const handleClick = (resetSelection: Function, selected: number, model: NodeModels) => {
    return (event: MouseEvent) => {
        
        if(selected >= 2){
            const x = event.clientX;
            const y = event.clientY;

            model.addNode(createNode(selected));
            const index = model.Length - 1;
            model.setId(index, model.generateId(/* model */));//Math.floor(Math.random() * 1000));
            model.setCoordinatesByIndex(index, x, y);              
        }


        resetSelection(NO_SELECTION);  
    }
}

const updateInOutCoordinates = (model: NodeModels) => {
    return () => {
        return model.getAllCoordinates();
    }   
}

const sendFlowSheetCurrentRef = (setSheetCurrent: Function) => {
    return (currentRef: HTMLCanvasElement | null) => {
        setSheetCurrent(currentRef);
    }
}



const mapStateToProps = (state: any) => {
    return{
        selected: state.ui.flowToolbarSelection,
        model: state.model.nodeModel
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        resetSelection: (itemEnum: number) => {
            dispatch(changedFlowToolbarItem(itemEnum))
        }
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowContainer);