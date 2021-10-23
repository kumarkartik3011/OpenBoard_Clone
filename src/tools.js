let optionsCont = document.querySelector(".options-cont");
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
}
function closeTools()
{
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");//open wale ko band
    iconElem.classList.add("fa-times"); 
}