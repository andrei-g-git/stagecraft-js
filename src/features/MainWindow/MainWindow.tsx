import { useEffect } from "react";
import { connect } from "react-redux";
import { CoordPair } from "@/features/flow-chart";//"../flow-chart/canvas/types.js";
import { Common, NodeModels } from "@/models/nodeModels.js";
import { 
    loadedFlowModel,
    toggledConnecting 
} from "@/redux-store/actions";
import { AllNodeModels } from "@/models/AllNodeModels";
import "./MainWindow.scss";
import MainPane from "./MainPane";
import {FlowContainer} from "@/features/flow-chart";//"../flow-chart/flow-sheet/FlowContainer.js";
//import EditorContainer from "../Editor/EditorContainer";
import {EditorContainer} from "@/features/Editor"; //got an index
import { withEditorContainerState } from "../Editor/higher-order-components/editorHOC";
//import FlowToolbar from "../flow-chart/FlowToolbar/FlowToolbar.js";
import { FlowToolbar } from "@/features/flow-chart";

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
            onMouseUp={handleMouseUp(props.toggleConnecting)}
        >

            <MainPane center={<FlowContainer nodeModel={props.nodeModel}/>}
                toolbar={<FlowToolbar />}
                right={<EditorContainerWithState nodeModel={props.nodeModel}/>}
            />

        </div>
    )
}

const handleMouseUp = (toggleConnecting: Function) => {
    return (event: any) => {
        //console.log("MOUSE UP-------------------------")
        toggleConnecting(false);
        //console.log("still up")
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


const testNodeCreation = () => {
    const nodeModels: Common[] = [];
    const allNodes = new AllNodeModels(nodeModels);
    // for(var i = 0; i <= 100; i++){
    //     nodeModels.push(createNode(DIALOG))
    //     allNodes.setHtml(i, `<p><strong>${i}${i}${i+1}</strong><strong style="color: rgb(230, 0, 0);">${i+1}${i+1}${i+2}<u>${i+2}${i+2}</u></strong><u style="color: rgb(230, 0, 0);">bb</u><u>${i+3}${i+3}${i+3}</u></p>`);
    //     allNodes.setId(i, Math.floor(Math.random() * 1000));
    //     allNodes.setCoordinatesByIndex(i, Math.floor(Math.random() * 600), Math.floor(Math.random() * 600))      
    // }


    //console.log("ALL NODES", allNodes)
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