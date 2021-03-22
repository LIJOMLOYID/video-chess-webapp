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
    // console.log(newSquare)
    if (newSquare === undefined) {
      this.squareThisPieceIsOn = newSquare;
      return;
    }

    if (this.squareThisPieceIsOn === undefined) {
      this.squareThisPieceIsOn = newSquare;
      newSquare.setPiece(this);
    }

    const isNewSquareDifferent =
      this.squareThisPieceIsOn.x != newSquare.x ||
      this.squareThisPieceIsOn.y != newSquare.y;

    if (isNewSquareDifferent) {
      // console.log("set")
      this.squareThisPieceIsOn = newSquare;
      newSquare.setPiece(this);
    }
  }

  getSquare() {
    // get the current square this piece is on
    // undefined is this piece is not on the board.
    return this.squareThisPieceIsOn;
  }
}
