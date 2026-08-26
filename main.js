const video1 = document.querySelector(".video-container1 video");
const video2 = document.querySelector(".video-container2 video");
const video3 = document.querySelector(".video-container3 video");
const video4 = document.querySelector(".video-container4 video");

const Videocontainer1 = document.getElementById("Video1")
const Videocontainer2 = document.getElementById("Video2")
const Videocontainer3 = document.getElementById("Video3")
const Videocontainer4 = document.getElementById("Video4")

video1.addEventListener("mouseenter", () => {
    video1.play();
    Videocontainer1.classList.add("active")
})

video1.addEventListener("mouseleave", () => {
    video1.pause();
    video1.currentTime = 0;
    Videocontainer1.classList.remove("active")
})

video2.addEventListener("mouseenter", () => {
    video2.play();
    Videocontainer2.classList.add("active")
})

video2.addEventListener("mouseleave", () => {
    video2.pause();
    video2.currentTime = 0;
    Videocontainer2.classList.remove("active")
})

video3.addEventListener("mouseenter", () => {
    video3.play();
    Videocontainer3.classList.add("active")
})

video3.addEventListener("mouseleave", () => {
    video3.pause();
    video3.currentTime = 0;
    Videocontainer3.classList.remove("active")
})

video4.addEventListener("mouseenter", () => {
    video4.play();
    Videocontainer4.classList.add("active")
})

video4.addEventListener("mouseleave", () => {
    video4.pause();
    video4.currentTime = 0;
    Videocontainer4.classList.remove("active")
})