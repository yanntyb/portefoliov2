import "./style/reset.scss";
import "./style/home.scss"

import {Turn} from "./js/classe/Turn.mjs";
import {Element} from "./js/classe/Element.mjs";
import {TextAnim} from "./js/classe/TextAnim";

const noFunction = () => {};

const titlePosition = {top: "3%", left: "middle"};

new Turn(2000);
new Element(document.querySelector("#front .cont"),false,"Presentation","white",noFunction,titlePosition);
new Element(document.querySelector("#bottom .cont"),false,"Competence","white",noFunction,titlePosition);
new Element(document.querySelector("#back .cont"),false,"Formation","white",noFunction,titlePosition);
new Element(document.querySelector("#top .cont"),false,"Contact","white",noFunction,titlePosition);

new TextAnim(document.querySelector("#front .main-content"),["Yann Tyburczy Développeur Web / Web mobile.", " ", "Passionné par le développement web depuis 1 ans.", "Appétence pour le back-end.", " " ,"Actuellement en formation Concepteur Développeur d'Application.", " " , "Je suis disponible pour travailler en tant que Freelance."," ", "Soucieux de bien faire je serrais a l'écoute de vos attentes !"])