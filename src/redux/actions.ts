import { Common, NodeModels } from "@/models/nodeModels";
import { 
    FLOW_MODEL_LOADED 
} from "./actionTypes";


export const loadedFlowModel = (model: NodeModels) => {
    return {
        type: FLOW_MODEL_LOADED,
        payload: model
    }
}