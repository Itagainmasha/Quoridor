 import Player1 from "models/player1.js";
 import Player2 from "models/player2.js";

 const Game = {
     size: 9,
     current_pl: '1',
     game_type: null,
     setGameType(type) {
         this.game_type = type;
     },
     current() {
        return this.current_pl == '1' ? Player1 : Player2;
    },
     next_step() {
        this.current_pl = this.current_pl == '1' ? '2' : '1';
     },
 }
 window.Game = Game;
 export default Game; 