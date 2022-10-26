const slides = document.getElementById("section-img-frame")

let slideState = 0
let z = 100
const pics = slides.querySelectorAll("img")
pics.forEach((i) => {
    z = z - 1
    i.style.zIndex = z

})

slides.addEventListener("click", slider)

function slider(){

    z = z - 1
    pics[slideState].style.zIndex = z
    slideState = slideState + 1
    slideState = slideState % pics.length
}

const title = document.getElementById("title")

import { Content } from "../public/content.js";

new Content(document.querySelector('.section-content'))

console.log('ok')