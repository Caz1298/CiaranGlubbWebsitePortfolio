const video1 = document.querySelector("#Video1Container video");
const video2 = document.querySelector("#Video2Container video");
const video3 = document.querySelector("#Video3Container video");
const video4 = document.querySelector("#Video4Container video");

const Videocontainer1 = document.getElementById("Video1Container")
const Videocontainer2 = document.getElementById("Video2Container")
const Videocontainer3 = document.getElementById("Video3Container")
const Videocontainer4 = document.getElementById("Video4Container")

const OtherGamescontainer = document.getElementById("OtherGamesContainer")

const hoverText1 = document.getElementById("HoverText1")
const hoverText2 = document.getElementById("HoverText2")
const hoverText3 = document.getElementById("HoverText3")
const hoverText4 = document.getElementById("HoverText4")
const hoverText5 = document.getElementById("HoverText5")

video1.addEventListener("mouseenter", () => {
    video1.play();
    Videocontainer1.classList.add("active")
    hoverText1.classList.remove("active")
})

video1.addEventListener("mouseleave", () => {
    video1.currentTime = 0;
    video1.pause();
    Videocontainer1.classList.remove("active")
    hoverText1.classList.add("active")
})

video2.addEventListener("mouseenter", () => {
    video2.play();
    Videocontainer2.classList.add("active")
    hoverText2.classList.remove("active")
})

video2.addEventListener("mouseleave", () => {
    video2.currentTime = 0;
    video2.pause();
    Videocontainer2.classList.remove("active")
    hoverText2.classList.add("active")
})

video3.addEventListener("mouseenter", () => {
    video3.play();
    Videocontainer3.classList.add("active")
    hoverText3.classList.remove("active")
})

video3.addEventListener("mouseleave", () => {
    video3.currentTime = 0;
    video3.pause();
    Videocontainer3.classList.remove("active")
    hoverText3.classList.add("active")
})

video4.addEventListener("mouseenter", () => {
    video4.play();
    Videocontainer4.classList.add("active")
    hoverText4.classList.remove("active")
})

video4.addEventListener("mouseleave", () => {
    video4.currentTime = 0;
    video4.pause();
    Videocontainer4.classList.remove("active")
    hoverText4.classList.add("active")
})

OtherGamescontainer.addEventListener("mouseenter", () => {
    OtherGamescontainer.classList.add("active")
    hoverText5.classList.remove("active")
})

OtherGamescontainer.addEventListener("mouseleave", () => {
    OtherGamescontainer.classList.remove("active")
    hoverText5.classList.add("active")
})