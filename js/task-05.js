function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  var randomColor = getRandomHexColor();
var backgraundColor = document.querySelector("body");
var backgraundColorTextAlert = document.querySelector("span.color")


const buttonChangeColor = document.querySelector("button.change-color");
buttonChangeColor.addEventListener("click", event => {
  var randomColor = getRandomHexColor();
 
  backgraundColorTextAlert.textContent =randomColor;
  backgraundColor.style.backgroundColor=randomColor;
})