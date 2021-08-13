import { NodeModels } from "@/models/nodeModels";
import { 
    FLOW_MODEL_LOADED,
    EDITOR_CONTENT_CHANGED,
    EDITOR_HTML_CHANGED,
    NODE_ID_SELECTED,
    TEXT_EDITOR_TOGGLED, 
    DRAG_COUNTER_CHANGED,
    CONNECTING_TOGGLED,
    FLOW_TOOLBAR_ITEM_CHANGED,
    OUTGOING_CONNECTOR_ID_CHANGED,
    INGOING_CONNECTOR_ID_CHANGED
} from "./actionTypes";
import { /* GenericPayload, StringPayload */ ActionType, StringPayload, NumberPayload, DeltaPayload, NodeModelsPayload, BooleanPayload} from "./types";
import { Delta } from "@/components/Editor/quillTypes";


export const loadedFlowModel = (model: NodeModels): (ActionType & NodeModelsPayload) => {
    return {
        type: FLOW_MODEL_LOADED,
        payload: model
    }
}
export const changedEditorContent = (content: Delta): (ActionType & DeltaPayload) =>{
    return {
        type: EDITOR_CONTENT_CHANGED,
        payload: content
    }
}
export const changedEditorHtml = (html: string): (ActionType & StringPayload) =>{
    return {
        type: EDITOR_HTML_CHANGED,
        payload: html
    }
}

export const selectedNodeId = (id: number): (ActionType & NumberPayload) => {
    return {
        type: NODE_ID_SELECTED,
        payload: id
    }
}

export const toggledTextEditor = (visible: boolean): (ActionType & BooleanPayload) => {
    return {
        type: TEXT_EDITOR_TOGGLED,
        payload: visible
    }
}

export const changedDragCounter = (count: number): (ActionType & NumberPayload) => {
    return {
        type: DRAG_COUNTER_CHANGED,
        payload: count
    }
}

export const toggledConnecting = (connecting: boolean): (ActionType & BooleanPayload) => {
    console.log("FROM ACTION toggleConnecting, CONNECTING:   ", connecting)
    return {
        type: CONNECTING_TOGGLED,
        payload: connecting
    }
}

export const changedFlowToolbarItem = (itemEnum: number): (ActionType & NumberPayload) => {
    console.log("CHANGED ITEM:  ", itemEnum)
    return {
        type: FLOW_TOOLBAR_ITEM_CHANGED,
        payload: itemEnum
    }
}

export const changedOutgoingConnectorId = (id: number): (ActionType & NumberPayload) => {
    return{
        type: OUTGOING_CONNECTOR_ID_CHANGED,
        payload: id
    }
}

export const changedIngoingConnectorId = (id: number): (ActionType & NumberPayload) => {
    return{
        type: INGOING_CONNECTOR_ID_CHANGED,
        payload: id
    }
}





export const testtt = (item: string): (ActionType & StringPayload) => {
    console.log("CHANGED ITEMMMMMMMMMMM:  ", item)
    return {
        type: FLOW_TOOLBAR_ITEM_CHANGED,
        payload: item
    }
}