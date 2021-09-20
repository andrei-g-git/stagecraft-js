import { Common, NodeModels } from "@/models/nodeModels";
import { 
    FLOW_MODEL_LOADED,
    NODE_SELECTED, 
    TITLE_SELECTED
} from "./actionTypes";

const initialState = {
    nodeModel: null, //should this be null?
    selected: 0, //it's an id, not an array index
    //selectedTitle: "" //all this except nodeModel is UI stuff, shouldn't be here
}

export const modelReducer = (state = initialState, action: any) => {
    switch(action.type){
        case FLOW_MODEL_LOADED:
            return{
                ...state,
                nodeModel: action.payload
            }
        case NODE_SELECTED:
            return{
                ...state,
                selected: action.payload,
                //selectedTitle: (state.nodeModel && (state.nodeModel as NodeModels).Length) ? (state.nodeModel as NodeModels).getTitleById(action.payload) : ""
            }
        // case TITLE_SELECTED:
        //     return{
        //         ...state,
        //         selectedTitle: action.payload
        //     }
        default:
            return {...state};
    }
}