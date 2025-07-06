import Figure from "./Figure.js";

export default class Bishop extends Figure {
  constructor(name, col, row, side) {
    super(name, col, row, side);
  }

  //  col = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //  row = ["8", "7", "6", "5", "4", "3", "2", "1"];

  // 4 case
  // 1. -rol, +col -> right-up
  // 1. -rol, -col -> left-up
  // 1. +rol, +col -> right-down
  // 1. +rol, -col -> left-down

  findMoveAble(pos, grid) {
    const direction = [
      [-1, -1], // 1. -rol, +col -> right-up
      [-1, +1], // 1. -rol, -col -> left-up
      [+1, -1], // 1. +rol, +col -> right-down
      [+1, +1], // 1. +rol, -col -> left-down
    ];
    let moveAble = [];
    const posFig = grid[pos[0]][pos[1]]
    
    
   


    return moveAble

  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
