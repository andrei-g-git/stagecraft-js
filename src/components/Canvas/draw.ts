export const drawBezierCurve = (
    ctx: CanvasRenderingContext2D | null, 
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
) => {
    if(ctx){ //branching is not that great for performance in loop code...
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(x1, x1 + 50, x2, y2 -50, x2, y2);
        ctx.stroke();          
    }
  
}