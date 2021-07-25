import { connect } from "react-redux";
import { useBezierDraw, useCanvasContext } from "./flowCanvasHooks"
import "./FlowCanvas.scss";

const FlowCanvas = (props: any) => {
    const WIDTH = 1920;
    const HEIGHT = 1080;
    const [ctx, ref] = useCanvasContext(null, WIDTH, HEIGHT);

    useBezierDraw(ctx, props.receiveCoordinates, WIDTH, HEIGHT, props.count);

    return (
        <canvas className="flow-canvas"
            ref={ref}
            width={WIDTH}
            height={HEIGHT}
        />
    )
}

const mapStateToProps = (state: any) => {
    return{
        count: state.ui.dragCount
    }
}

export default connect(mapStateToProps, null)(FlowCanvas);