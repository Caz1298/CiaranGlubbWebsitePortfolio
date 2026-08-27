const video1 = document.querySelector("#Video1Container video");
const video2 = document.querySelector("#Video2Container video");
const video3 = document.querySelector("#Video3Container video");
const video4 = document.querySelector("#Video4Container video");

const OuterVideocontainer1 = document.getElementById("Video1")
const OuterVideocontainer2 = document.getElementById("Video2")
const OuterVideocontainer3 = document.getElementById("Video3")
const OuterVideocontainer4 = document.getElementById("Video4")

video1.addEventListener("mouseenter", () => {
    video1.play();
    OuterVideocontainer1.classList.add("active")
})

video1.addEventListener("mouseleave", () => {
    video1.pause();
    video1.currentTime = 0;
    OuterVideocontainer1.classList.remove("active")
})

video2.addEventListener("mouseenter", () => {
    video2.play();
    OuterVideocontainer2.classList.add("active")
})

video2.addEventListener("mouseleave", () => {
    video2.pause();
    video2.currentTime = 0;
    OuterVideocontainer2.classList.remove("active")
})

video3.addEventListener("mouseenter", () => {
    video3.play();
    OuterVideocontainer3.classList.add("active")
})

video3.addEventListener("mouseleave", () => {
    video3.pause();
    video3.currentTime = 0;
    OuterVideocontainer3.classList.remove("active")
})

video4.addEventListener("mouseenter", () => {
    video4.play();
    OuterVideocontainer4.classList.add("active")
})

video4.addEventListener("mouseleave", () => {
    video4.pause();
    video4.currentTime = 0;
    OuterVideocontainer4.classList.remove("active")
})