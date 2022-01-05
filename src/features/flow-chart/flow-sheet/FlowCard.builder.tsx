import PopoverConfirmation from "@/features/components/PopoverConfirmation";
import { withId, withPropsIndex } from "@/features/components/higher-order-components/iterable-components";
import { withClickHandler } from "@/features/components/higher-order-components/listeners";
import { NodeModels } from "@/models/nodeModels";
import { Button, Classes } from "@blueprintjs/core";
import {
    DragHandle,
    CardWindow,
    DialogContent,
    TitleBar,
    withDeleteNode ,
    withDeleteNodeState ,
    createCardLayout ,
    withHandlers ,
    withTitleState,
    InConnector,
    OutConnector,
    withInConnectorState,
    withOutConnectorState,
} from "@/features/flow-chart";
import { connect } from "react-redux";
import { loadedFlowModel, changedDragCounter, changedOutgoingConnectorId, changedIngoingConnectorId } from "@/redux-store/actions";

type PropType = {
    index: number,
    [key: string] : any
}
const OutConnectorWithState = withOutConnectorState(OutConnector);
const InConnectorWithState = withInConnectorState(InConnector);

const Confirmation = withDeleteNodeState(
    withPropsIndex(
        withDeleteNode(
            PopoverConfirmation
        )
    )
)

const FlowCardBuilder = (props: PropType) => {

    const CardWindowIdentified = withId(CardWindow, props.model.getId(props.index)); //should use withPropsIndex or withPropsId so I can call them outisde the component
    const TitleLabel = withId( 
        withTitleState(
            withHandlers(
                withClickHandler(DialogContent)
            )
        ),
        props.model.getId(props.index)
    );

    return (
        // <DragHandle id={props.model.getId(props.index)} 
        //     position={(props.model as NodeModels).getCoordinatesByIndex(props.index)}
        //     notifyPosition={updateModelCoordinates(props.model, props.incrementDragCounter, props.count)}
        //     notifyDragStop={recordModelOnDragEnd(props.model, props.loadModel)}
        //     handleClass="card-handle"
        // > 
            <CardWindowIdentified 
                width={150}
                height={150}
                titlebar={
                    <TitleBar className="card-handle"
                        title={<TitleLabel content={props.model.getTitle(props.index)}/>}
                        Delete={<Confirmation message="Really delete?"
                            placement="top"
                            index={props.index}
                        >
                            <Button className={Classes.BUTTON}
                                icon="small-cross"
                                minimal
                                small
                                type="button"
                            />
                        </Confirmation>}
                    />
                }
                layout={createCardLayout(props.model.getType(props.index), props.index, props.model)}
                // inConnector={
                //     <InConnectorWithState id={props.model.getId(props.index)}
                //         notifyConnection={addNodeConnectionToModel(props.model, props.outgoing, props.resetOutgoingAndIngoing)}
                //     />                                        
                // }
                // outConnector={
                //     <OutConnectorWithState id={props.model.getId(props.index)}/>
                // }
            >
                
            </CardWindowIdentified>
        //</DragHandle>
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
        model: state.model.nodeModel,
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
export default connect(mapStateToProps, mapDispatchToProps)(FlowCardBuilder);