//const moved = new Event('pl_moved');

import Game from "models/game.jss";
 import Player1 from "models/player1.js";
 import Player2 from "models/player2.js";
 import { AvailableMovesView } from "views/available_moves";

export const MakeAMove = (x, y) => {
    const player = Game.current;
    player.setX(x);
    player.setY(y);
   
    Game.next_step();
};

export const DisplayAvailableMoves = (cell, id) => {
     const x = Game.current.x;
     const y = Game.current.y;
     let coordinates = [];
     const allElems = Array.from(document.querySelector(".field-grid").children);
     const gridCell_id = allElems.indexOf(cell);

     if (x + (1 % 9) != 0 && !cell.nextSibling?.classList.contains('activated-border'))
     coordinates.push({ x: x + 1, y: y });
     if (x % 9 != 0 && !cell.previousSibling?.classList.contains('activated-border'))
     coordinates.push({ x: x - 1, y: y });
     if (y > 0 && !allElems[gridCell_id - 17]?.classList.contains('activated-border'))
     coordinates.push({ x: x, y: y - 1 });
     if (y < 8 && !allElems[gridCell_id + 17]?.classList.contains('activated-border'))
     coordinates.push({ x: x, y: y + 1 });

     const otherPlayer = Game.current == Player1 ? Player2 : Player1;
     const id_to_change = coordinates.findIndex(({x, y}) => x == otherPlayer.x && y == otherPlayer.y );
     if (id_to_change != -1) {
         const diff = { x: x - otherPlayer.x, y: y - otherPlayer.y };
         coordinates[id_to_change] = { x: otherPlayer.x - diff.x, y: otherPlayer.y - diff.y };

         if ((diff.x == -1 && (otherPlayer.x == 8 || allElems[gridCell_id + 3]?.classList.contains('activated-border'))) || 
             (diff.x == 1 && (otherPlayer.x == 0 || allElems[gridCell_id - 3]?.classList.contains('activated-border')))) {
             coordinates.splice(id_to_change, 1);
             if (!allElems[(otherPlayer.y * 2 - 1) * 17 + otherPlayer.x * 2]?.classList.contains('activated-border'))
                 coordinates.push({ x: otherPlayer.x, y: otherPlayer.y - 1 });
             if (!allElems[(otherPlayer.y * 2 + 1) * 17 + otherPlayer.x * 2]?.classList.contains('activated-border'))
                 coordinates.push({ x: otherPlayer.x, y: otherPlayer.y + 1 });
         }
         if ((diff.y == -1 && (otherPlayer.y == 8 || allElems[gridCell_id + (3 * 17)]?.classList.contains('activated-border'))) || 
             (diff.y == 1 && (otherPlayer.x == 0 || allElems[gridCell_id - (3 * 17)]?.classList.contains('activated-border')))) {
             coordinates.splice(id_to_change, 1);
             const otherPlayerCell = allElems[otherPlayer.y * 34 + otherPlayer.x * 2];
             if (!otherPlayerCell.previousSibling?.classList.contains('activated-border'))
                 coordinates.push({ x: otherPlayer.x - 1, y: otherPlayer.y });
             if (!otherPlayerCell.nextSibling?.classList.contains('activated-border'))
                 coordinates.push({ x: otherPlayer.x + 1, y: otherPlayer.y });
         }
     }

     AvailableMovesView(coordinates);
 };
