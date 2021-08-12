import {
    CONNECTING_TOGGLED,
    DRAG_COUNTER_CHANGED,
    FLOW_TOOLBAR_ITEM_CHANGED,
    TESTTT,
    TEXT_EDITOR_TOGGLED
} from "./actionTypes";

const initialState: {
    textEditorVisible: boolean,
    dragCount: number,
    connecting: boolean,
    flowToolbarSelection: number,
    blah: string    
} = {
    textEditorVisible: false,
    dragCount: 0,
    connecting: false,
    flowToolbarSelection: -1,
    blah: "WAAAAH"
}

export const uiReducer = (state = initialState, action: any) => {
    switch(action.type){
        case TEXT_EDITOR_TOGGLED:
            return{
                ...state,
                textEditorVisible: action.payload
            }
        case DRAG_COUNTER_CHANGED:
            //console.log("FROM REDUCER, COUNTER PAYLOAD:  ", action.payload)
            return{
                ...state,
                dragCount: action.payload
            }
        case CONNECTING_TOGGLED:
            //console.log("FROM REDUCER:  ", action.paylaod)
            return{
                ...state,
                connecting: action.payload
            }
        case FLOW_TOOLBAR_ITEM_CHANGED:
            console.log("FROM REDUCER, SELECTED ITEM PAYLOAD:  ", action.payload)
            return{
                ...state,
                flowToolbarSelection: action.payload
            }

        //delete
        case TESTTT:
            return{
                ...state,
                blah: action.payload
            }

        default:
            return {...state};
    }
}