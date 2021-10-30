import Player1 from "models/player1.js";
 import Player2 from "models/player2.js";
 import Victory from "views/victory_view.js";
 import Field from "models/field.js";

export const checkVictory = () => {
    if (Player1.y == 0) {
        Victory("Player 1");
    } else if (Player2.y == Field.size - 1) {

        Victory("Player 2");
    }
};



