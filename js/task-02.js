const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


function imgBigChange(elem) {
  console.log(elem)
  let imgHtml = "";
  let imgNumber = -1;
  function imgGooUp() {
    if (imgNumber === 5) {
      imgNumber = 0
    }
    else{imgNumber += 1;}
    
  }
  function imgGooDawn() {
      if (imgNumber === 0) {
        imgNumber = 5;
      }
      else {
        imgNumber -= 1;
      }
  }
  images.forEach(e => { 
    
    if (elem === e.alt) {
      imgGooUp();
      console.log(imgNumber);

      return imgHtml = e
    }
  })
  document.body.insertAdjacentHTML("afterbegin", `<div class="task2-div"><button class="buton-task-two-negativ">close</button>
  <img src="${imgHtml.url}" alt="${imgHtml.alt}" class="task2-ImgSt2">
  <p class="modal-img-text">${imgHtml.alt}</p>
  <div class="task2-div-two"><button class="buton-task-two-left buton-direktion"><-</button>
  <button class="buton-task-two-rait buton-direktion">-></button></div>
  </div>`)
  // elem.setAttribute("class", "task2-ImgSt2")
  document.querySelector(".buton-task-two-negativ").addEventListener("click",()=>{
    document.querySelector(".task2-div").remove()
  })
  document.querySelector(".buton-task-two-left").addEventListener("click", () => {
    imgGooUp()
    let imgChange = document.querySelector(".task2-ImgSt2")
    imgChange.setAttribute("src", `${images[imgNumber].url}`)
    document.querySelector (".modal-img-text").textContent=`${images[imgNumber].alt}`
  })
    document.querySelector(".buton-task-two-rait").addEventListener("click", () => {
    imgGooDawn()
    let imgChange = document.querySelector(".task2-ImgSt2")
    imgChange.setAttribute("src", `${images[imgNumber].url}`)
    document.querySelector (".modal-img-text").textContent=`${images[imgNumber].alt}`
  })
}
function imgGouReset(elem) {
  elem.setAttribute("class", "task2-ImgSt1")
}


const gallery = document.querySelector(".gallery");
   let sensetivIndex = 0;
images.forEach(element => {
 
  let imgCry = `<li class="task2-LiSt1" )><img tabindex="${sensetivIndex}" src="${element.url}" alt="${element.alt}" class="task2-ImgSt1" focus-atribut${sensetivIndex}></li> `;
  gallery.insertAdjacentHTML("beforeend", imgCry);
  sensetivIndex += 1;
});


document.querySelector("img[focus-atribut0]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
document.querySelector("img[focus-atribut1]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
document.querySelector("img[focus-atribut2]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
document.querySelector("img[focus-atribut3]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
document.querySelector("img[focus-atribut4]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
document.querySelector("img[focus-atribut5]").addEventListener("focus", event => {
  imgBigChange(event.target.alt)

})
