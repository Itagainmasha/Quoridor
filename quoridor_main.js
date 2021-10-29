import Game from "./models/game.js";
import Init from "./models/init.js"
import { InitFieldView, FieldView } from "./views/field_view.js";
import {InitBorderEvents} from "./controllers/field_controller.js"
 
InitFieldView();
document.querySelector("#game_pl_comp").addEventListener("click", (e) => {
    Game.setGameType(Init.PLAYER_COMPUTER);
    init_game();
    game_loop();
});

document.querySelector("#game_pl_pl").addEventListener("click", (e) => {
    Game.setGameType(Init.PLAYER_PLAYER);
    init_game();
    game_loop();
});

const init_game = () => {
    FieldView();
    InitBorderEvents();
};

const game_loop = () => {};
//Todo field/borders contr and game loop +++++