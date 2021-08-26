import {
    CONNECTING_TOGGLED,
    DRAG_COUNTER_CHANGED,
    FLOW_TOOLBAR_ITEM_CHANGED,
    INGOING_CONNECTOR_ID_CHANGED,
    OUTGOING_CONNECTOR_ID_CHANGED,
    TEXT_EDITOR_TOGGLED,
    SCRIPT_EDITOR_TOGGLED
} from "./actionTypes";

const initialState: {
    textEditorVisible: boolean,
    scriptEditorVisible: boolean,
    dragCount: number,
    connecting: boolean,
    flowToolbarSelection: number,
    outgoing: number,
    ingoing: number
} = {
    textEditorVisible: false,
    scriptEditorVisible: false,
    dragCount: 0,
    connecting: false,
    flowToolbarSelection: -1,
    outgoing: -1,
    ingoing: -1
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
            return{
                ...state,
                connecting: action.payload
            }
        case FLOW_TOOLBAR_ITEM_CHANGED:
            return{
                ...state,
                flowToolbarSelection: action.payload
            }
        case OUTGOING_CONNECTOR_ID_CHANGED: 
            return{
                ...state,
                outgoing: action.payload
            }
        case INGOING_CONNECTOR_ID_CHANGED: 
            return{
                ...state,
                ingoing: action.payload
            }
        case SCRIPT_EDITOR_TOGGLED:
            return{
                ...state,
                scriptEditorVisible: action.payload
            }


        default:
            return {...state};
    }
}