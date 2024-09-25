let processo = document.querySelector("#processo")
let lua = document.querySelector("#lua");
let seta = document.querySelector("#seta");
let titulo = document.querySelector("#titulo");
let sun = document.querySelector("#sol");
let body = document.getElementsByTagName("body");
let container = document.querySelector(".container")

function change (){
    processo.style.visibility = "visible";
    lua.style.display = "none";
    seta.style.display = "none";
    titulo.style.display = "none";
    // body[0].style.backgroundSize = "0%"
    body[0].style.backgroundImage = "url('../img/ceu.jpg')"
    container.style.opacity = "1"
    sun.style.visibility = "visible"
}