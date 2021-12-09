import "../../style/modules/_main-title.scss";

class TextAnim {
    /**
     * @param parent
     * @param content
     * @param speed
     * @param removeDiv
     * @param callback
     * @param timeoutCallback
     */
    constructor(parent, content, speed, removeDiv, callback = () => {},timeoutCallback = null) {
        this.parent = parent;
        this.content = content;
        this.speed = speed;
        this.callback = callback;
        this.removeDiv = removeDiv;
        this.timeoutCallback = timeoutCallback;
        this.div = null;
        this.span = [];
        this.len = 0;
        this.__init__();
    }

    createDom() {
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("main-title");
        for(let content of this.content){
            for(let char of content){
                const span = document.createElement("span");
                this.div.appendChild(span);
                span.innerText = char;
                this.span.push(span);
                this.len++;
            }
            if(content !== this.content.slice(-1)[0]){
                const br = document.createElement("br");
                this.div.appendChild(br);
            }
        }

    }

    animIn() {
        let index = 0;
        this.interval = window.setInterval(() =>
        {
            const char = this.span[index];
            char.style.animationName = "fadein";
            char.style.animationDuration = `${this.speed}ms`;
            char.style.animationFillMode = "forwards";

            index++;
            if(index === this.len){
                window.setTimeout(() => {
                    this.clearDom();
                    if(this.timeoutCallback){
                        window.setTimeout(() => {
                            if(this.removeDiv){
                                this.remove();
                            }
                            this.callback();
                        },this.timeoutCallback)
                    }
                },this.speed);
                clearInterval(this.interval);
            }
        }, this.speed);
    }

    clearDom(){
        this.div.innerHTML = '';
        for(let span of this.content){
            this.div.innerHTML += span;
            console.log(span);
            if(span !== this.content.slice(-1)[0]){
                const br = document.createElement("br");
                this.div.appendChild(br);
            }
        }
    }

    remove() {
        this.div.style.animationName = "fadeout";
        this.div.style.animationDuration = "2s";
        this.div.style.animationFillMode = "forwards";
        window.setTimeout(() => {
            this.div.remove();
        },2000)
    }

    __init__() {
        this.createDom();
        this.animIn();
    }


}

export {TextAnim};