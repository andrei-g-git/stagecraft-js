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
    EDITOR_ARGUMENT_VALUE_CHANGED,
    EDITOR_ARGUMENT_ADDED,
    EDITOR_PREVIEW_CHANGED,
    EDITOR_FULL_TEXT_CHANGED,
    PREVIEW_JSON_CHANGED,
    FULL_TEXT_JSON_CHANGED
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

export const changedEditorDialog = (dialog: DialogContent): (ActionType & DialogPayload) => { //this is bi-directional, changes both when clicking card to determine what content 
    return{                                                                                     //the editor will open with and when editing the content - to determine what is 
        type: EDITOR_DIALOG_CHANGED,                                                                //sent back to the card model  ... seems kind of dangerous...
        payload: dialog
    }
}

export const changedEditorScriptName = (name: string): (ActionType & StringPayload) => {
    return{
        type: EDITOR_SCRIPT_NAME_CHANGED,
        payload: name
    }
}

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

export const addedEditorArgument = () => {
    return{
        type: EDITOR_ARGUMENT_ADDED,
        payload: null
    }
}

export const changedEditorPreview = (value: string): (ActionType & StringPayload) => {
    return{
        type: EDITOR_PREVIEW_CHANGED,
        payload: value
    }
}

export const changedEditorFullText = (value: string): (ActionType & StringPayload) => {
    return{
        type: EDITOR_FULL_TEXT_CHANGED,
        payload: value
    }
}

export const changedEditorPreviewJson = (ops: Delta): (ActionType & DeltaPayload) => {
    return{
        type: PREVIEW_JSON_CHANGED,
        payload: ops
    }
}

export const changedEditorFullTextJson = (ops: Delta): (ActionType & DeltaPayload) => {
    return{
        type: FULL_TEXT_JSON_CHANGED,
        payload: ops
    }
}