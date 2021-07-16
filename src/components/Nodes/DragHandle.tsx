import {useRef, useState, cloneElement, forwardRef} from "react";
import Draggable from "react-draggable"
import "./DragHandle.scss";

const DragHandle = (props: any) => {

    const [coordinates, setCoordinates] = useState({x: 0, y: 0});
    return(
        <div className="drag-handle-container">
            <Draggable 
                axis="both"
                defaultPosition={{x: coordinates.x, y: coordinates.y}}            
                onStart={handleStart}
                onDrag={handleDrag(setCoordinates)}
                onStop={handleStop}
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

const handleDrag = (setCoordinates: Function): any => {
    return (event: any, dragData: any) => {
        // props.setX(dragData.x, props.renderIndex);
        // props.setY(dragData.y, props.renderIndex);

        // let count = props.count + 1;
        // if(count > 999) count = 0;
        // props.incrementCounter(count);
        console.log("x: ", dragData.x)
        setCoordinates({x: dragData.x, y: dragData.y})
    }
}

const handleStop = () => {

}

export default DragHandle;