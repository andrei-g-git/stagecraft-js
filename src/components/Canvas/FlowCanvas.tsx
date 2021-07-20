import { useCanvasContext } from "./flowCanvasHooks"
import "./FlowCanvas.scss";

const FlowCanvas = (props: any) => {
    const WIDTH = 1920;
    const HEIGHT = 1080;
    const [ctx, ref] = useCanvasContext(null, WIDTH, HEIGHT);

    return (
        <canvas className="flow-canvas"
            ref={ref}
            width={WIDTH}
            height={HEIGHT}
        />
    )
}

export default FlowCanvas;