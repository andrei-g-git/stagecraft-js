import { useEffect } from "react";
import { connect } from "react-redux";
import { Common, NodeModels } from "@/models/nodeModels.js";
import { 
    loadedFlowModel,
    toggledConnecting 
} from "@/redux-store/actions";
import { AllNodeModels } from "@/models/AllNodeModels";
import "./MainWindow.scss";
import MainPane from "./MainPane";
import {FlowContainer} from "@/features/flow-chart";
import {EditorContainer} from "@/features/Editor"; //got an index
import { withEditorContainerState } from "../Editor/higher-order-components/editorHOC";
import FlowToolbarBP from "../flow-chart/flow-toolbar/FlowToolbarBP";
import { DIALOG_NODE, SCRIPT_NODE } from "@/constants/toolbarItems";
import { MainNavbarBuilder } from "@/features/main-navigation";

const toolbarItems = [
    {type: DIALOG_NODE, icon: "chat"},
    {type: SCRIPT_NODE, icon: "code"}
]

const cardTypes = toolbarItems.map((item: {type: number, icon: string}) => item.type);
const icons = toolbarItems.map((item: {type: number, icon: string}) => item.icon);

const MainWindow = (props: any) => {
    useEffect(() => {
        console.log("MainWIndow mounted")
        props.loadModel(testNodeCreation())
    },
        []
    )

    const EditorContainerWithState = withEditorContainerState(EditorContainer);

    return(
        <div className="main-window-container"
            onMouseUp={handleMouseUp(props.toggleConnecting)}
        >

            <MainPane 
                menubar={<MainNavbarBuilder />}
                center={<FlowContainer nodeModel={props.nodeModel}/>}
                toolbar={<FlowToolbarBP cardTypes={cardTypes} //MainWindow is basically becoming a god component...
                    icons={icons}
                />}
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


const testNodeCreation = () => {
    const nodeModels: Common[] = [];
    const allNodes = new AllNodeModels(nodeModels);
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