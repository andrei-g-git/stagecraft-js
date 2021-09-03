import { 
    EDITOR_CONTENT_CHANGED,
    EDITOR_DIALOG_CHANGED,
    EDITOR_HTML_CHANGED, 
    EDITOR_SCRIPT_CHANGED
} from "./actionTypes";
import { ActionType, DeltaPayload, DialogPayload, ScriptPayload, StringPayload } from "./types";

const initialState = {
    content: {
        ops: []
    },
    html: "",
    script: {
        script: "",
        arguments: []
    },
    dialog: {
        preview: {
            html: "",
            json: {ops: []}
        },
        full: {
            html: "",
            json: {ops: []}
        }
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
        case EDITOR_DIALOG_CHANGED:
            return{
                ...state,
                dialog: (<DialogPayload><unknown>action).payload
            }            
        default:
            return {...state};          
    }
}