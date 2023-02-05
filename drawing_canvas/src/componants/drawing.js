import {Draw} from './hook';

const Canvas = ({width,height}) => {
    const SetCanvasRef = Draw(On);

    function On(context, point, prevPoint){
        lineDrawing(prevPoint, point, context, '#000000', 5);
    }

    function lineDrawing(
        start,
        end,
        context,
        color,
        width
    ) {
        start = start ?? end;
        context.beginPath();
        context.lineWidth = width;
        context.strokeStyle = color;
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();

        context.fillStyle = color;
        context.beginPath();
        context.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        context.fill();
    }

    return(
        <canvas
            width = {width}
            height = {height}
            style = {canvas_style}
            ref = {SetCanvasRef}
        />
    );
}
export default Canvas;

const canvas_style = {
    background: "cornsilk"
}