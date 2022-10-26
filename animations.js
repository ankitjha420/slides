const initialTimeline = gsap.timeline()
// const title = document.getElementById("title")

initialTimeline.set(title, {opacity: 0.2})

initialTimeline.to(title, {duration: 1, opacity: 1, ease: "sine.out", delay: 0.25})


carouselTimeline = gsap.timeline()

carouselTimeline.set(title, {x: 0})

carouselTimeline.to(title, {x: "-10%", duration: 2, delay: 1, ease: "none", repeat: -1})


const pics = document.querySelectorAll("img")

const imagesEnter = gsap.timeline()

imagesEnter.set(pics, {y: "200%"})

imagesEnter.to(pics, {rotation: () => {return (Math.random()*20 - 5)}})

imagesEnter.to(pics, {delay: 0.5, stagger: -0.25, y: "0%", duration: 2, ease: "power4.out"})

console.log("animating header")