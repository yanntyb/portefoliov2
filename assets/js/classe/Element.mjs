import "../../style/modules/_elem.scss"

class Element{
    constructor(parent,side, content,backgroundColor,callbackClickFront = () => {},position = null, classList = null,borderColor){
        this.parent = parent;
        this.side = side;
        this.content = content;
        this.callbackClickFront = callbackClickFront;
        this.background = backgroundColor;
        this.position = position;
        this.div = null;
        this.class = classList;
        this.border = borderColor;
        this.createDom();
    }

    createDom(){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        if(this.side !== false){
            this.div.classList = `elemDiv ${this.side}`;
        }
        else{
            this.div.classList = `elem`;
        }

        this.div.innerHTML =
            `
                <div>
                    <div class="s-front">${this.content}</div>
                    <div class="s-bottom"></div>
                    <div class="s-left"></div>
                    <div class="s-top"></div>
                    <div class="s-right"></div>
                </div>
            `
        for(let side of this.div.querySelectorAll("div > div")){
            side.style.backgroundColor = this.background;
            side.style.borderColor = this.border;
        }

        const front = this.div.querySelector(".s-front");
        const left = this.div.querySelector(".s-left");
        const right = this.div.querySelector(".s-right");
        const bottom = this.div.querySelector(".s-bottom");
        const top = this.div.querySelector(".s-top");

        left.style.transform = "rotateX(0deg) rotateY(90deg) translateX(-1vh) rotateZ(0deg) translateZ(-1vh) translateY(-5vh) skewX(0deg)"
        right.style.transform = "rotateX(0deg) rotateY(90deg) translateX(-1vh) rotateZ(0deg) translateZ(1vh) translateY(-5vh) skewX(0deg)"
        bottom.style.transform = "rotateX(90deg) rotateY(0deg) translateX(0) rotateZ(0deg) translateZ(1vh) translateY(1vh) skewX(0deg)"
        top.style.transform = "rotateX(90deg) rotateY(0deg) translateX(0) rotateZ(0deg) translateZ(6vh) translateY(1vh) skewX(0deg)"


        if(this.position !== null){
            this.div.style.position = "absolute";
            this.div.style.top = this.position.top;
            if(this.position.left === "middle"){
                this.div.style.left = parseInt(window.getComputedStyle(this.parent).width) / 2 - parseInt(window.getComputedStyle(this.div).width) / 2 + "px";
            }
            this.div.style.left = this.position.left;
        }

        this.div.addEventListener("click", () => {
            this.callbackClickFront();
        })
    }
}

export {Element};