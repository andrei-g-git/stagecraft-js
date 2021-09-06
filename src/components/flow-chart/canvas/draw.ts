export const drawBezierCurve = (
    ctx: CanvasRenderingContext2D | null, 
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number,
    leverLength: number
) => {
    if(ctx){ //branching is not that great for performance in loop code...
        //console.log("drawing beziers")
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(x1 + leverLength, y1, x2 - leverLength, y2, x2, y2);
        ctx.stroke();          
    }
  
}