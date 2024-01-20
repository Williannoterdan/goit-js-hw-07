function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}
function generationCreate(generation, number) {
    return `generation:${generation},element:${number + 1}`
}

function destroyBoxes(length) {
    for (let i = 0; i < length; i++) {
        boxesDiv.querySelector('.death').remove()
    }
}

var boxesDiv = document.querySelector('#boxes')
boxesDiv.setAttribute('style', 'display: flexbox; flex-wrap: wrap;')

const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')

console.log(boxesDiv.children)

buttonCreate.addEventListener('click', (event) => {
    destroyBoxes(boxesDiv.children.length)
    var numberCreate = document.querySelector('input').value
    // console.log("sasa")
    // console.log(numberCreate);
    if (numberCreate < 101 && numberCreate > 0) {
        function createBoxes(numberCreate) {
            var length = 30
            for (let i = 0; i < numberCreate; i++) {
                boxesDiv.insertAdjacentHTML(
                    'afterbegin',
                    `<div class="death" style="display: flex; background-color:${getRandomHexColor()};   width:${length}px ;height: ${length}px; ;"></div>`
                )
                length += 10
            }
        }
        createBoxes(numberCreate)
    }
})

buttonDestroy.addEventListener('click', (event) => {
    console.log(boxesDiv.children.length)
    destroyBoxes(boxesDiv.children.length)
})
