import {
    TEXT_EDITOR_TOGGLED
} from "./actionTypes";

const initialState = {
    textEditorVisible: false
}

export const uiReducer = (state = initialState, action: any) => {
    switch(action.type){
        case TEXT_EDITOR_TOGGLED:
            return{
                ...state,
                textEditorVisible: action.payload
            }
        default:
            return state;
    }
}