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
    
    let row = pos[0]
    let col = pos[1]

    for(let [dRow, dCol] of direction) {
      let r = row + dRow
      let c = col + dCol
      

      while(this.isValid(r,c)){
      const cell = grid[r][c]


        if(cell === null || cell === ' '){
          console.log(cell)
          moveAble.push([r,c])
        }else{

          if(cell.Side != this.Side){
              moveAble.push([r,c])
              break;            
          }else{
            break
          }
        }

        r += dRow
        c += dCol
      }
    }
    return moveAble

  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
