console.log("main.js")

let path = window.location + window.path
let currentTime = new Date()

let clock, editor

console.log(path)


function init() {
    console.log("init")
    clock  = document.getElementById("clock")
    editor = new Editor(document.getElementById("editor"), window.localStorage, path)
    return window.requestAnimationFrame(gameLoop)
}

function update() {

    currentTime = new Date()
}

function draw() {


    clock.innerHTML = currentTime.toString()
}


function gameLoop() {
    update()
    draw()
    window.requestAnimationFrame(gameLoop)
}