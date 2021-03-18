class Game {
  constructor(thisPlayerIsPlayingAsWhite) {
    this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite; // boolean
    this.chessboard = this.makeStartingBoard();
  }

  makeStartingBoard() {
    // make the board orientation for the current player
    if (this.thisPlayerIsPlayingAsWhite) {
      // make chess orientation for white
    } else {
      // make chess orientation tailored for black
    }
  }

  movePiece(pieceId, to) {
    // pieceId: string
    // to: [x, y]
  }
}
