import { NodeModels } from "@/models/nodeModels";
import {FlowCanvas} from "@/features/flow-chart";//"../canvas/FlowCanvas";
import FlowSheet from "./FlowSheet";
import { useState, MouseEvent, useEffect } from "react";
import { withCountState } from "../canvas/higher-order-components/canvasHOC";
import { connect } from "react-redux";
import { changedFlowToolbarItem } from "@/redux-store/actions";
import { DIALOG_NODE, NO_SELECTION, SCRIPT_NODE } from "@/constants/toolbarItems";
import { createNode } from "@/models/usage/factory";
import { DIALOG, SCRIPT } from "@/models/typeOfNodes";

const FlowContainer = (props: any) => {
    const [sheetCurrent, setSheetCurrent] = useState(null);

    const FlowCanvasWithState = withCountState(FlowCanvas); //FlowCanvas has refs...

    useEffect(() => {
        console.log("from FlowContainer, model is:   ", props.nodeModel)
    }, 
        []
    )

    return(
        <div style={{width: "100%", height: "100%", position: "relative"}}
            onClick={handleClick(props.resetSelection, props.selected, props.nodeModel)}
        >
            {/* INJECT CHILDREN */}
            <FlowSheet notifyCurrentRef={sendFlowSheetCurrentRef(setSheetCurrent)}/>
            <FlowCanvas receiveCoordinates={updateCoordinatePairs(props.nodeModel)} 
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

            //pretty much delete this whole thing
            const stringTypes = [
                {enum: DIALOG_NODE, str: DIALOG},
                {enum: SCRIPT_NODE, str: SCRIPT}
            ]

            model.addNode(createNode(selected));
            const index = model.Length - 1;
            model.setId(index, model.generateId(/* model */));//Math.floor(Math.random() * 1000));
            model.setTitle("Click to change title", index);
            model.setCoordinatesByIndex(index, x, y);   
            model.setType(index, stringTypes.filter(pair => pair.enum === selected)[0].str); //well this is shit           
        }


        resetSelection(NO_SELECTION);  
    }
}

const updateCoordinatePairs = (model: NodeModels) => {
    return () => {
        return model.getConnectionPairs();
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