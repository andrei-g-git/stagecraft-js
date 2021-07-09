import { 
    FLOW_MODEL_LOADED 
} from "./actionTypes";

const initialState = {
    nodeModel: null //should this be null?
}

export const modelReducer = (state = initialState, action: any) => {
    switch(action.type){
        case FLOW_MODEL_LOADED:
            return{
                ...state,
                nodeModel: action.payload
            }
        default:
            return state;
    }
}