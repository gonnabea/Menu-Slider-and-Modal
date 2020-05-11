const slideBtn = document.getElementById("slideBtn");
const slider = document.getElementById("slider")

function handleSlide(){
    console.log("xxxx")
    slider.style.animation = "showSlider 0.5s ease-in-out forwards";
}

function init(){
    slideBtn.addEventListener("click", handleSlide);
}

init()