import { Node, Position, XYPosition } from "reactflow"

export interface ReactflowNode extends Node{
    id: string,
    type: string,
    position: XYPosition,
    sourcePosition: Position,
    targetPosition: Position,
    dragHandle: string,
    data: any
}

export type ReactflowBezier = {
    id: string,
    source: string,
    target: string    
}