import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, changedIngoingConnectorId, changedOutgoingConnectorId, loadedFlowModel } from "@/redux-store/actions.js";
import {connect} from "react-redux";
import {CardWindow, DialogContent, FlowCardBuilder, TitleBar, withDeleteNodeState} from "@/features/flow-chart";
import {DragHandle} from "@/features/flow-chart";
import { withInConnectorState, withOutConnectorState } from "@/features/flow-chart";
import {OutConnector, InConnector} from "@/features/flow-chart"; //I can pretty much chain import these now...
import { createCardLayout } from "@/features/flow-chart";
import { withId, withPropsIndex } from "@/features/components/higher-order-components/iterable-components.js";
import { withClickHandler } from "@/features/components/higher-order-components/listeners.js";
import { withTitleState } from "@/features/flow-chart";
import { withHandlers} from "@/features/flow-chart";
import PopoverConfirmation from "@/features/components/PopoverConfirmation.js";
import { withDeleteNode } from "@/features/flow-chart";

import { Button, Classes } from "@blueprintjs/core";
import "./FlowSheet.scss";

// const OutConnectorWithState = withOutConnectorState(OutConnector);
// const InConnectorWithState = withInConnectorState(InConnector);

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
                    props.nodeModel.Models.map((node: Common, index: number) => //{
                        <FlowCardBuilder index={index} />

                    //     const CardWindowIdentified = withId(CardWindow, props.nodeModel.getId(index));

                    //     const TitleLabel = withId( //these should be outside the component
                    //         withTitleState(
                    //             withHandlers(
                    //                 withClickHandler(DialogContent)
                    //             )
                    //         ),
                    //         props.nodeModel.getId(index)
                    //     );

                    //     const Confirmation = withDeleteNodeState(
                    //         withPropsIndex(
                    //             withDeleteNode(
                    //                 PopoverConfirmation
                    //             )
                    //         )
                    //     )

                    //     return (
                    //         <DragHandle id={props.nodeModel.getId(index)} //should be in card factory
                    //             position={(props.nodeModel as NodeModels).getCoordinatesByIndex(index)}
                    //             notifyPosition={updateModelCoordinates(props.nodeModel, props.incrementDragCounter, props.count)}
                    //             notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                    //             handleClass="card-handle"
                    //         > 
                    //             <CardWindowIdentified 
                    //                 width={150}
                    //                 height={150}
                    //                 titlebar={
                    //                     <TitleBar className="card-handle"
                    //                         title={<TitleLabel content={props.nodeModel.getTitle(index)}/>}
                    //                         Delete={<Confirmation message="Really delete?"
                    //                             placement="top"
                    //                             index={index}
                    //                         >
                    //                             <Button className={Classes.BUTTON}
                    //                                 icon="small-cross"
                    //                                 minimal
                    //                                 small
                    //                                 type="button"
                    //                             />
                    //                         </Confirmation>}
                    //                     />
                    //                 }
                    //                 layout={createCardLayout(props.nodeModel.getType(index), index, props.nodeModel)}
                    //                 inConnector={
                    //                     <InConnectorWithState id={props.nodeModel.getId(index)}
                    //                         notifyConnection={addNodeConnectionToModel(props.nodeModel, props.outgoing, props.resetOutgoingAndIngoing)}
                    //                     />                                        
                    //                 }
                    //                 outConnector={
                    //                     <OutConnectorWithState id={props.nodeModel.getId(index)}/>
                    //                 }
                    //             >
                                    
                    //             </CardWindowIdentified>
                    //         </DragHandle>
                    //     )
                  
                    /* } */)
                :
                    <></>
            }
        </div>
    )
}

const addNodeConnectionToModel = (model: NodeModels, outgoing: number, resetCurrentConnections: Function) => {
    return (ingoing: number) => {
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