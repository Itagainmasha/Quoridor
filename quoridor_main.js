import Game from "./models/game.js";
//import Init from "models/init.js";
import {
    InitBorderEvents,
    InitField,
    RenderField,
} from "./controllers/field_controller.js";
import { RenderPlayers } from "./views/render_players.js";
import { InitBtnStartEvents } from "./controllers/game_controller.js";
InitField();

/*document.querySelector("#game_pl_comp").addEventListener("click", (e) => {
    init_game(Init.PLAYER_COMPUTER)
});

document.querySelector("#game_pl_pl").addEventListener("click", (e) => {
    init_game(Init.PLAYER_PLAYER)
});

const init_game = (game_type) => { */
    export const init_game = (game_type) => {
    Game.setGameType(game_type);
    RenderField()
    RenderPlayers();
    InitBorderEvents();
};

InitBtnStartEvents(init_game); 