import Field from "models/field.js";
import Init from "models/init.js";

const Player1 = {
    x: parseInt(Field.size / 2),
    y: Field.size - 1,
    walls: Init.init_walls,

    setX(x) {
        if (x >= 0 && x < Field.size)
            this.x = x;
    },
    setY(y) {
        if (y >= 0 && y < Field.size)
            this.y = y;
    },
    setWalls(walls) {
        if (walls >= 0 && walls <= Init.init_walls)
            this.walls = walls;
    },
}
window.player1 = Player1;
export default Player1; 