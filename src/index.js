import "./style.css";
import {homePage} from "./home.js";
import {test} from "./home.js";

let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

home.addEventListener("click", (event) => {
    event.preventDefault();
    test();
    homePage();
})

menu.addEventListener("click", (event) => {
    event.preventDefault();
    test();
})

contact.addEventListener("click", (event) => {
    event.preventDefault();
    
})



