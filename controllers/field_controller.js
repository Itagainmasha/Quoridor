export const InitBorderEvents = () => {
    document.querySelectorAll(".border").forEach((elem) => {
        elem.addEventListener("mouseover", (e) => {
            const hovered = e.target;
            const inter = hovered.nextSibling;
            const third_border = inter.nextSibling;

            // check is borders all are unused
            if (
                hovered.classList.contains("h-border") &&
                inter.classList.contains("inter") &&
                third_border.classList.contains("h-border")
            ) {

            }
        });
    });

    document.querySelectorAll(".border").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            console.log(e);
        });
    });
};