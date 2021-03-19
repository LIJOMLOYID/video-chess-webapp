import React from "react";
import Game from "../model/chess";

class ChessGame extends React.Component {
  state = {
    gameState: new Game(this.props.isWhite),
    whiteKingInCheck: false,
    blackKingInCheck: false,
  };

  render() {
    /**
     * <div background = chessboard>
     *  <stage>
     *      <layer for loop model and renders it>
     *
     *
     * <div>
     */
  }

  movePiece(selectedId, finalPosition) {
    /**
     * uses pythagorean theorem to calculate
     * the distance between the final position of the
     * chess pieces and every square on the board,
     * and assigns the piece to the closest square
     */
  }
}

export default ChessGame;
