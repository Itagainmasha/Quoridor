const moved = new Event('pl_moved');

export const MakeAMove = (player, x, y) => {
    player.setX(x);
    player.setY(y);
    player.dispatchEvent(moved);
};