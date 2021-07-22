import { useEffect, useState, useRef } from "react";
import { drawBezierCurve } from "./draw";
import { CoordPair } from "./types";
import { Coord2D } from "@/models/vectors";

export const useCanvasContext = (context: CanvasRenderingContext2D | null, width: number, height: number): [
    ctx: CanvasRenderingContext2D | null, 
    ref: React.MutableRefObject<HTMLCanvasElement | null>
] => {
    const [ctx, setCtx] = useState(context);
    //const [ref, setRef] = useState(null)
    const ref: React.MutableRefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement | null>(null);
    //let ctx: CanvasRenderingContext2D | null = null;
    useEffect(() => {
        if(ref){
            const canvasObject = ref.current;
            /* ctx =  */setCtx(canvasObject!.getContext("2d"));
            if(ctx) ctx!.clearRect(0, 0, width, height)    
                      
        }

        //return ctx;
    },
        []
    );

    return [ctx, ref];
}

export const useBezierDraw = (ctx: CanvasRenderingContext2D | null, coordinates/* Pairs */: Coord2D[]/* CoordPair[] */, count: number) => {
    useEffect(() => {
        console.log("UPDATING")         
        for(var i = 0; i < (coordinates/* Pairs */.length - 1); i++){
            // const x1 = coordinatePairs[i].out.x;
            // const y1 = coordinatePairs[i].out.y;

            // const x2 = coordinatePairs[i + 1].in.x;
            // const y2 = coordinatePairs[i + 1].in.y;     
            const x1 = coordinates[i].x;
            const y1 = coordinates[i].y + 100;

            const x2 = coordinates[i + 1].x + 300;
            const y2 = coordinates[i + 1].y + 100;              
            drawBezierCurve(ctx, x1, y1, x2, y2);
        }   
        
    },
        //[...coordinatePairs.map(pair => )]
        /* [...doubleNestedPropertiesToArray(coordinatePairs)] */
        /* [doubleNestedPropertiesToArray(coordinatePairs)] */
        //[...coordinates]
        [count]
    )

}

const doubleNestedPropertiesToArray = (array: CoordPair[]) => {
    // //const firstLayer = [].concat(...array.map(Object.values()))
    // /* return */ const allProperties = array
    //     .map(pair => Object.entries(pair))
    //     .map(entry => Object.values(entry))

    // console.log("ALL coord properties array:   ", allProperties)
    // return allProperties;

    //fuck this, going medieval
    const nonNestedArray = []
    for(var i=0; i < array.length; i++){
        const coordPair = array[i];
        const inn = coordPair.in;
        const out = coordPair.out;

        nonNestedArray.push(inn.x, inn.y, out.x, out.y);
    }
    console.log("ALL coord properties array:   ", nonNestedArray)
    return nonNestedArray; //so the items in the array never change and I can't use this to update lifecycle...
}

