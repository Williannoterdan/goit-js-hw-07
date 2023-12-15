var triger = document.querySelector("input#name-input");
let alert = '<p class="aler"></p>';
document.querySelector("h1").insertAdjacentHTML("beforeend", alert);
let aler = document.querySelector(".aler");
// console.log(triger);
var txtTriger = triger.textContent;
// console.log(txtTriger);
triger.addEventListener("input", () => {
    let variableName = triger.value.trim()
    if (variableName.length > 0) {
        document.querySelector("span#name-output").textContent = variableName 
        if (variableName < triger.value) {
            aler.textContent ="Ми видалили пробіл(и)!";
        }
        else {
            aler.textContent="";
        }
    }
    else {
        document.querySelector("span#name-output").textContent = "Anonymous"; 
    }
    console.log("azza")
   
}
)