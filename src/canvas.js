let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color-cont");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value; 

let mouseDown = false;
let tool = canvas.getContext("2d"); // perfoms like an api to draw graphics
tool.strokeStyle = penColor; //color
tool.lineWidth = penWidth; //line thickness
//tool.beginPath(); // path starts here 
//tool.moveTo(10,10); // start point 
//tool.lineTo(100,150);//ends here
//tool.stroke(); // fill color

// mousedown -> start new path, mousemove -> fill path
canvas.addEventListener("mousedown", (e)=> {
    mouseDown = true;
    beginPath({
        x : e.clientX,
        y = e.clientY
    })
})
canvas.addEventListener("mousemove", (e) => {
    if(mouseDown) drawStroke({
        x : e.clientX,
        y : e.clientY,
        color : eraserFlag ? eraserColor : penColor,
        width : erserFlag ? eraserWidth : penWidth
    })
})
canvas.addEventListener("mouseup", (e) => {
mouseDown = false;
})
function beginPath(strokeObj)
{
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y); // x y coord
}
function drawStroke(strokeObj)
{
    tool.strokeStyle = strokeObj.color;
    tool.lineWidth = strokeObj.width;  
    tool.lineTo(e.clientX, e.clientY);
    tool.stroke();
}

pencilColor.forEach((colorElem) => {
colorElem.addEventListener("click", (e) =>{
    let color  = colorElem.classList[0];
    penColor = color;
    tool.strokeStyle = penColor; 
})
})

pencilWidthElem.addEventListener("change", (e) => {
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})
eraserWidthElem.addEventListener("change", (e) => {
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})
eraser.addEventListener("click" , (e) => {
    if(eraserFlag)
    {
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }
    else{
         tool.strokeStyle = penColor;
         tool.lineWidth = penWidth;
    }
})
