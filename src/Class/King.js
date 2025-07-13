import Figure from "./Figure";

export default class King extends Figure {
  constructor(name, pos, side) {
    super(name, pos, side);
  }

  findMoveAble(pos, grid) {
    const direction = [
      [+1, 0],
      [-1, 0],
      [0, -1],
      [0, +1],
      [-1, -1],
      [-1, +1],
      [+1, -1],
      [+1, +1],
    ];
    let moveAble = [];

    let row = pos[0];
    let col = pos[1];

    for (let [dRow, dCol] of direction) {
      let r = row + dRow;
      let c = col + dCol;

      if (this.isValid(r, c)) {
        const cell = grid[r][c];

        if (cell === " ") {
          moveAble.push([r, c]);
        } else if (cell.Side !== this.Side) {
          moveAble.push([r, c]);
        }
      }
    }
    return moveAble;
  }

  findCheck(pos, grid, enemy) {
    let row = pos[0];
    let col = pos[1];

    const direction = [
      [+1, 0],
      [-1, 0],
      [0, -1],
      [0, +1],
      [-1, -1],
      [-1, +1],
      [+1, -1],
      [+1, +1],
    ];

    for (let [dRow, dCol] of direction) {
      let r = row + dRow;
      let c = col + dCol;
      const line = [];

      while (this.isValid(r, c)) {
        const cell = grid[r][c];
        if (cell === null || cell === " ") {
          line.push([r, c]);
        } else {
          if (cell.Side === this.Side) {
            break;
          }
          if (cell.Name === enemy.Name || cell.Side !== this.Side) {
            line.push([r, c]);
            return line;
          }
        }

        r = r + dRow;
        c = c + dCol;
      }
    }
  }

  isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
