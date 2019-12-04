'use strict'

window.onload = init;

var x, y;

function init() {
    addFunction();
    generate();
}

function addFunction() {
    //document.getElementById("carta").addEventListener("touchstart", drag);
    //document.getElementById("mesa").addEventListener("touchend", drop);
    // document.getElementById("mesa").addEventListener("dragover", allow);
    // document.getElementById("mesa").addEventListener("drop", drop);
}

function drag(ev) {
    //ev.dataTransfer.setData("carta", ev.target.id);
    //console.log(ev.touches[0].target.id);
}

function drop(ev) {
    var div = document.getElementById("mesa");
    var y2 = div.offsetTop;
    var x2 = div.offsetLeft;
    var w = Number(div.clientWidth) + x2;
    var h = Number(div.clientHeight) + y2;
    if (x >= x2 && y >= y2 && x <= w && y <= h) {
        console.log("estas dentro");
    }
}

function move(ev) {
    //console.log(ev.touches);
    x = ev.touches[0].clientX;
    y = ev.touches[0].clientY;
}

// function allow(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("carta", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("carta");
//     var div = document.getElementById(data);
//     div.classList.remove("carta");
//     div.classList.add("carta-flex");
//     ev.target.appendChild(div);
// }

function generate() {
    for (let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.classList.add("carta");
        div.setAttribute("draggable", true);
        div.setAttribute("id", "div" + i);
        div.addEventListener("touchstart", drag);
        div.addEventListener("touchend", drop);
        div.addEventListener("touchmove", move);
        document.getElementById("contenedor").append(div);
    }
}