

export default class Figure {
  #name;
  #side;
  #pos;

  constructor(name, pos, side) {
    this.#name = name;
    this.#pos = pos
    this.#side = side;




    if (this.constructor === Figure) {
      throw new Error("Cannot instantiate abstarct class.");
    }
  }

  get Name() {
    return this.#name;
  }

  set Name(name) {
    this.#name = name;
  }

  get Pos() {
    return this.#pos;
  }
  set Pos(pos) {
    this.#pos = pos;
  }

  get Side() {
    return this.#side;
  }
  set Side(side) {
    this.#side = side;
  }

  // setPosition(row, col) {
  //   this.#row = row;
  //   this.#col = col;
  //   this.pos = [this.#row, this.#col];
  // }

  findMoveAble() {
    throw new Error("Method movement() must be implemented.");
  }

  showself() {
    console.log(this.#name, this.#pos, this.#side);
  }
}
