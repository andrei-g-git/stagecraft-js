import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, changedIngoingConnectorId, changedOutgoingConnectorId, loadedFlowModel } from "@/redux/actions";
import {connect} from "react-redux";
import DialogCard from "../Nodes/DialogCard";
import DragHandle from "../Nodes/DragHandle.jsx";
import { withInConnectorState, withOutConnectorState } from "../Nodes/connectorHOC";
import {OutConnector, InConnector} from "../Nodes/Connectors";
import "./FlowSheet.scss";
import { createCard } from "../Nodes/cardFactory";

const OutConnectorWithState = withOutConnectorState(OutConnector);
const InConnectorWithState = withInConnectorState(InConnector);

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
                            <div className="handle-inner-container"> 
                                {
                                    createCard(props.nodeModel.getType(index), index, props.nodeModel)
                                }

                                <InConnectorWithState id={props.nodeModel.getId(index)}
                                    notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.resetOutgoingAndIngoing)}
                                />

                                <OutConnectorWithState id={props.nodeModel.getId(index)}/>

                            </div>                           
                        </DragHandle>
                  
                    )
                :
                    <div></div>
            }
        </div>
    )
}

const addNodeConnectionToModel = (model: NodeModels, outgoing: number, resetCurrentConnections: Function) => {
    return (ingoing: number) => {
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
        updateModel(model);
    }
}


const mapStateToProps = (state: any) => {
    return{
        nodeModel: state.model.nodeModel,
        count: state.ui.dragCount,
        textEditorVisible: state.ui.textEditorVisible,
        outgoing: state.ui.outgoing,
        ingoing: state.ui.ingoing,
        editorVisible: state.ui.editorVisible
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