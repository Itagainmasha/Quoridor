import Field from "models/field.js";
import Player1 from "models/player1.js";
import Player2 from "models/player2.js";

const BlockRow = (element, row) => {
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0) {   // v-border
            element.innerHTML += '<div class="v-border"></div>';
        } else {
            if (Player1.x == Math.ceil(i / 2) - 1 && Player1.y == Math.ceil(row / 2) - 1)
                 element.innerHTML += '<div class="cell"><div class="player player-1"></div></div>';
             else if (Player2.x == Math.ceil(i / 2) - 1 && Player2.y == Math.ceil(row / 2) - 1)
                 element.innerHTML += '<div class="cell"><div class="player player-2"></div></div>';
             else
                 element.innerHTML += '<div class="cell"></div>';
         }
     }  
 }

 const BorderRow = (element) => {
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0)   // intern
            element.innerHTML += '<div class="inter"></div>';
        else    // h-border
            element.innerHTML += '<div class="h-border"></div>';
    } 
}

const FieldView = () => {
    document.querySelector('#walls-1').innerHTML = Player1.walls;
    document.querySelector('#walls-2').innerHTML = Player2.walls;

    const field = document.querySelector(".field-grid");
    field.innerHTML = "";

    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0)   // border row
            BorderRow(field);
        else    // block row
            BlockRow(field, i);
    }
} 

export default FieldView;