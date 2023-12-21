const categories = document.querySelector("#categories");
console.log(`Number of categories:${categories.children.length}`);

const items = categories.querySelectorAll(".item");
items.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
// categories.querySelectorAll(".item").forEach(element, ind => {
//     console.log(element);
// });
// various array
// various array
// various array
