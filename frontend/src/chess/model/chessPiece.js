class ChessPiece {
  constructor(name, isAttacked, color, id) {
    this.name = name; // string
    this.color = color; // string: white | black
    this.id = id; // string
    this.isAttacked = isAttacked; // boolean
  }

  setSquare(newSquare) {
    // assign this piece to a specific square
    // this.square = square
  }

  getSquare() {
    // get the current square this piece is on
    // undefined is this piece is not on the board.
  }
}
