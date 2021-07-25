import { useEffect, useRef } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { changedDragCounter, loadedFlowModel } from "@/redux/actions";
import {connect} from "react-redux";
import DialogCard from "../Nodes/DialogCard";

import { createNode } from "@/models/usage/factory";
import {DIALOG} from "../../models/typeOfNodes";
import { AllNodeModels } from "@/models/AllNodeModels";
import DragHandle from "../Nodes/DragHandle.jsx";
import "./FlowSheet.scss";

const FlowSheet = (props: any) => {
    const sheetRef = useRef(null);
    useEffect(() => {
        props.notifyCurrentRef(sheetRef.current);
    },
        []
    )
    return (
        <div className="flow-sheet"
            ref={sheetRef}
        >
            {   props.nodeModel ? 
                    props.nodeModel.Models.map((node: Common, index: number) => 
                        <DragHandle id={props.nodeModel.getId(index)}
                            notifyPosition={updateModelCoordinates(props.nodeModel, props.incrementDragCounter, props.count)}
                            notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                        >
                            <DialogCard id={props.nodeModel.getId(index)} 
                                preview="<div>12345</div>"
                                fullContent={props.nodeModel.getHtml(index)}
                            />                              
                        </DragHandle>
                  
                    )
                :
                    <div></div>
            }
        </div>
    )
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
        count: state.ui.dragCount
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
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlowSheet);