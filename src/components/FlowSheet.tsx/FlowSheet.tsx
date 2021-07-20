import { useEffect } from "react";
import { Common, NodeModels } from "@/models/nodeModels";
import { loadedFlowModel } from "@/redux/actions";
import {connect} from "react-redux";
import DialogCard from "../Nodes/DialogCard";

import { createNode } from "@/models/usage/factory";
import {DIALOG} from "../../models/typeOfNodes";
import { AllNodeModels } from "@/models/AllNodeModels";
import DragHandle from "../Nodes/DragHandle.jsx";


const FlowSheet = (props: any) => {

    useEffect(() => {
        props.loadModel(testNodeCreation())
    },
        []
    )
    return (
        <div>
            {   props.nodeModel ? 
                    props.nodeModel.Models.map((node: Common, index: number) => 
                        <DragHandle id={props.nodeModel.getId(index)}
                            notifyPosition={updateModelCoordinates(props.nodeModel)}
                            notifyDragStop={recordModelOnDragEnd(props.nodeModel, props.loadModel)}
                        >
                            <DialogCard id={props.nodeModel.getId(index)} 
                                preview="<div>12345</div>"
                                //fullContent={<div dangerouslySetInnerHTML={{__html: props.nodeModel.getHtml(index)}}></div>}
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

const updateModelCoordinates = (model: NodeModels) => {
    return (x: number, y: number, id: number): void => {
        model.setCoordinatesById(id, x, y);
        console.log("x, y:  ", x, "  ", y)
    }
}

const recordModelOnDragEnd = (model: NodeModels, updateModel: Function) => {
    return () => {
        console.log("STOPPED")
        updateModel(model);
    }
}

const testNodeCreation = () => {
    const nodeModels: Common[] = [];
    //for(var i=0; i <=2; i++){}
    Array.from({length: 3}, () => {
        console.log("REPEAT")
        nodeModels.push(createNode(DIALOG))
    })
    //const node = createNode(DIALOG);
    const allNodes = new AllNodeModels(nodeModels);
    allNodes.setHtml(0, `<p><strong>aaaaaaa</strong><strong style="color: rgb(230, 0, 0);">axxx<u>bb</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>xxxxxxxxx</u></p>`);
    allNodes.setHtml(1, `<p><strong>bbbbbbb</strong><strong style="color: rgb(0, 230, 0);">bxxx<u>bb</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>xxxxxxxxx</u></p>`);
    allNodes.setHtml(2, `<p><strong>ccccccc</strong><strong style="color: rgb(0, 0, 230);">cxxx<u>bb</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>xxxxxxxxx</u></p>`);
    console.log("ALL NODES", allNodes)
    return allNodes;
}

const fetchModel = (loadModel: Function) => { //probably won't keep
    const fs = require("fs");
    fs.readFile(
        "C:/Users/me/Documents/quillInnerHTML.txt",
        {encoding: "utf-8"},
        (err: any, data: any) => {
            if(!err){
                //don't need this yet to test
            } else {
                console.log(err)
            }
        }        
    )
}

const mapStateToProps = (state: any) => {
    return{
        nodeModel: state.model.nodeModel
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadModel: (model: NodeModels) => {
            dispatch(loadedFlowModel(model));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlowSheet);