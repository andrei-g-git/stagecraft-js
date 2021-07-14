import { NodeModels } from "@/models/nodeModels";
import { 
    FLOW_MODEL_LOADED,
    EDITOR_CONTENT_CHANGED,
    EDITOR_HTML_CHANGED 
} from "./actionTypes";
import { /* GenericPayload, StringPayload */ ActionType, StringPayload, DeltaPayload, NodeModelsPayload} from "./types";
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