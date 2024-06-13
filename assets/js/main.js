//toggle menu

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


//hover menu
let Cube1 = {
    width: "200px",
    height: "100px"
};
let Cube2 = {
    width: "0px",
    height: "100px",
    transition: "2s"
};
let Cube3 = {
    transform: "scale(0)",
    transition: ".6s linear .3s"
};
let IconShow = {
    opacity: "1",
    transition: ".4s ease-out 1.2s"
};
let styleBoxHide = {
    transform: "translateY(20px)",
    opacity: "0",
    transition: ".2s ease-out",
    zIndex: "-1"
};
let BoxHide = {
    opacity: "0",
    transition: ".2s ease-out",
    zIndex: "-1"
};
let CardInsideShow = {
    opacity: "1",
    zIndex: "1"
};


let hoverMenu = document.getElementById("hover-menu");
let hoverMenu2 = document.getElementById("hover-menu2");
let hoverMenu3 = document.getElementById("hover-menu3");

let iconHover1 = document.querySelector(".icon-hover1");
let iconHover2 = document.querySelector(".icon-hover2");
let iconHover3 = document.querySelector(".icon-hover3");
let iconHover4 = document.querySelector(".icon-hover4");

let secondMenu = document.querySelector(".second-menu");

let Hover1 = document.getElementById("Hover1");
let Hover2 = document.getElementById("Hover2");
let Hover3 = document.getElementById("Hover3");
let Hover4 = document.getElementById("Hover4");

Hover1.onmouseenter = function () {
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover1.style, IconShow);
    secondMenu.classList.add("rot1");
};
Hover1.onmouseleave = function () {
    hoverMenu.style = "unset;";
    hoverMenu2.style = "unset;";
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s";
    iconHover1.style = "unset;";
    secondMenu.classList.remove("rot1");
};

Hover2.onmouseenter = function () {
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover2.style, IconShow);
    secondMenu.classList.add("rot1");
};
Hover2.onmouseleave = function () {
    hoverMenu.style = "unset;";
    hoverMenu2.style = "unset;";
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s";
    iconHover2.style = "unset;";
    secondMenu.classList.remove("rot1");
};

Hover3.onmouseenter = function () {
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover3.style, IconShow);
    secondMenu.classList.add("rot1");
};
Hover3.onmouseleave = function () {
    hoverMenu.style = "unset;";
    hoverMenu2.style = "unset;";
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s";
    iconHover3.style = "unset;";
    secondMenu.classList.remove("rot1");
};

Hover4.onmouseenter = function () {
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover4.style, IconShow);
    secondMenu.classList.add("rot1");
};
Hover4.onmouseleave = function () {
    hoverMenu.style = "unset;";
    hoverMenu2.style = "unset;";
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s";
    iconHover4.style = "unset;";
    secondMenu.classList.remove("rot1");
};


//plan
let f1Box = document.getElementById("f1-box");
let cardInside1 = document.querySelector(".card-inside1");

let f2Box = document.getElementById("f2-box");
let cardInside2 = document.querySelector(".card-inside2");

let f3Box = document.getElementById("f3-box");
let cardInside3 = document.querySelector(".card-inside3");

let fPs = document.querySelector(".f-ps");

let Detail1 = document.getElementById("Detail1");
let Detail2 = document.getElementById("Detail2");
let Detail3 = document.getElementById("Detail3");

let Reset1 = document.getElementById("Reset1");
let Reset2 = document.getElementById("Reset2");
let Reset3 = document.getElementById("Reset3");

Detail1.onclick = function () {
    f1Box.classList.add("scale1");
    Object.assign(f2Box.style, BoxHide);
    Object.assign(f3Box.style, BoxHide);
    Object.assign(cardInside1.style, CardInsideShow);
    fPs.style.display = "block";
};
Reset1.onclick = function () {
    f1Box.classList.remove("scale1");
    f2Box.style = "unset";
    f3Box.style = "unset";
    cardInside1.style = "opacity: 0; z-index: -1; transition: .3s ease-out;";
    fPs.style = "unset";
}

Detail2.onclick = function () {
    Object.assign(f1Box.style, BoxHide);
    f2Box.classList.add("scale2");
    Object.assign(f3Box.style, BoxHide);
    Object.assign(cardInside2.style, CardInsideShow);
    fPs.style.display = "block";
};
Reset2.onclick = function () {
    f1Box.style = "unset";
    f2Box.classList.remove("scale2");
    f3Box.style = "unset";
    cardInside2.style = "opacity: 0; z-index: -1; transition: .3s ease-out;";
    fPs.style = "unset";
}

Detail3.onclick = function () {
    Object.assign(f1Box.style, BoxHide);
    Object.assign(f2Box.style, BoxHide);
    f3Box.classList.add("scale3");
    Object.assign(cardInside3.style, CardInsideShow);
    fPs.style.display = "block";
};
Reset3.onclick = function () {
    f1Box.style = "unset";
    f2Box.style = "unset";
    f3Box.classList.remove("scale3");
    cardInside3.style = "opacity: 0; z-index: -1; transition: .3s ease-out;";
    fPs.style = "unset";
}












