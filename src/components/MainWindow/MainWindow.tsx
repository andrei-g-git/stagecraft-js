import { useEffect } from "react";
import { connect } from "react-redux";
import FlowCanvas from "../Canvas/FlowCanvas.js";
import QuillEditor from "../Editor/QuillEditor.jsx";
import FlowSheet from "../FlowSheet.tsx/FlowSheet";
import { CoordPair } from "../Canvas/types.js";
import { Common, NodeModels } from "@/models/nodeModels.js";
import { loadedFlowModel } from "@/redux/actions.js";
import { createNode } from "@/models/usage/factory.js";
import { AllNodeModels } from "@/models/AllNodeModels.js";
import { DIALOG } from "@/models/typeOfNodes.js";
import "./MainWindow.scss";
import MainPane from "./MainPane.js";
import FlowContainer from "../FlowSheet.tsx/FlowContainer.js";
import EditorContainer from "../Editor/EditorContainer.js";

const MainWindow = (props: any) => {
    useEffect(() => {
        props.loadModel(testNodeCreation())
    },
        []
    )
    return(
        <div className="main-window-container">

            <MainPane center={<FlowContainer nodeModel={props.nodeModel}/>}
                right={<EditorContainer nodeModel={props.nodeModel}/>}
            />

        </div>
    )
}

const updateInOutCoordinates = (model: NodeModels) => {
    return () => {
        //console.log(model)
        return model.getAllCoordinates();
    }
    
}

const test = (model: NodeModels) => {
    const coordinates = model.getAllCoordinates()
    //console.log("CCCCCC: ", coordinates)
    return coordinates;
}

const makeCoordinatePairs = (coordinateArray: {x: number, y: number}[]): CoordPair[] => {
    return coordinateArray.map(vector => {
        return{
            in: {
                x: vector.x,
                y: vector.y + 100
            },
            out: {
                x: vector.x + 300,
                y: vector.y + 100
            }
        }
    })
}

const testNodeCreation = () => {
    const nodeModels: Common[] = [];
    const allNodes = new AllNodeModels(nodeModels);
    for(var i = 0; i < 100; i++){
        nodeModels.push(createNode(DIALOG))
        allNodes.setHtml(i, `<p><strong>${i}${i}${i+1}</strong><strong style="color: rgb(230, 0, 0);">${i+1}${i+1}${i+2}<u>${i+2}${i+2}</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>${i+3}${i+3}${i+3}</u></p>`);
        allNodes.setId(i, Math.floor(Math.random() * 1000));
        allNodes.setCoordinatesByIndex(i, Math.floor(Math.random() * 600), Math.floor(Math.random() * 600))      
    }


    console.log("ALL NODES", allNodes)
    return allNodes;
}

const mapStateToProps = (state: any) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);