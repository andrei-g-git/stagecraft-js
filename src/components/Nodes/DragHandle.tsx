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

const handleDrag = (notifyPosition: Function, id: number) => {
    return (event: any, dragData: any) => {
        notifyPosition(dragData.x, dragData.y, id);
        //notifyPosition(dragData.x + dragData.deltaX, dragData.y + dragData.deltaY, id);
    }
}

const handleStop = (notifyDragStop: Function) => {
    return () => {
        notifyDragStop()
    }
}

export default DragHandle;