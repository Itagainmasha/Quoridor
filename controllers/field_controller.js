import { InitialFieldView, FieldView } from "views/field_view.js";
import Game from "models/game.js";
 import { DisplayAvailableMoves } from "players_controller.js";
 import { ClearAvailableView } from "views/available_moves.js";

export const InitBorderEvents = () => {
    const borders = document.querySelectorAll(".border");
    const allElems = Array.from(document.querySelector(".field-grid").children);
    
    borders.forEach((elem) => {
        elem.addEventListener("mouseover", (e) => {
            
            const hovered = e.target;
            let inter, third_border;

            if (hovered.classList.contains("h-border")) {
                inter = hovered.nextSibling;
                third_border = inter.nextSibling;
            } else if (hovered.classList.contains("v-border")) {
                const hovered_id = allElems.indexOf(hovered);
                inter = allElems[hovered_id + 17];
                third_border = allElems[hovered_id + 34];
            }
            if (
                inter?.classList.contains("inter") &&
                 !hovered.classList.contains("activated-border") &&
                 !inter?.classList.contains("activated-border") &&
                 !third_border?.classList.contains("activated-border")

            ) {
                hovered.classList.add("hovered-border");
                inter.classList.add("hovered-border");
                third_border.classList.add("hovered-border");
            }
        });

        elem.addEventListener("mouseleave", (e) => {
            const unhovered = e.target;
            let inter, third_border;

            if (unhovered.classList.contains("h-border")) {
                inter = unhovered.nextSibling;
                third_border = inter.nextSibling;
            } else if (unhovered.classList.contains("v-border")) {
                const unhovered_id = allElems.indexOf(unhovered);
                inter = allElems[unhovered_id + 17];
                third_border = allElems[unhovered_id + 34];
            }
            if (
                inter?.classList.contains("inter") &&
                unhovered.classList.contains("hovered-border") &&
                inter?.classList.contains("hovered-border") &&
                third_border?.classList.contains("hovered-border")
            ) {
                unhovered.classList.remove("hovered-border");
                inter.classList.remove("hovered-border");
                third_border.classList.remove("hovered-border");
            }
        });
    });

    document.querySelectorAll(".border").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            const border = e.target;
            if (border.classList.contains("hovered-border")) {
                document.querySelectorAll(".hovered-border").forEach((elem) => {
                    elem.classList.remove("hovered-border");
                    elem.classList.add("activated-border");
                });
            }
        });
    });
};

export const InitPlayerCellEvents = () => {
    const cells = Array.from(document.querySelectorAll(".cell"));
    console.log(cells);
    console.log(Game.current.x, Game.current.y);
    cells.forEach((elem, id) => {
        if (id == Game.current.y * 9 + Game.current.x) {
            elem.addEventListener("click", (e) => {
                e.stopPropagation();
                DisplayAvailableMoves(elem, id, e);
                document.querySelector(".field-grid").addEventListener(
                    "click",
                    (e) => {
                        ClearAvailableView();
                    },
                    { once: true }
                );
            });
        }
    });
};


export const InitField = () => {
    InitialFieldView();
};

export const RenderField = () => {
    FieldView();
    InitPlayerCellEvents();
 };
 window.render = RenderField;