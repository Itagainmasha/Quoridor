import { MakeAMove } from "views/available_moves.js";

 export const AvailableMovesView = (coordinates) => {
     console.log(coordinates);
     const cells = Array.from(document.querySelectorAll(".cell"));
     coordinates.forEach(({ x, y }) => {
         if (x >= 0 && y >= 0) {
             const cell = cells[y * 9 + x];
             cell.classList.add("possible");
             cell.addEventListener("click", (e) => {
                 MakeAMove(x, y);
             });
         }
     });
 };

 export const ClearAvailableView = () => {
     document.querySelectorAll(".cell.possible").forEach((element) => {
         element.classList.remove("possible");
     });
 };