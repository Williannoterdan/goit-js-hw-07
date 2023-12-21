function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var generation = 0;
function generationCreate(generation, number) {
  return `generation:${generation},element:${number+1}`
}

function death(length) {
  for (let i = 0; i < length; i++) {
        boxesDiv.querySelector(".death").remove();
    
  }
} 

var boxesDiv = document.querySelector("#boxes");
boxesDiv.setAttribute("style", "display: flexbox; flex-wrap: wrap;")

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

console.log(boxesDiv.children);



buttonCreate.addEventListener("click", event => {
    death(boxesDiv.children.length)
  var numberCreate = document.querySelector("input").value
  console.log("sasa")
  console.log(numberCreate);
  function createBoxes(numberCreate) {
    
        var length = 30;
    for (let i = 0; i < numberCreate; i++) {

    boxesDiv.insertAdjacentHTML("beforeend", `<div class="death" style="display: flex; background-color:${getRandomHexColor()};   width:${length}px ;height: ${length}px; ;"><p>${generationCreate(generation, i)}</p></div>`)
    length+=10;
  }
    
  }
  createBoxes(numberCreate);
  generation += 1;
})

buttonDestroy.addEventListener("click", event => { 
console.log(boxesDiv.children.length);
  death(boxesDiv.children.length)
})