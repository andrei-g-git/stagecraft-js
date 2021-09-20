import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, changedIngoingConnectorId, changedOutgoingConnectorId, loadedFlowModel } from "@/redux-store/actions.js";
import {connect} from "react-redux";
import {CardWindow, DialogCard, DialogContent, TitleBar} from "@/features/flow-chart";//"../../Nodes/DialogCard";
import DragHandle from "../Nodes/DragHandle.js";
import { withInConnectorState, withOutConnectorState } from /* "@/features/flow-chart"; */"../Nodes/higher-order-components/connectorHOC.js";
import {OutConnector, InConnector} from /* "@/features/flow-chart"; */"../Nodes/Connectors";
import "./FlowSheet.scss";
import { createCard } from "../Nodes/cardFactory";
import { withId } from "@/features/components/higher-order-components/iterable-components.js";
import { withChange, withClickHandler } from "@/features/components/higher-order-components/listeners.js";
import TextField from "@/features/components/TextField.js";
import { withNotifyIndexedContentChange } from "@/features/components/higher-order-components/callbacks.js";
import { withTitleChange } from "../Nodes/higher-order-components/node.hoc.js";
import { withTitleState } from "../Nodes/higher-order-components/stateHOC.js";
import { withHandlers } from "../Nodes/higher-order-components/card.hoc.js";

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
                        //const TitleField = TextField; 
                        
                        // const TitleField = withTitleState( //withTitleState is not the same function anymore, it's similar to what the dialog content component use
                        //     //withTitleChange(TextField, props.nodeModel, index),
                        //     TextField,
                        //     props.nodeModel.setTitle,
                        //     index
                        // );

                        const TitleLabel = withId(
                            withTitleState(
                                withHandlers(
                                    withClickHandler(DialogContent)
                                )
                            ),
                            props.nodeModel.getId(index)
                        );

                        return (
                            <DragHandle id={props.nodeModel.getId(index)}
                                position={(props.nodeModel as NodeModels).getCoordinatesByIndex(index)}
                                notifyPosition={updateModelCoordinates(props.nodeModel, props.incrementDragCounter, props.count)}
                                notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                                handleClass="card-handle"
                            > 
                                <div style={{position: "absolute", height: "100%", width: "100%", top: 0, left: 0}}>
                                    <CardWindowIdentified 
                                        //children={undefined} 
                                        titlebar={
                                            <TitleBar className="card-handle"
                                                // title={<TitleField className="card-text-field"
                                                //     //content={props.nodeModel.getTitle(index)} 
                                                // />}
                                                title={<TitleLabel content={props.nodeModel.getTitle(index)}/>}
                                            />
                                        }
                                        layout={createCard(props.nodeModel.getType(index), index, props.nodeModel)}
                                        inConnector={
                                            <InConnectorWithState id={props.nodeModel.getId(index)}
                                                notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.resetOutgoingAndIngoing)}
                                            />                                        
                                        }
                                        outConnector={
                                            <OutConnectorWithState id={props.nodeModel.getId(index)}/>
                                        }
                                    >
                                        
                                    </CardWindowIdentified>
                                </div>
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