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

const MainWindow = (props: any) => {
    useEffect(() => {
        props.loadModel(testNodeCreation())
    },
        []
    )
    return(
        <div className="main-window-container">

            {/* <QuillEditor />
            {
                props.nodeModel?
                    <>
                        <FlowCanvas receiveCoordinates={updateInOutCoordinates(props.nodeModel)} />

                        <FlowSheet />            
                    </>
                :
                    <div></div>
            } */}

            <MainPane center={<FlowSheet />}
                right={<QuillEditor />}
                //bottom={<div style={{width: "1920px", height: "100px", backgroundColor:"lightgray"}}></div>}
            />

        </div>
    )
}

const updateInOutCoordinates = (model: NodeModels) => {
    return () => {
        console.log(model)
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

    allNodes.setId(0, Math.floor(Math.random() * 1000));
    allNodes.setId(1, Math.floor(Math.random() * 1000));
    allNodes.setId(2, Math.floor(Math.random() * 1000));

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