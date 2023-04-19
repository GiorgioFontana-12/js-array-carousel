let insertImg = document.getElementById("insertImg");
let imgs = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]
let btnPrevious = document.getElementById("previous");
let btnNext = document.getElementById("next");
let currentSlide = 0;

for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    let x = document.createElement("img");
    x.src = img ;
    x.className = "slide";
    insertImg.append(x);
    if (i != 0) {
        x.className = "slide hidden";
    }
}
let slideElements = document.getElementsByClassName("slide");

btnNext.addEventListener("click", function(){

    console.log("Current Slide: ", currentSlide);

    if(currentSlide < imgs.length-1) {
        for (let c = 0; c < imgs.length; c++) {
            const slide = slideElements[c];

            if(c == currentSlide+1 ) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
        
        currentSlide++;
    } else {
        currentSlide = 0
        slideElements[ currentSlide ]
    }
    
});