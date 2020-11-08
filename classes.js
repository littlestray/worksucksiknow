class Editor {
    constructor(timer, dom, storage, path) {
        this.timer = timer
        this.storage = storage
        this.path = path

        this.jsonText = dom.children.namedItem("jsonEditor")
        this.jsonText.value = "1200, hello\n1300, goodbye\n1400, noway"

        this.save = dom.children.namedItem("save")
        this.back = dom.children.namedItem("back")

        this.save.onclick = this.saveData.bind(this)
        this.back.onclick = this.backEdit.bind(this)

    }

    saveData() {

        let lines = this.jsonText.value.split("\n")
        for (let i in lines) {
            let line = lines[i].split(",")
            let time = line[0]
            let msg = line[1]
            console.log(`timer ${i} @ ${time} msg: ${msg}`)
        }


    }
    backEdit() {
        console.log(this.back)
    }
    setTimers(data) {

    }
}

class Timer {

    constructor(clock) {
        this.clock = clock
        this.events = []
    }

    get time() {
        return this.clock.innerHTML
    }

    addEvent(time, msg) {
        this.events.push(new Event(time, msg))
    }
}

class Event {
    constructor(time, msg) {
        this.time = time
        this.msg = msg
        this.isDone = false
    }
}