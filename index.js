const slideBtn = document.getElementById("slideBtn");
const slider = document.getElementById("slider");
const mainArea = document.getElementById("mainArea");

function handleSlide(){
    console.log("xxxx")
    slider.style.animation = "showSlider 0.3s ease-in-out forwards";
    mainArea.style.animation = "showSlider 0.3s ease-in-out forwards";
    slideBtn.removeEventListener("click", handleSlide);
    slideBtn.addEventListener("click", closeSlide)
}

function closeSlide(){
    slider.style.animation = "closeSlider 0.3s ease-in-out forwards";
    mainArea.style.animation = "closeSlider 0.3s ease-in-out forwards";
    slideBtn.removeEventListener("click", closeSlide);
    slideBtn.addEventListener("click", handleSlide)
}

function init(){
    slideBtn.addEventListener("click", handleSlide);
}

init()