import { NodeModels } from "@/models/nodeModels";
import FlowCanvas from "../Canvas/FlowCanvas";
import FlowSheet from "./FlowSheet";
import { useState } from "react";
import { withCountState } from "../Canvas/canvasHOC";

const FlowContainer = (props: any) => {
    const [sheetCurrent, setSheetCurrent] = useState(null);

    const FlowCanvasWithState = withCountState(FlowCanvas); //FlowCanvas has refs...

    return(
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            <FlowSheet notifyCurrentRef={sendFlowSheetCurrentRef(setSheetCurrent)}/>
            <FlowCanvas receiveCoordinates={updateInOutCoordinates(props.nodeModel)} 
                sheetCurrent={sheetCurrent}
            />
        </div>    
    )
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
export default FlowContainer;