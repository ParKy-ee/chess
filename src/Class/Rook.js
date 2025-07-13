import Figure from "./Figure.js";

export default class Rook extends Figure {
  constructor(name, pos, side) {
    super(name, pos, side);
  }

  //  col = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //  row = ["8", "7", "6", "5", "4", "3", "2", "1"];

  // 4 case

  findMoveAble(pos, grid) {
    const direction = [
      [+1, 0],
      [-1, 0],
      [0, -1],
      [0, +1],
    ];
    let moveAble = [];

    let row = pos[0];
    let col = pos[1];

    for (let [dRow, dCol] of direction) {
      let r = row + dRow;
      let c = col + dCol;

      while (this.isValid(r, c)) {
        const cell = grid[r][c];

        if (cell === null || cell === " ") {
          moveAble.push([r, c]);
        } else {
          if (cell.Side != this.Side) {
            moveAble.push([r, c]);
            break;
          } else {
            break;
          }
        }

        r += dRow;
        c += dCol;
      }
    }
    return moveAble;
  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
