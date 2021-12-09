import {TextAnim} from "./TextAnim.js";
import {Element} from "./Element.mjs";

class Competence{
    constructor(parent,title, content,textAnim = true,bgColor = "#8f8587"){
        this.parent = parent;
        this.div = null;
        this.title = title;
        this.content = content;
        this.animContent = textAnim;
        this.bgColor = bgColor;
        this.createDom();
    }

    createDom(){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("competence");
        this.titleDiv = document.createElement("div");
        this.div.appendChild(this.titleDiv);
        this.titleDiv.classList.add("competence-title");
        this.description = document.createElement("div");
        this.div.appendChild(this.description);
        this.description.classList.add("competence-description");
        new Element(this.div,"#botom .main-content",
                `
                    ${this.title}         
                `,
            this.bgColor
            );
        if(this.animContent){
            new TextAnim(this.div.querySelector(".competence-description"),this.content);
        }
        else{
            this.description.innerHTML = this.content;
        }

    }
}

export {Competence};