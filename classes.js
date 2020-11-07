class Editor {
    constructor(dom, storage, path) {
        this.storage = storage
        this.path = path

        this.jsonText = dom.children.namedItem("jsonEditor")
        this.jsonText.value = "1200, hello\n1300, goodbye\n1400, noway"
        
        this.save = dom.children.namedItem("save")
        this.back = dom.children.namedItem("back")

        this.save.onclick = this.saveData.bind(this)
        this.back.onclick = this.backEdit.bind(this)
        
    }

    saveData(){
        console.log(this.jsonText.value)
        let pairs = this.jsonText.value.split("\n")
        console.log(pairs);
        
        
    }
    backEdit(){
        console.log(this.back)
    }
    setTimers(data){

    }
}