import { useEffect, useState, useRef } from "react";
import { drawBezierCurve } from "./draw";

export const useCanvasContext = (context: CanvasRenderingContext2D | null, width: number, height: number): [
    ctx: CanvasRenderingContext2D | null, 
    ref: React.MutableRefObject<HTMLCanvasElement | null>
] => {
    const [ctx, setCtx] = useState(context);
    const ref: React.MutableRefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if(ref){
            const canvasObject = ref.current;
            setCtx(canvasObject!.getContext("2d"));
            if(ctx) ctx!.clearRect(0, 0, width, height)    
                      
        }

    },
        []
    );
    return [ctx, ref];
}

export const useBezierDraw = (ctx: CanvasRenderingContext2D | null, receiveCoordinates: Function, width: number, height: number, count: number) => {
    useEffect(() => { 
        if(ctx){
            ctx.clearRect(0, 0, width, height);
            const coordinates = receiveCoordinates();  
            for(var i = 0; i < (coordinates.length - 1); i++){ 
                const x1 = coordinates[i].x + 300;
                const y1 = coordinates[i].y + 100;                     
                
                const x2 = coordinates[i + 1].x;
                const y2 = coordinates[i + 1].y + 100;

                drawBezierCurve(ctx, x1, y1, x2, y2);             
            }
        }   
        
    },
        [count]
    )

}



