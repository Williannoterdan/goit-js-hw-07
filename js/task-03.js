var triger = document.querySelector("input#name-input");
let alert = '<p class="aler"></p>';
document.querySelector("h1").insertAdjacentHTML("beforeend", alert);
// console.log(triger);
var txtTriger = triger.textContent;
// console.log(txtTriger);
var variableName = "Anonymous"
triger.addEventListener("input", () => {
    let variableName = triger.value.trim()
    if (variableName.length > 0) {
        document.querySelector("span#name-output").textContent = variableName 
    }
    else {
        variableName = "Anonymous";
        document.querySelector('span#name-output').textContent = variableName
    }
    console.log("azza")
   document.querySelector("a").addEventListener("mouseover", event => {
    document.querySelector("h1").innerHTML= `Goodbai, <span id="name-output">${variableName}</span>!`;
}) 
document.querySelector("a").addEventListener("mouseout", event => {
    document.querySelector("h1").innerHTML= `Hello, <span id="name-output">${variableName}</span>!`;
}) 
    console.log(variableName);
}
    
)
