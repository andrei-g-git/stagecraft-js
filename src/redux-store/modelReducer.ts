import { 
    FLOW_MODEL_LOADED,
    NODE_ID_SELECTED 
} from "./actionTypes";

const initialState = {
    nodeModel: null, //should this be null?
    selected: 0 //it's an id, not an array index
}

export const modelReducer = (state = initialState, action: any) => {
    switch(action.type){
        case FLOW_MODEL_LOADED:
            return{
                ...state,
                nodeModel: action.payload
            }
        case NODE_ID_SELECTED:
            return{
                ...state,
                selected: action.payload
            }
        default:
            return {...state};
    }
}