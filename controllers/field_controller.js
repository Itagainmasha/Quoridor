import { InitialFieldView, FieldView } from "views/field_view.js";

export const InitBorderEvents = () => {
    console.log('borders initialization');
    console.log(document.querySelectorAll(".border"));
    document.querySelectorAll(".border").forEach((elem) => {
        elem.addEventListener("mouseover", (e) => {
            console.log('mouseover');
            const hovered = e.target;
            const inter = hovered.nextSibling;
            const third_border = inter.nextSibling;

            // check is borders all are unused
            if (
                hovered.classList.contains("h-border") &&
                inter.classList.contains("inter") &&
                third_border.classList.contains("h-border") &&
                hovered.style.opacity == 0 && 
                inter.style.opacity == 0 && 
                third.style.opacity == 0
            ) {
                hovered.style.opacity = 1;
                inter.style.opacity = 1;
                third.style.opacity = 1;
            }
        });
    });

    document.querySelectorAll(".border").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            console.log(e);
        });
    });
};

export const InitField = () => {
    InitialFieldView();
};

export const RenderField = () => {
    FieldView();
};