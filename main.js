console.log("main.js")

let initFrame = false;
let currentTime = new Date()
let clock;


function init() {
    console.log("init")
    clock = document.getElementById('clock')
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