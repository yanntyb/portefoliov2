import {Competence} from "./Competence.mjs";
import "../../style/modules/_competence.scss";
import "../../style/modules/_form.scss";

class CompetenceManager{
    constructor(parent,api){
        this.parent = parent;
        this.div = null;
        this.child = [];
        this.getData(api);
    }

    getData(api,lorem = true){
        if(lorem){
            switch(api){
                case "competence":
                    const dataComp = {
                        1: {
                            "title": "rigoureux",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        2: {
                            "title": "autonome",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        3: {
                            "title": "polyvalent",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        4: {
                            "title": "a l'écoute",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        5: {
                            "title": "adaptation",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        6: {
                            "title": "créatif",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna."]
                        },
                    };
                    this.createDom(dataComp,"#3addf1");
                    break;
                case "contact":
                    const dataContact = {
                       1: {
                           title: "Mail",
                           content:
                               `
                                    <div id="form-mail">
                                        <form action="">
                                            <div>
                                                <input type="email" placeholder="Mail" required>
                                            </div>
                                            <div>
                                                <input type="tel" placeholder="Numéro de contact" required>
                                            </div>
                                            <div>
                                                <textarea cols="30" rows="10"></textarea>
                                            </div>
                                            <div>
                                                <input type="submit">
                                            </div>
                                        </form>
                                    </div>
                                `
                       },
                       2:{
                           title: "Telephone",
                           content: "0616331402 du Lundi au vendredi de 9h a 17h"
                       }
                    }
                    this.createDom(dataContact,"#97a5c3",false);
                    break
                case "formation":
                    const dataFormation = {
                        1: {
                            title: "Développeur Web/ Web mobile",
                            content: ["Html", "Css / Sass", "Javascript / Typescript","Php","SQL","Git","Hébergement"]
                        },
                        2:{
                            title: "Concepteur Développeur d'Application",
                            content: ["1","2","3","4","5","6"]
                        }
                    }
                    this.createDom(dataFormation,"#97a5c3");
                    break
            }
        }
        else{

        }

    }

    createDom(data,bgColor,textAnim = true) {
        this.div = document.createElement('div');
        this.parent.appendChild(this.div);
        this.div.classList.add("competence-list");
        for(let key of Object.keys(data)){
            this.child.push(new Competence(this.div,data[key].title,data[key].content,textAnim,bgColor));
        }
    }
}

export {CompetenceManager}