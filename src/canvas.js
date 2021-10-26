let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let tool = canvas.getContext("2d"); // perfoms like an api to draw graphics
tool.strokeStyle = "red"; //color
tool.lineWidth = "3"; //line thickness
tool.beginPath(); // path starts here 
tool.moveTo(10,10); // start point 
tool.lineTo(100,150);//ends here
tool.stroke(); // fill color



