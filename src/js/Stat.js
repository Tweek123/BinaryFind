class Stat {
    constructor(func,statName,status,type) {
        this.func = func;
        this.statName = statName;
        this.status = status;
        this.type = type;
        this.htmlMessage = document.createElement('div');
        this.value;
    }
    checkStat(el) {
        this.status = this.func(el);
        this.value = el;
        this.createHtml();
        return this;
    }
    createHtml() {
        if(this.status === true) {
            this.htmlMessage.className = "Fails";
            this.htmlMessage.innerHTML = "<p>"+"Failed: "+this.statName+"for "+this.value+"</p>"
        } else if (this.status ===false) {
            this.htmlMessage.className = "Success";
            this.htmlMessage.innerHTML = "<p>"+"Succes: "+this.statName+"for "+this.value+"</p>"
        }
    }
}

export default Stat