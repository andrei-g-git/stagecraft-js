import { DialogContent, NamedValue, NodeModels, ScriptContent } from "@/models/nodeModels";
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
    INGOING_CONNECTOR_ID_CHANGED,
    EDITOR_SCRIPT_CHANGED,
    SCRIPT_EDITOR_TOGGLED,
    EDITOR_CHANGED,
    EDITOR_TOGGLED,
    EDITOR_DIALOG_CHANGED,
    EDITOR_SCRIPT_NAME_CHANGED,
    EDITOR_SCRIPT_ARGUMENT_CHANGED,
    EDITOR_ARGUMENT_NAME_CHANGED,
    EDITOR_ARGUMENT_VALUE_CHANGED
} from "./actionTypes";
import { 
    ActionType, 
    StringPayload, 
    NumberPayload, 
    DeltaPayload, 
    NodeModelsPayload, 
    BooleanPayload, 
    ScriptPayload, 
    DialogPayload, 
    IndexedNamedValuePayload,
    IndexedStringPayload
} from "./types";
import { Delta } from "@/features/Editor/types";


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
    return {
        type: CONNECTING_TOGGLED,
        payload: connecting
    }
}

export const changedFlowToolbarItem = (itemEnum: number): (ActionType & NumberPayload) => {
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

export const changedEditorScript = (script: ScriptContent): (ActionType & ScriptPayload) => {
    return{
        type: EDITOR_SCRIPT_CHANGED,
        payload: script
    }
}

export const toggledScriptEditor = (visible: boolean): (ActionType & BooleanPayload) => {
    return{
        type: SCRIPT_EDITOR_TOGGLED,
        payload: visible
    }
}

export const changedEditor = (editorEnum: number): (ActionType & NumberPayload) => {
    return{
        type: EDITOR_CHANGED,
        payload: editorEnum
    }
}

export const toggledEditor = (visible: boolean): (ActionType & BooleanPayload) => {
    return {
        type: EDITOR_TOGGLED,
        payload: visible
    }
}

export const changedEditorDialog = (dialog: DialogContent): (ActionType & DialogPayload) => {
    return{
        type: EDITOR_DIALOG_CHANGED,
        payload: dialog
    }
}

export const changedEditorScriptName = (name: string): (ActionType & StringPayload) => {
    return{
        type: EDITOR_SCRIPT_NAME_CHANGED,
        payload: name
    }
}

// export const changedEditorScriptArgument = (arg: string, index: number): (ActionType & IndexedStringPayload) => {
//     return{
//         type: EDITOR_SCRIPT_ARGUMENT_CHANGED,
//         payload: {
//             argument: arg,
//             index: index
//         }
//     }
// }
export const changedEditorScriptArgument = (arg: NamedValue, index: number): (ActionType & IndexedNamedValuePayload) => {
    return{
        type: EDITOR_SCRIPT_ARGUMENT_CHANGED,
        payload: {
            pair: arg,
            index: index
        }
    }
}

export const changedEditorArgumentName = (name: string, index: number): (ActionType & IndexedStringPayload) => {
    return{
        type: EDITOR_ARGUMENT_NAME_CHANGED,
        payload: {
            string: name,
            index: index
        }
    }
}

export const changedEditorArgumentValue = (value: string, index: number): (ActionType & IndexedStringPayload) => {
    return{
        type: EDITOR_ARGUMENT_VALUE_CHANGED,
        payload: {
            string: value,
            index: index
        }
    }
}