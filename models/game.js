 import Player1 from "models/player1.js";
 import Player2 from "models/player2.js";

 const Game = {
     size: 9,
     current: Player1,
     game_type: null,
     setGameType(type) {
         this.game_type = type;
     },

     next_step() {
         current = current === Player1 ? Player2 : Player1;
     },
 }

 export default Game; 