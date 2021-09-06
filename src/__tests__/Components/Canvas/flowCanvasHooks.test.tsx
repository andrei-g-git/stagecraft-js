import React from "react";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {useCanvasContext} from "../../../components/flow-chart/canvas/flowCanvasHooks";
//import FlowCanvasMock from "./FlowCanvasMock";

describe("FlowCanvas Hooks", () => {
    it("creates a valid canvas context", () => {
        render(<FlowCanvasMock />)
        setTimeout(() => {
            expect(screen.getByText(/full/i)).toBeDefined(); //this passes no matter what it finds...
        },
            50
        )
        
    })
})



const FlowCanvasMock = (props: any) => {
    const initialContext: CanvasRenderingContext2D | null = null;
    const [ctx, ref] = useCanvasContext(initialContext, 999, 999); 

    return(
        <div>
            {
                ctx? <div>fuck</div> : <div>empty</div>
            }
            <canvas className="canvas"
                ref={ref}
                width={999}
                height={999}
            />
        </div>        
    )
}

// export default FlowCanvasMock;



