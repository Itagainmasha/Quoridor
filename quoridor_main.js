import Game from "models/game.js";
import Init from "models/init.js";
import {
    InitBorderEvents,
    InitField,
    RenderField,
} from "controllers/field_controller.js";
import { MakeAMove } from "controllers/PlayersController.js";

InitField();

document.querySelector("#game_pl_comp").addEventListener("click", (e) => {
    init_game(Init.PLAYER_COMPUTER)
});

document.querySelector("#game_pl_pl").addEventListener("click", (e) => {
    init_game(Init.PLAYER_PLAYER)
});

const init_game = (game_type) => {
    Game.setGameType(game_type);
    RenderField()
    InitBorderEvents();
};

const game_loop = () => {
    //RenderField();
    // Game.current.addEventListener(
    //     "moved",
    //     Game.is_going ? game_loop : () => {}
    // );
};