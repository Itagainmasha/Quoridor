import Field from "../models/field.js";
import Player1 from "../models/player1.js";
import Player2 from "../models/player2.js";
import { WallsCountRender } from "./walls_count.js";
const BlockRow = (element, row) => {
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0) { // v-border
            element.innerHTML += '<div class="v-border border"></div>';
        } else {// cell
            element.innerHTML += '<div class="cell"></div>';
        }
    }
};

 const BorderRow = (element) => {
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0)   // intern
            element.innerHTML += '<div class="inter border"></div>';
        else    // h-border
            element.innerHTML += '<div class="h-border border"></div>';
    } 
};

export const FieldView = () => {
    document.querySelector(".dark-back").style.display = "none";
    //document.querySelector(".stat-wrapper").style.display = "flex";
    //document.querySelector(".menu-list").style.display = "none";
    document.querySelector("menu").innerHTML = `
    <div class="stat-wrapper">
        <h2 class="player-1-stat">Walls: <span id="walls-1">10</span></h2>
        <h2 class="player-2-stat">Walls: <span id="walls-2">10</span></h2>
    </div>
    `;
    
    WallsCountRender();

    const field = document.querySelector(".field-grid");
    field.innerHTML = "";

    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0)   // border row
            BorderRow(field);
        else    // block row
            BlockRow(field, i);
    }
    
    document.querySelectorAll(".border").forEach((e) => {
    e.style.opacity = 0; });
};

export const InitFieldView = () => {
    document.querySelector(".dark-back").style.display = "none";
    //document.querySelector(".stat-wrapper").style.display = "none";

    document.querySelector("menu").innerHTML = `
     <ul class="menu-list">
         <li id="game_pl_comp">Game with computer</li>
         <li id="game_pl_pl">Game with friend</li>
     </ul>
     `;
     document.querySelector('.field-grid').innerHTML = '';
};