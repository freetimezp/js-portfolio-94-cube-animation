let menuClick = document.querySelector(".menu-click");
let menu = document.querySelector(".menu");

let section1 = document.getElementById("hide1");
let section2 = document.getElementById("hide2");
let section3 = document.getElementById("hide3");
let section4 = document.getElementById("hide4");
let section5 = document.getElementById("hide5");

menuClick.onclick = function () {
    menu.classList.toggle("active");
    section1.classList.toggle("none");
    section2.classList.toggle("none");
    section3.classList.toggle("none");
    section4.classList.toggle("none");
    section5.classList.toggle("none");
}

















