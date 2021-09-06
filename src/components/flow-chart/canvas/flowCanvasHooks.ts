import { useEffect, useState, useRef } from "react";
import { drawBezierCurve } from "./draw";
import { Coord2DPair } from "@/models/vectors";

export const useCanvasContext = (context: CanvasRenderingContext2D | null, /* width: number, height: number */): [
    ctx: CanvasRenderingContext2D | null, 
    ref: React.MutableRefObject<HTMLCanvasElement | null>,
    // width: number,
    // height: number
] => {
    const [ctx, setCtx] = useState(context);
    const ref: React.MutableRefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement | null>(null);
    let width: number = 0; 
    let height: number = 0;
    useEffect(() => {
        if(ref){
            const canvasObject = ref.current;
            width = canvasObject!.clientWidth;
            height =canvasObject!.clientHeight;
            setCtx(canvasObject!.getContext("2d"));
            if(ctx) ctx!.clearRect(0, 0, width, height)    
                      
        }

    },
        []
    );
    return [ctx, ref/* , width, height */];
}

export const useBezierDraw = (ctx: CanvasRenderingContext2D | null, receiveCoordinates: Function, /* coordinatePairs: Coord2DPair[] ,*/ sheetCurrent: HTMLCanvasElement | null, count: number, bezierLeverLength: number) => {
    useEffect(() => { 
        if(ctx){
            let width = 0;
            let height = 0;
            if(sheetCurrent){
                width = sheetCurrent.clientWidth;
                height = sheetCurrent.clientHeight;
            }
            ctx.clearRect(0, 0, width, height);
            // const coordinates = receiveCoordinates();  
            // for(var i = 0; i < (coordinates.length - 1); i++){ 
            //     const x1 = coordinates[i].x + 150;
            //     const y1 = coordinates[i].y + 100;                     
                
            //     const x2 = coordinates[i + 1].x;
            //     const y2 = coordinates[i + 1].y + 100;

            //     drawBezierCurve(ctx, x1, y1, x2, y2, bezierLeverLength);             
            // }
            const coordinates = receiveCoordinates();
            for(var i = 0; i < coordinates.length; i++){
                drawBezierCurve(
                    ctx,
                    coordinates[i].x1 + 150,
                    coordinates[i].y1 + 100,
                    coordinates[i].x2,
                    coordinates[i].y2 + 100,
                    bezierLeverLength
                )
            }
        }   
        
    },
        [count]
    )

}



