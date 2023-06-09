import { connect } from "react-redux";
import { useBezierDraw, useCanvasContext } from "./hooks/flow-canvas.hooks"
import "./FlowCanvas.scss";
import { useEffect } from "react";

const FlowCanvas = (props: any) => {
    const [ctx, ref] = useCanvasContext(null);

    useBezierDraw(
        ctx, 
        props.receiveCoordinates, 
        //props.coordinatePairs,
        props.sheetCurrent, 
        props.count, 
        80
    );

    useEffect(() => {
        //console.log("PAIRS:   ", props.receiveCoordinates())
    },
        [props.count]
    )

    return (
        <canvas className="flow-canvas"
            ref={ref}
            width={ref.current?.clientWidth}
            height={ref.current?.clientHeight}
        />
    )
}

const mapStateToProps = (state: any) => {
    return{
        count: state.ui.dragCount,
        model: state.model.nodeModel //test, delete
    }
}

class CanvasDimensions{
    constructor(public currentRef: HTMLCanvasElement | null){}

    get Width(): number {
        return this.currentRef ? this.currentRef.clientWidth : 0
    }
    get Height(): number {
        return this.currentRef ? this.currentRef.clientHeight : 0
    }    
}

export default connect(mapStateToProps, null)(FlowCanvas);

//export default FlowCanvas;