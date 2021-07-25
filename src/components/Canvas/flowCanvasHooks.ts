import { useEffect, useState, useRef } from "react";
import { drawBezierCurve } from "./draw";

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

export const useBezierDraw = (ctx: CanvasRenderingContext2D | null, receiveCoordinates: Function, sheetCurrent: HTMLCanvasElement | null /* dimensions: any *//* width: number, height: number */, count: number) => {
    useEffect(() => { 
        if(ctx){
            console.log("DIMENSIONS:  ", sheetCurrent?.clientWidth, sheetCurrent?.clientHeight)//dimensions.Width, "   ", dimensions.Height)
            //ctx.clearRect(0, 0, dimensions.Width, dimensions.Height);
            let width = 0;
            let height = 0;
            if(sheetCurrent){
                width = sheetCurrent.clientWidth;
                height = sheetCurrent.clientHeight;
            }
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



