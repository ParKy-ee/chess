import Bishop from "./Bishop.js";

export default class Board {
  static col = ["a", "b", "c", "d", "e", "f", "g", "h"];
  static row = ["8", "7", "6", "5", "4", "3", "2", "1"];

  constructor(cols = 8, rows = 8) {
    this.cols = cols;
    this.rows = rows;
    this.grid = Array.from({ length: rows }, () => {
      return Array.from({ length: cols }, () => null);
    });

    this.figure = [];
    this.flag = true;
    //  Bishop
    this.figure.push(
      new Bishop("B", "a3", "W"),
      new Bishop("B", "f1", "W"),
      new Bishop("B", "c8", "B"),
      new Bishop("B", "f8", "B")
    );
  }

  // Figure handel
  placeFigure() {
    this.figure.forEach((fig) => {
      const cell = this.convertPos(fig.Pos);
      const row = cell[0];
      const col = cell[1];
      if (this.isValidPos(cell[0], cell[1])) {
        this.grid[row][col] = fig;
      } else {
        console.log("invlid Position~~");
      }
    });
  }

  isEmty(cell) {
    return this.grid[cell[0]][cell[1]];
  }

  move(name, posOld, posNew) {
    const fig = this.findFigure(name, posOld);
    if (fig) {
      const CELL_Old = this.convertPos(fig.Pos);
      const moveAble = fig.findMoveAble(CELL_Old, this.grid);
      const NEW_Cell = this.convertPos(posNew);
      const CAPTURE = this.grid[NEW_Cell[0]][NEW_Cell[1]];

      const moveSet = new Set(moveAble.map((cell) => cell.join(",")));

      if (moveSet.has(NEW_Cell.join(","))) {
        this.grid[CELL_Old[0]][CELL_Old[1]] = null;

        if (this.grid[NEW_Cell[0]][NEW_Cell[1]] == " ") {
          fig.Pos = posNew;
          this.grid[NEW_Cell[0]][NEW_Cell[1]] = fig;
          this.BoardHandle();
        } else {
          fig.Pos = posNew;
          this.grid[NEW_Cell[0]][NEW_Cell[1]] = null
          this.grid[NEW_Cell[0]][NEW_Cell[1]]  = fig
          console.log(this.grid)
        }
      } else {
        console.log("invalid move!!");
      }
    } else {
      console.log("not found!!");
    }
  }

  freeMove(name, posOld, posNew) {
    const fig = this.findFigure(name, posOld);
    if (fig) {
      const cell = this.convertPos(fig.Pos);
      const newCell = this.convertPos(posNew);
      this.grid[cell[0]][cell[1]] = null;
      fig.Pos = posNew;
      this.grid[newCell[0]][newCell[1]] = fig;
      this.BoardHandle();
    } else {
      console.log("not found!");
    }
  }

  // midware
  isValidPos(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
  findFigure(name, pos) {
    return this.figure.find((item) => item.Pos === pos && item.Name === name);
  }

  convertPos(pos) {
    const col = Board.col.findIndex((item) => item === pos[0]);
    const row = Board.row.findIndex((item) => item === pos[1]);
    return [row, col];
  }

  // @overRide
  convertPos2([row, col]) {
    const pos1 = Board.row[row];
    const pos2 = Board.col[col];
    const pos = `${pos2 + pos1}`;
    return pos;
  }

  // show
  showFigure() {
    this.figure.forEach((item) => item.showself());
  }

  // BoardHandle fuel Board if the cell havnt Figure it gona fuel with "."
  BoardHandle() {
    this.grid = this.grid.map(
      (rows) => (rows = rows.map((cell) => (cell ? cell : " ")))
    );
  }

  logGird() {
    console.log(this.grid);
  }
}

const a = new Board();

// a.BoardHandle()
// a.placeFigure()

console.log(a.convertPos("b2"));
