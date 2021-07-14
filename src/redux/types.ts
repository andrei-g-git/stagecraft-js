import { Delta } from "@/components/Editor/quillTypes"
import { NodeModels } from "@/models/nodeModels"

export type GenericPayload = {
    type: string,
    payload: any
}

// export type NumberPayload = {type: string, payload: number} //these can be extended i.e. type NumberPayload extends GenericPayload
// export type StringPayload = {type: string, payload: string}
// export type BooleanPayload = {type: string, payload: boolean}


export type ActionType = {type: string} //can be combined with '&'
export type NumberPayload = {payload: number}
export type StringPayload = {payload: string}
export type BooleanPayload = {payload: boolean}
export type DeltaPayload = {payload: Delta}
export type NodeModelsPayload = {payload: NodeModels}
//export type Payload = {payload: }