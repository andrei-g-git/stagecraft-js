import {
    CONNECTING_TOGGLED,
    DRAG_COUNTER_CHANGED,
    TEXT_EDITOR_TOGGLED
} from "./actionTypes";

const initialState = {
    textEditorVisible: false,
    dragCount: 0,
    connecting: false
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
        case CONNECTING_TOGGLED:
            //console.log("FROM REDUCER:  ", action.paylaod)
            return{
                ...state,
                connecting: action.paylaod
            }
        default:
            return state;
    }
}