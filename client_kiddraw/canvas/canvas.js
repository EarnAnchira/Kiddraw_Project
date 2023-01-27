const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60 ;
canvas.height = 400;

let context = canvas.getContext("2d");
let start_bg_color = "cornsilk";
context.fillStyle = start_bg_color;
context.fillRect(0,0, canvas.width, canvas.height);


let draw_color = "black";
let draw_width = "50";
let is_drawing = false;

let array_restored = [];
let index = -1;

function change_color(element){
    draw_color = element.style.background;
}

canvas.addEventListener("touchstart",start, false);
canvas.addEventListener("touchmove",draw, false);
canvas.addEventListener("mousedown",start, false);
canvas.addEventListener("mousemove",draw, false);

canvas.addEventListener("touchend",stop, false);
canvas.addEventListener("mouseup",stop, false);
canvas.addEventListener("mouseout",stop, false);

function start(event) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop);

    event.preventDefault();
}

function draw(event) {
    if (is_drawing == true) {
        context.lineTo(event.clientX - canvas.offsetLeft,
                        event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}

function stop(event) {
    if (is_drawing == true) {
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();
    
    if (event.type != 'mouseout') {
        array_restored.push(context.getImageData(0,0, canvas.width, canvas.height));
        index += 1;
    }
}

function clear_canvas() {
    context.fillStyle = start_bg_color;
    context.clearRect(0,0, canvas.width, canvas.height);
    context.fillRect(0,0, canvas.width, canvas.height);

    array_restored = [];
    index = -1;
}

function undo_canvas() {
    if (index <= 0){
        clear_canvas();
    } else
        index -= 1;
        array_restored.pop();
        context.putImageData(array_restored[index],0,0);
   
}