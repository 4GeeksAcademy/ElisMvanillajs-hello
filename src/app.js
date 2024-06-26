/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Who = ["El carro", "Mi hija", "El caballo", "El abuelo"];
let Action = ["corre", "toca", "come", "duerme"];
let What = ["mi comida", "mi guitarra", "el celular", "el vestido"];
let When = [
  "despues de dormir",
  "en la tarde",
  "casi nunca",
  "todas las noches"
];

let indiceWho = Who[Math.floor(Math.random() * Who.length)];
let indiceAction = Action[Math.floor(Math.random() * Action.length)];
let indiceWhat = What[Math.floor(Math.random() * What.length)];
let indiceWhen = When[Math.floor(Math.random() * When.length)];

window.onload = function() {
  //write your code here
  excusa.innerText =
    indiceWho + " " + indiceAction + " " + indiceWhat + " " + indiceWhen;
};
