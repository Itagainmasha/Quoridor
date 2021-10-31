import { InitBtnStartEvents, ResetConfigs } from "../controllers/game_controller.js";
 import { init_game } from "../quoridor_main.js";
 import { InitialFieldView } from "./field_view.js";
const VictoryView = (player) => {
    document.body.querySelector(".dark-back").style.display = "flex";
    document.body.querySelector(".dark-back").innerHTML = `
    <h2 class="victory">${player} won!</h2>
    <button id="btn-restart">Restart</button>
    `;

    document.querySelector('#btn-restart').addEventListener('click', () => {
        InitialFieldView();
        ResetConfigs();
        InitBtnStartEvents(init_game);
     }, { once: true });

}

export default VictoryView; 