import { NodeModels } from "@/models/nodeModels";
import { loadedFlowModel } from "@/redux/actions";
import {connect} from "react-redux";
import DialogNodeView from "../Nodes/DialogNodeView";

const FlowSheet = (props: any) => {

    return (
        <div>
            <DialogNodeView preview="12345"
                fullContent={<div dangerouslySetInnerHTML={{__html: props.nodeModel.getHtml(0)}}>

            </div>}
            />
        </div>
    )
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