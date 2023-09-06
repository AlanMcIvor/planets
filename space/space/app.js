let burger = document.querySelector(".burger-menu");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let body = document.querySelector("body");
let overlay = document.querySelector(".overlay");
let nav = document.querySelector("nav")
let overlayText = document.querySelectorAll(".a-text")

burger.addEventListener("click", function(){
    line1.classList.toggle("hide")
    line2.classList.toggle("rotate2")
    line3.classList.toggle("rotate1")
    // overlay.classList.toggle("hide")
    body.classList.toggle("no-scroll")
    overlay.classList.toggle("move-in")

    nav.style.backgroundColor = "unset";
    nav.style.height = "100%";
    nav.style.flexDirection = "column"
    nav.style.justifyContent = "space between"
    nav.style.alignItems = "space between"
    nav.style.listStyle = 'none'

 

    document.querySelectorAll('a').forEach( a => {
        a.style.textDecoration = "none";
        a.style.color = "white"   
    })

})