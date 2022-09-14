const w1 = document.querySelector(".wide1");
const i1 = document.querySelector(".necklace");

const w2 = document.querySelector(".knight");
const i2 = document.querySelector(".knig");

const w3 = document.querySelector(".samuray");
const i3 = document.querySelector(".samu");

const w4 = document.querySelector(".viking");
const i4 = document.querySelector(".viki");


window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;

    const w1Height = w1.getBoundingClientRect().height;
    const w2Height = w2.getBoundingClientRect().height;
    const w3Height = w3.getBoundingClientRect().height;
    const w4Height = w4.getBoundingClientRect().height;
    

    if(scrollHeight > w1Height) {
        i1.classList.add("fade");
        i1.classList.remove("visible");
    }

    if(scrollHeight >  w2Height) {
        i2.classList.add("right");
        i2.classList.remove("visible");
    }

    if(scrollHeight >  w3Height) {
        i3.classList.add("left");
        i3.classList.remove("visible");
    }

    if(scrollHeight >  w4Height) {
        i4.classList.add("right");
        i4.classList.remove("visible");
    }
})



