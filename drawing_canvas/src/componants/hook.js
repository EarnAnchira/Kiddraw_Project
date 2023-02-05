import {useEffect, useRef} from "react";

export function Draw(On) {
    
    const canvasRef = useRef(null);

    const is_drawing = useRef(false);

    const MouseMoveRef = useRef(null);
    const MouseDownRef = useRef(null);
    const MouseUpRef = useRef(null);

    const prevRef = useRef(null);

    useEffect(() => {
        return () => {
            if(MouseMove.current) {
                window.removeEventListener("mousemove",MouseMove.current);
            }
            if(MouseUp.current) {
                window.removeEventListener("mouseup",MouseUp.current);
            }
        }
    },[]);

    function SetCanvasRef(ref) {
        if(!ref) return;
        if(canvasRef.current){
            canvasRef.current.removeEventListener("mousedown",MouseDown.current);
        }

        canvasRef.current = ref;
        MouseMove();
        MouseDown();
        MouseUp();
    }

    function MouseMove() {
        const  listenerMouseMove = (e) => {
            if(is_drawing.current){
                const point = ComputePointer(e.clientX, e.clientY);
                const context = canvasRef.current.getContext("2d");
                if(On) On(context, point, prevRef.current);
                prevRef.current = point;
            }
        }
        MouseMoveRef.current = listenerMouseMove;
        window.addEventListener("mousemove", listenerMouseMove);
    }
    
    function MouseUp() {
        if(!canvasRef.current) return;
        const listener = () => {
            is_drawing.current = false;
            prevRef.current = null;
        }
        MouseUpRef.current = listener;
        window.addEventListener("mouseup", listener);
    }

    function MouseDown() {
        if(!canvasRef.current) return;
        const listener = () => {
            is_drawing.current = true;
        }
        MouseDownRef.current = listener;
        canvasRef.current.addEventListener("mousedown",listener);
    }

    function ComputePointer(clientX,clientY) {
        if (canvasRef.current){
            const bound = canvasRef.current.getBoundingClientRect();
            return {
                x : clientX - bound.left,
                y : clientY - bound.top
            }
        } else {
            return null;
        }
       
    }
    return SetCanvasRef;
};