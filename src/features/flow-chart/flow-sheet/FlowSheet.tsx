import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, changedIngoingConnectorId, changedOutgoingConnectorId, loadedFlowModel } from "@/redux-store/actions.js";
import {connect} from "react-redux";
import {CardWindow, DialogCard, TitleBar} from "@/features/flow-chart";//"../../Nodes/DialogCard";
import DragHandle from "../Nodes/DragHandle.js";
import { withInConnectorState, withOutConnectorState } from /* "@/features/flow-chart"; */"../Nodes/higher-order-components/connectorHOC.js";
import {OutConnector, InConnector} from /* "@/features/flow-chart"; */"../Nodes/Connectors";
import "./FlowSheet.scss";
import { createCard } from "../Nodes/cardFactory";
import { withId } from "@/features/components/higher-order-components/iterable-components.js";

const OutConnectorWithState = withOutConnectorState(OutConnector);
const InConnectorWithState = withInConnectorState(InConnector);

//const CardWindowIdentified = withId(CardWindow);

const FlowSheet = (props: any) => {
    const sheetRef = useRef(null);
    useEffect(() => {
        props.notifyCurrentRef(sheetRef.current);
    },
        []
    );

    useEffect(() => {
        console.log("editor state changed")
    },
        [props.editorVisible]
    );

    return (
        <div className="flow-sheet"
            ref={sheetRef}
        >
            {   props.nodeModel ? 
                    props.nodeModel.Models.map((node: Common, index: number) => {
                        const CardWindowIdentified = withId(CardWindow, props.nodeModel.getId(index));
                        return (
                            <DragHandle id={props.nodeModel.getId(index)}
                                position={(props.nodeModel as NodeModels).getCoordinatesByIndex(index)}
                                notifyPosition={updateModelCoordinates(props.nodeModel, props.incrementDragCounter, props.count)}
                                notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                                handleClass="card-handle"
                            >
                                {/* <div className="handle-inner-container"> 
                                    {
                                        createCard(props.nodeModel.getType(index), index, props.nodeModel)
                                    }

                                    <InConnectorWithState id={props.nodeModel.getId(index)}
                                        notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.resetOutgoingAndIngoing)}
                                    />

                                    <OutConnectorWithState id={props.nodeModel.getId(index)}/>

                                </div>                            */}
                                <CardWindowIdentified 
                                    //children={undefined} 
                                    titlebar={<TitleBar className="card-handle"/>}
                                    inConnector={
                                        <InConnectorWithState id={props.nodeModel.getId(index)}
                                            notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.resetOutgoingAndIngoing)}
                                        />                                        
                                    }
                                    outConnector={
                                        <OutConnectorWithState id={props.nodeModel.getId(index)}/>
                                    }
                                >

                                    {
                                        createCard(props.nodeModel.getType(index), index, props.nodeModel)
                                    }
                                    
                                </CardWindowIdentified>
                            </DragHandle>
                        )
                  
                    })
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