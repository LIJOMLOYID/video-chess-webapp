import React from "react";
import Game from "../model/chess";
import Square from "../model/square";
import { Stage, Layer } from "react-konva";
import Board from "../assets/chessBoard.png";
//import useSound from "use-sound";
//import socket from "../../connection/socket";
import Piece from "./piece";
import piecemap from "./piecemap";
//import { useParams } from "react-router-dom";
// import { ColorContext } from "../../context/colorcontext";
// import VideoChatApp from "../../connection/videochat"; // we gotta make the video app first
// import socket from ""; // here is where we would initialize the socket logic.

class ChessGame extends React.Component {
  state = {
    gameState: new Game(this.props.isWhite),
    draggedPieceTargetId: "", // empty string means no piece is being dragged
    draggedPieceTargetId: "", // empty string means no piece is being dragged
    whiteKingInCheck: false,
    blackKingInCheck: false,
  };

  componentDidMount() {
    // here we need to register event listeners for socket.io
    // socket.on("opponent move", (move) => {
    //   // move == [pieceId, finalPosition]
    //   // console.log("opponenet's move: " + move.selectedId + ", " + move.finalPosition)
    //   if (move.playerColorThatJustMovedIsWhite !== this.props.color) {
    //     this.movePiece(
    //       move.selectedId,
    //       move.finalPosition,
    //       this.state.gameState,
    //       false
    //     );
    //     this.setState({
    //       playerTurnToMoveIsWhite: !move.playerColorThatJustMovedIsWhite,
    //     });
    //   }
    // });
  }

  render() {
    /**
     * <div background = chessboard>
     *  <stage>
     *      <layer for loop model and renders it>
     *
     *
     * <div>
     */
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${Board})`,
            width: "720px",
            height: "720px",
          }}
        >
          <Stage width={1000} height={1000}>
            <Layer>
              {this.state.gameState.getBoard().map((row) => {
                return (
                  <>
                    {row.map((square) => {
                      if (square.isOccupied()) {
                        return (
                          <Piece
                            x={square.getCanvasCoord()[0]}
                            y={square.getCanvasCoord()[1]}
                            imgurls={piecemap[square.getPiece().name]}
                            isWhite={square.getPiece().color === "white"}
                            thisPieceTargetId={square.getPiece().targetId}
                            draggedPieceTargetId={
                              this.state.draggedPieceTargetId
                            }
                            onDragStart={this.startDragging}
                            onDragEnd={this.endDragging}
                            id={square.getPieceIdOnThisSquare()}
                            thisPlayersColorIsWhite={this.props.color}
                            playerTurnToMoveIsWhite={
                              this.state.playerTurnToMoveIsWhite
                            }
                          />
                        );
                      }
                      return;
                    })}
                  </>
                );
              })}
            </Layer>
          </Stage>
        </div>
      </>
    );
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
