import Game from "models/game.js";
import Init from "models/init.js";
import {
    InitBorderEvents,
    InitField,
    RenderField,
} from "controllers/field_controller.js";
import { MakeAMove } from "./controllers/PlayersController.js";

InitField();

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
    InitBorderEvents();
};

const game_loop = () => {
    RenderField();
    // Game.current.addEventListener(
    //     "moved",
    //     Game.is_going ? game_loop : () => {}
    // );
};