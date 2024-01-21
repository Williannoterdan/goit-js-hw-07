function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}
function generationCreate(generation, number) {
    return `generation:${generation},element:${number + 1}`
}

let boxesDiv = document.querySelector('#boxes')

const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')

console.log(boxesDiv.children)

buttonCreate.addEventListener('click', () => {
    let cubNumbers = document.querySelector('input').value;
    if (cubNumbers < 101 && cubNumbers > 0) {
        boxesDiv.innerHTML = '';
        var length = 30
        for (let i = 0; i < cubNumbers; i++) {
            boxesDiv.insertAdjacentHTML(
                'beforeend',
                `<div style=" background-color:${getRandomHexColor()};   width:${length}px ;height: ${length}px; ;"></div>`
            )
            length += 10
        }
    }
    }
)

buttonDestroy.addEventListener('click', () => {
    boxesDiv.innerHTML = "";
})
