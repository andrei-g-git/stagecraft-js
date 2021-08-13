import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, changedIngoingConnectorId, changedOutgoingConnectorId, loadedFlowModel } from "@/redux/actions";
import {connect} from "react-redux";
import DialogCard from "../Nodes/DialogCard";

import { createNode } from "@/models/usage/factory";
import {DIALOG} from "../../models/typeOfNodes";
import { AllNodeModels } from "@/models/AllNodeModels";
import DragHandle from "../Nodes/DragHandle.jsx";
import "./FlowSheet.scss";
import Connector from "../Nodes/Connector";
import { withDialogCardState } from "../Nodes/nodesHOC";

const FlowSheet = (props: any) => {
    const sheetRef = useRef(null);
    useEffect(() => {
        props.notifyCurrentRef(sheetRef.current);
    },
        []
    );

    useEffect(() => {

    },
        [props.textEditorVisible]
    );

    const DialogCardWithState = withDialogCardState(DialogCard);

    return (
        <div className="flow-sheet"
            ref={sheetRef}
        >
            {   props.nodeModel ? 
                    props.nodeModel.Models.map((node: Common, index: number) => 
                        <DragHandle id={props.nodeModel.getId(index)}
                            position={(props.nodeModel as NodeModels).getCoordinatesByIndex(index)}
                            notifyPosition={updateModelCoordinates(props.nodeModel, props.incrementDragCounter, props.count)}
                            notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                        >
                            {/* <DialogCardWithState id={props.nodeModel.getId(index)} 
                                preview="<div>12345</div>"
                                fullContent={props.nodeModel.getHtml(index)}
                            />    */}
                            <div className="handle-inner-container">
                                <Connector isOutgoing={false} 
                                    id={props.nodeModel.getId(index)}
                                    notifyConnection={() => {}}
                                />
                                <DialogCardWithState id={props.nodeModel.getId(index)} 
                                    preview="<div>12345</div>"
                                    fullContent={props.nodeModel.getHtml(index)}
                                />                                 
                                <Connector isOutgoing={true} 
                                    id={props.nodeModel.getId(index)}
                                    notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.ingoing, props.resetOutgoingAndIngoing)}
                                />
                            </div>                           
                        </DragHandle>
                  
                    )
                :
                    <div></div>
            }
        </div>
    )
}

const addNodeConnectionToModel = (model: NodeModels, outgoing: number, ingoing: number, resetCurrentConnections: Function) => {
    return () => {
        console.log(">>>>>CONNECTED \n")
        console.log(">>>>>>>>  ", outgoing, "  ", ingoing)
        model.addConnection(outgoing, ingoing);
        resetCurrentConnections();

    }
}

const updateModelCoordinates = (model: NodeModels, incrementDragCounter: Function, count: number) => {
    return (x: number, y: number, id: number): void => {
        model.setCoordinatesById(id, x, y);
        incrementDragCounter(count);
    }
}

const recordModelOnDragEnd = (model: NodeModels, updateModel: Function) => {
    return () => {
        console.log("STOPPED")
        updateModel(model);
    }
}


const mapStateToProps = (state: any) => {
    return{
        nodeModel: state.model.nodeModel,
        count: state.ui.dragCount,
        textEditorVisible: state.ui.textEditorVisible,
        outgoing: state.ui.outgoing,
        ingoing: state.ui.ingoing
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadModel: (model: NodeModels) => {
            dispatch(loadedFlowModel(model));
        },
        incrementDragCounter: (count: number) => {
            count++;
            if(count > 999) count = 0;
            dispatch(changedDragCounter(count));
        },
        resetOutgoingAndIngoing: () => {
            dispatch(changedOutgoingConnectorId(-1));
            dispatch(changedIngoingConnectorId(-1));
        }   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlowSheet);