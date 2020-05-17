const slideBtn = document.getElementById("slideBtn");
const slider = document.getElementById("slider");
const mainArea = document.getElementById("mainArea"),
signUpBtn = document.getElementById("signUpBtn"),
signUpModal = document.getElementById("signUpModal"),
modalCloseBtn = document.getElementById("modalCloseBtn"),
background = document.getElementById("background");

function handleSlide(){
    console.log("xxxx")
    slider.style.animation = "showSlider 0.3s ease-in-out forwards";
    mainArea.style.animation = "showSlider 0.3s ease-in-out forwards";
    slideBtn.style.animation = "btnmove 0.3s ease-in-out forwards";

    if(window.matchMedia("(max-width: 450px)").matches){
        mainArea.style.animation = "showSliderMob 0.3s ease-in-out forwards";
    }

    slideBtn.removeEventListener("click", handleSlide);
    slideBtn.addEventListener("click", closeSlide)
}

function closeSlide(){
    slider.style.animation = "closeSlider 0.3s ease-in-out forwards";
    mainArea.style.animation = "closeSlider 0.3s ease-in-out forwards";
    slideBtn.style.animation = "revertBtn 0.3s ease-in-out forwards";

    if(window.matchMedia("(max-width: 450px)").matches){
        mainArea.style.animation = "closeSliderMob 0.3s ease-in-out forwards";
    }

    slideBtn.removeEventListener("click", closeSlide);
    slideBtn.addEventListener("click", handleSlide)
}

function handleSignUp(){
    //mainArea.addEventListener("click", modalClose);
    signUpModal.style.display = "block"
    mainArea.style.backgroundColor = "rgba(0,0,0,0.7)";
    signUpModal.style.animation = "showModal 0.4s forwards";
}

function modalClose(){
    signUpModal.style.display = "none";
    mainArea.style.backgroundColor = "white";
}

function init(){
    slideBtn.addEventListener("click", handleSlide);
    signUpBtn.addEventListener("click", handleSignUp);
    modalCloseBtn.addEventListener("click", modalClose);
}

init()