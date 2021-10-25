let optionsCont = document.querySelector(".options-cont");
let toolsCont = document.querySelector(".tools-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencilFlag = false;
let eraserFlag = false;
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let stick = document.querySelector(".sticky");

let optionsFlag = true; // show tools 
optionsCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;
    if(optionsFlag)
    {
// if true call opentools()
opentools();
    }
    else{
       closeTools();
    }  
})
function opentools()
{
let iconElem = optionsCont.children[0];
iconElem.classList.remove("fa-times"); // close wale ko band
iconElem.classList.add("fa-bars");
toolsCont.style.display = "flex";

}
function closeTools()
{
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");//open wale ko band
    iconElem.classList.add("fa-times"); 
    toolsCont.style.display = "none";
    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";

}
pencil.addEventListener("click", (e) => {
    // true -> show pencil tool
    pencilFlag = !pencilFlag;
    //by default false
    if(pencilFlag)
    {
       pencilToolCont.style.display = "block";
    } 
    else{
        pencilToolCont.style.display = "none";
      
    }
})
eraser.addEventListener("click", (e) => {
    // true -> show pencil tool
    eraserFlag = !eraserFlag;
    //by default false
    if(eraserFlag)
    {
       eraserToolCont.style.display = "flex";
    } 
    else{
        eraserToolCont.style.display = "none";
      
    }
})
sticky.addEventListener("click" , (e) => {
 let stickyCont = document.createElement("div");
 stickyCont.setAttribute("class", "sticky-cont"); // check
 stickyCont.innerHTML = `
 <div class="header-cont">
 <div class="minimize"></div>
 <div class="remove"></div>
</div>
<div class="note-cont"></div>
<textarea ></textarea>
</div>
`;
document.body.appendChild(stickyCont);
})
