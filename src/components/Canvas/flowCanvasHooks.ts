import { useEffect, useState, useRef } from "react";

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