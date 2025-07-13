import Figure from "./Figure.js";

export default class Pawn extends Figure {
  constructor(name, pos, side) {
    super(name, pos, side);
  }

  //  col = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //  row = ["8", "7", "6", "5", "4", "3", "2", "1"];

  // 4 case

  findMoveAble(pos, grid) {
    let row = pos[0];
    let col = pos[1];

    const moveAble = [];

    const fig = grid[pos[0]][pos[1]];

    if (fig.Side === "W") {
      const eatdirec = [
        [-1, +1],
        [-1, -1],
      ];

      if (fig.Pos[1] === "2") {
        moveAble.push([row - 2, col], [row - 1, col]);
      } else {
        if (this.isValid(row - 1, col)) moveAble.push([row - 1, col]);
      }

      for (let [drow, dcol] of eatdirec) {
        let r = row + drow;
        let c = col + dcol;
        if (this.isValid(r, c)) {
          let cell = grid[r][c];
          if (cell !== " ") {
            if (cell.Pos != this.Pos) {
              moveAble.push([r, c]);
            }
          }
        }
      }
    } else if (fig.Side === "B") {
      const eatdirec = [
        [+1, +1],
        [+1, -1],
      ];
      if (fig.Pos[1] === "7") {
        moveAble.push([row + 2, col], [row + 1, col]);
      } else {
        if (this.isValid(row + 1, col)) moveAble.push([row + 1, col]);
      }

      for (let [drow, dcol] of eatdirec) {
        let r = row + drow;
        let c = col + dcol;
        if (this.isValid(r, c)) {
          let cell = grid[r][c];
          if (cell !== " ") {
            if (cell.Pos != this.Pos) {
              moveAble.push([r, c]);
            }
          }
        }
      }
    }

    return moveAble;
  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
