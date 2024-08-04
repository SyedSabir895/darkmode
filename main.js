const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")
inputEl.checked = true;

updateBody()
function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background = "white";
    }

}


inputEl.addEventListener("input", ()=>{
    updateBody()
})