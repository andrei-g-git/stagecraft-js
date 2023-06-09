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
import { withCloseEditor, withEditorContainerState } from "../Editor/higher-order-components/editorHOC";
import FlowToolbarBP from "../flow-chart/flow-toolbar/FlowToolbarBP";
import { DIALOG_NODE, SCRIPT_NODE } from "@/constants/toolbarItems";
import { MainNavbarBuilder } from "@/features/main-navigation";
import { DividingContainer } from "@/features/components";
import SettingsBuilder from "../preferences/Settings.builder";

import "@blueprintjs/core/lib/css/blueprint.css"; // THE CSS FOR THE ENTIRE FRAMEWORK
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import EditorDrawerBuilder from "../Editor/EditorDrawer.builder";
import EditorDrawer from "../Editor/EditorDrawer";
import TestReactflowSheet from "../flow-chart/flow-sheet/test-reactflow-sheet";
import ReactflowToolbar from "../flow-chart/flow-toolbar/ReactflowToolbar";

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

    const EditorBuilder = withEditorContainerState(
        withCloseEditor(EditorDrawerBuilder)
    );

    return(
        <div className="main-window-container"
            onMouseUp={handleMouseUp(props.toggleConnecting)}
        >
            {
                props.nodeModel &&
                <>
                    {/* <div style={{width: "100%", height: "100%", position: "relative"}}>
                            <div style={{width: "100%", height: "40px"}}>
                                <DividingContainer border="bottom">
                                    <MainNavbarBuilder />
                                </DividingContainer>

                            </div>

                            <TestReactflowSheet model={props.nodeModel} />    

                    </div> */}

                    


                    <MainPane 
                        menubar={
                            <DividingContainer border="bottom">
                                <MainNavbarBuilder />
                            </DividingContainer>
                        }
                        explorer={
                            <DividingContainer border="right">
                                <div style={{height: "100vh"}}>awefaewfawef</div>
                            </DividingContainer>
                        }
                        //center={<FlowContainer nodeModel={props.nodeModel}/> }
                        center={<TestReactflowSheet model={props.nodeModel} />}
                        toolbar={
                            <DividingContainer border="right">
{/*                                 <FlowToolbarBP cardTypes={cardTypes} 
                                    icons={icons}
                                />  */}     
                                <ReactflowToolbar />                  
                            </DividingContainer>

                        }
                        right={
                            <DividingContainer border="left">
                                <EditorBuilder Editor={EditorDrawer}
                                    type={props.editorType}
                                />
                            </DividingContainer>    
                        }
                    /> 

                    <SettingsBuilder /> 
      
                </>
                
            }


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
        connecting: state.ui.connecting, //for debugging 
        editorType: state.ui.editor
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