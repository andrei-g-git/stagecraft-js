//import {useRef, useState, cloneElement, forwardRef} from "react";
import Draggable from "react-draggable"
import "./DragHandle.scss";

const DragHandle = (props: any) => {
    return(
        <div className="drag-handle-container">
            <Draggable 
                axis="both"
                defaultPosition={{x: 0, y: 0}}            
                onStart={handleStart}
                onDrag={handleDrag(props.notifyPosition, props.id)}
                onStop={handleStop(props.notifyDragStop)}
            >
                <div>
                    <div className="card-handle"></div>
                    {
                        props.children
                    }                         
                </div>                 
            </Draggable>
        </div>
    )
}

const handleStart = () => {

}

const handleDrag = (notifyPosition: Function, id: number): any => {
    return (event: any, dragData: any) => {
        notifyPosition(dragData.x, dragData.y, id);
    }
}

const handleStop = (notifyDragStop: Function) => {
    return () => {
        notifyDragStop()
    }
}

export default DragHandle;