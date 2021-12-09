import {Element} from "./Element.mjs";

class Turn{
    constructor(animationSpeed,callbackToBottom,callbackToBack,callbackToTop,callbackToFront) {
        this.side = {
            0:{
                side: "front",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "back",
                after: "bottom",
                callback: callbackToFront
            },
            1:{
                side: "bottom",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "front",
                after: "back",
                callback: callbackToBottom
            },
            2:{
                side: "back",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "bottom",
                after: "top",
                callback: callbackToBack
            },
            3:{
                side: "top",
                top: "<i class=\"fas fa-arrow-up\"></i>",
                bottom: "<i class=\"fas fa-arrow-down\"></i>",
                before: "back",
                after: "front",
                callback: callbackToTop
            },

    }
        this.speed = animationSpeed
        this.cube = document.querySelector("#cube");
        this.setCursor();
    }

    setCursor(){
        for(let index of Object.keys(this.side)){
            const indexBefore = {
                1:0,
                2:1,
                3:2,
                0:3
            }

            const indexNext = {
                0:1,
                1:2,
                2:3,
                3:0,
            }

            new Element(document.querySelector(`#${this.side[index].side}`),"bottom",this.side[index].bottom,"#c99494",() => {
                this.animation(this.side[index],"bottom");
                if(document.querySelector(`#${this.side[index].after}`).dataset.display !== "true"){
                    window.setTimeout(() => {
                        this.side[indexNext[index]].callback();
                    },this.speed);
                }
                document.querySelector(`#${this.side[index].side}`).dataset.display = "true";
            });
            new Element(document.querySelector(`#${this.side[index].side}`),"top",this.side[index].top,"#c99494", () => {
                this.animation(this.side[index],"top");
                if(document.querySelector(`#${this.side[index].before}`).dataset.display !== "true") {
                    window.setTimeout(() => {
                        this.side[indexBefore[index]].callback();
                    }, this.speed);
                }
                document.querySelector(`#${this.side[index].side}`).dataset.display = "true";
            });
        }
    }

    animation(divSide,elemSide){
        this.cube.style.animationName = `${divSide.side}${elemSide.replace(/^\w/, (c) => c.toUpperCase())}`;
        this.cube.style.animationDuration = `${this.speed}ms`;
        this.cube.style.animationFillMode = "forwards";
    }
}

export {Turn};