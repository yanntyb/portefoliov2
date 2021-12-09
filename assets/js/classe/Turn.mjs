import {Element} from "./Element.mjs";

class Turn{
    constructor(animationSpeed) {
        this.side = {
            0:{
                side: "front",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "back",
                after: "bottom"
            },
            1:{
                side: "bottom",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "front",
                after: "top"
            },
            2:{
                side: "top",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "bottom",
                after: "back"
            },
            3:{
                side: "back",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "top",
                after: "front"
            },

    }
        this.speed = animationSpeed
        this.cube = document.querySelector("#cube");
        this.setCursor();
    }

    setCursor(){
        for(let index of Object.keys(this.side)){
            new Element(document.querySelector(`#${this.side[index].side}`),"bottom",this.side[index].bottom,"#c99494",() => {
                this.animation(this.side[index],"bottom")
            });
            new Element(document.querySelector(`#${this.side[index].side}`),"top",this.side[index].top,"#c99494", () => {
                this.animation(this.side[index],"top")
            },null,null,"black");
        }
    }

    animation(divSide,elemSide){
        this.cube.style.animationName = `${divSide.side}${elemSide.replace(/^\w/, (c) => c.toUpperCase())}`;
        this.cube.style.animationDuration = `${this.speed}ms`;
        this.cube.style.animationFillMode = "forwards";
    }
}

export {Turn};