import { 
    EDITOR_CONTENT_CHANGED,
    EDITOR_HTML_CHANGED 
} from "./actionTypes";
import { ActionType, DeltaPayload, StringPayload } from "./types";

const initialState = {
    content: {
        ops: []
    },
    html: ""
}

export const editorReducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case EDITOR_CONTENT_CHANGED:
            return{
                ...state,
                content: (<DeltaPayload><unknown>action).payload
            }
        case EDITOR_HTML_CHANGED:
            return{
                ...state,
                html: (<StringPayload><unknown>action).payload
            }  
        default:
            return state;          
    }
}