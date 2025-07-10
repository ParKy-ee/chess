import Figure from "./Figure";

export default class Night extends Figure {
  constructor(name, pos, side) {
    super(name, pos, side);
  }

  findMoveAble(pos, grid) {
    const direction = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
    let moveAble = [];

    let row = pos[0];
    let col = pos[1];

    for (let [dRow, dCol] of direction) {
      let r = row + dRow;
      let c = col + dCol;

      if (this.isValid(r, c)) {
        const cell = grid[r][c];

        console.log( cell)
        if ( cell == " ") {
          moveAble.push([r, c]);
        }else if(cell.Side !== this.Side){
             moveAble.push([r, c]);
        }
      }
    }
    console.log(moveAble);
    return moveAble;
  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
