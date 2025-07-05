import Figure from "./Figure.js";

export default class Bishop extends Figure {
  constructor(name, col, row, side) {
    super(name, col, row, side);
  }

  //  col = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //  row = ["8", "7", "6", "5", "4", "3", "2", "1"];
  // 4 case
  // 1. -rol, +col
  // 1. -rol, -col
  // 1. +rol, +col
  // 1. +rol, -col
  findMoveAble(pos, grid) {
    let moveAble = [];
    let i = 0;
    while (i <= 3) {
      switch (i) {
        case 0: {
          let row = pos[0];
          let col = pos[1];
          while (this.isValid(row + 1, col - 1)) {
            row = row + 1;
            col = col - 1;
            if (grid[row][col] === null || grid[row][col] === " ") {
              moveAble.push([row, col]);
            } else {
              moveAble.push([row, col]);
              i = i + 1;
              break;
            }
          }

          i = i + 1;
          break;
        }
        case 1: {
          let row = pos[0];
          let col = pos[1];
          while (this.isValid(row + 1, col + 1)) {
            row = row + 1;
            col = col + 1;
            if (grid[row][col] === null || grid[row][col] === " ") {
              moveAble.push([row, col]);
            } else {
              moveAble.push([row, col]);
              i = i + 1;
              break;
            }
          }
          i = i + 1;
          break;
        }
        case 2: {
          let row = pos[0];
          let col = pos[1];
          while (this.isValid(row - 1, col + 1)) {
            row = row - 1;
            col = col + 1;
            if (grid[row][col] === null || grid[row][col] === " ") {
              moveAble.push([row, col]);
            } else {
              moveAble.push([row, col]);
              i = i + 1;
              break;
            }
          }
          i = i + 1;
          break;
        }
        case 3: {
          let row = pos[0];
          let col = pos[1];
          while (this.isValid(row - 1, col - 1)) {
            row = row - 1;
            col = col - 1;
            if (grid[row][col] === null || grid[row][col] === " ") {
              moveAble.push([row, col]);
            } else {
              moveAble.push([row, col]);
              i = i + 1;
              break;
            }
          }
          i = i + 1;
          break;
        }
      }
    }

    return moveAble;
  }
  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
