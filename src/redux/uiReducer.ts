import {
    DRAG_COUNTER_CHANGED,
    TEXT_EDITOR_TOGGLED
} from "./actionTypes";

const initialState = {
    textEditorVisible: false,
    dragCount: 0
}

export const uiReducer = (state = initialState, action: any) => {
    switch(action.type){
        case TEXT_EDITOR_TOGGLED:
            return{
                ...state,
                textEditorVisible: action.payload
            }
        case DRAG_COUNTER_CHANGED:
            return{
                ...state,
                dragCount: action.payload
            }
        default:
            return state;
    }
}