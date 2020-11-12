let path = window.location + window.path

console.log(path)


function init() {
    return window.requestAnimationFrame(gameLoop)
}

function update() {

}

function draw() {
}


function gameLoop() {
    update()
    draw()
    window.requestAnimationFrame(gameLoop)
}
