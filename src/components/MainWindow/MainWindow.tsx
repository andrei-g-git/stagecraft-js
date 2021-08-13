import { useEffect } from "react";
import { connect } from "react-redux";
import FlowCanvas from "../Canvas/FlowCanvas.js";
import QuillEditor from "../Editor/QuillEditor.jsx";
import FlowSheet from "../FlowSheet.tsx/FlowSheet";
import { CoordPair } from "../Canvas/types.js";
import { Common, NodeModels } from "@/models/nodeModels.js";
import { 
    loadedFlowModel,
    toggledConnecting 
} from "@/redux/actions";
import { createNode } from "@/models/usage/factory";
import { AllNodeModels } from "@/models/AllNodeModels";
import { DIALOG } from "@/models/typeOfNodes";
import "./MainWindow.scss";
import MainPane from "./MainPane";
import FlowContainer from "../FlowSheet.tsx/FlowContainer";
import EditorContainer from "../Editor/EditorContainer";
import { withEditorContainerState } from "../Editor/editorHOC";
import FlowToolbar from "../FlowToolbar/FlowToolbar.js";

const MainWindow = (props: any) => {
    useEffect(() => {
        props.loadModel(testNodeCreation())
    },
        []
    )

    useEffect(() => {
        console.log("FROM MAINNNNNN , connecting is::::  ", props.connecting)
    },
        [props.connecting]
    )

    const EditorContainerWithState = withEditorContainerState(EditorContainer);

    return(
        <div className="main-window-container"
            onMouseUp={handleMouseUp(toggledConnecting)}
        >

            <MainPane center={<FlowContainer nodeModel={props.nodeModel}/>}
                toolbar={<FlowToolbar />}
                right={<EditorContainerWithState nodeModel={props.nodeModel}/>}
            />

        </div>
    )
}

const handleMouseUp = (toggleConnecting: Function) => {
    return () => {
        console.log("MOUSE UP-------------------------")
        toggleConnecting(false);
    }
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
    // for(var i = 0; i <= 100; i++){
    //     nodeModels.push(createNode(DIALOG))
    //     allNodes.setHtml(i, `<p><strong>${i}${i}${i+1}</strong><strong style="color: rgb(230, 0, 0);">${i+1}${i+1}${i+2}<u>${i+2}${i+2}</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>${i+3}${i+3}${i+3}</u></p>`);
    //     allNodes.setId(i, Math.floor(Math.random() * 1000));
    //     allNodes.setCoordinatesByIndex(i, Math.floor(Math.random() * 600), Math.floor(Math.random() * 600))      
    // }


    console.log("ALL NODES", allNodes)
    return allNodes;
}

const mapStateToProps = (state: any) => {
    return {
        nodeModel: state.model.nodeModel,
        connecting: state.ui.connecting //for debugging 
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadModel: (model: NodeModels) => {
            dispatch(loadedFlowModel(model));
        },
        toggleConnecting: (connecting: boolean) => {
            dispatch(toggledConnecting(connecting));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);