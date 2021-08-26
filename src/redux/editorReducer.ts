import { 
    EDITOR_CONTENT_CHANGED,
    EDITOR_HTML_CHANGED, 
    EDITOR_SCRIPT_CHANGED
} from "./actionTypes";
import { ActionType, DeltaPayload, ScriptPayload, StringPayload } from "./types";

const initialState = {
    content: {
        ops: []
    },
    html: "",
    script: {
        script: "",
        arguments: []
    }
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
        case EDITOR_SCRIPT_CHANGED:
            return{
                ...state,
                script: (<ScriptPayload><unknown>action).payload
            }
        default:
            return {...state};          
    }
}