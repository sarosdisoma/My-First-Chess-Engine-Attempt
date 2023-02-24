import { ChessBoard } from "../ChessBoard";
import { Piece } from "./Piece";
import { Square } from "../Square";

export class Pawn extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board;
  }

  public getType(): string {
    return "pawn";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];

    // Determine the direction the pawn moves based on its color
    const moveDirection = this.color === "white" ? -1 : 1;

    // Check if the pawn can move one or two spaces forward
    if (
      this.board.isEmpty(this.square.rank + moveDirection, this.square.file)
    ) {
      possibleMoves.push(
        new Square (
          this.square.rank + moveDirection,
          this.square.file, this.board)
        )
      
      // Check if the pawn can move two spaces forward from its starting square
      if (
        !this.hasMoved &&
        this.board.isEmpty(
          this.square.rank + 2 * moveDirection,
          this.square.file
        )
      ) {

        possibleMoves.push(
          new Square(
            this.square.rank + 2 * moveDirection,
            this.square.file, this.board
          )
        );
      }
    }

    // Check if the pawn can capture a piece diagonally to its left
    // square of pawn to its left =>
    let squareToItsMoveDirectionDiagonally: Square = new Square(
      this.square.rank + moveDirection,
      this.square.file - 1,
      this.board
    );
    squareToItsMoveDirectionDiagonally.rank =
      squareToItsMoveDirectionDiagonally.rank + moveDirection;
    squareToItsMoveDirectionDiagonally.file =
      squareToItsMoveDirectionDiagonally.file - 1;

    /*const piece = this.board.getPieceFromSquare(squareToItsMoveDirectionDiagonally);
if (piece !== null && piece.color !== this.color) {
*/

    const piece = this.board.getPieceFromSquare(
      squareToItsMoveDirectionDiagonally
    );
    if (piece && piece.color !== this.color) {
      possibleMoves.push(squareToItsMoveDirectionDiagonally);
    }

    // Check if the pawn can capture a piece diagonally to its right
    squareToItsMoveDirectionDiagonally.file = +2;
    if (
      this.board.colorOfPieceOnSquare(squareToItsMoveDirectionDiagonally) !==
      this.color
    ) {
      possibleMoves.push(squareToItsMoveDirectionDiagonally);
    }

    // Check for en passant moves
    if (this.board.lastMovedPawn && this.board.didLastMovedPawnMoveTwoSteps) {
      const lastMovedPawn = this.board.lastMovedPawn;
      const lastMovedPawnColor = lastMovedPawn.color;
      const lastMovedPawnRank = this.board.lastMovedPawn.square.rank;
      let fileOFLastMovedPawn: number = this.board.lastMovedPawn.square.file;

      if (lastMovedPawn.color === "white") {
        var startingPositionOfLastMovedPawn = 2;
      } else if (lastMovedPawn.color === "black") {
        var startingPositionOfLastMovedPawn = 7;
      } else {
        var startingPositionOfLastMovedPawn = 1000;
      }

      if (this.square.file !== 0) {
        if (
          this.square.rank === lastMovedPawnRank &&
          this.square.file === fileOFLastMovedPawn
        ) {
          if (this.color !== lastMovedPawnColor) {
            possibleMoves.push(
              this.board.coordinateToSquare(
                this.square.rank + moveDirection,
                this.square.file
              )
            );
          }
        }
      }

      // Check if the pawn can capture en passant to the right
      fileOFLastMovedPawn = fileOFLastMovedPawn + 2;
      if (this.square.file !== 7) {
        if (
          this.square.rank === lastMovedPawnRank &&
          this.square.file === fileOFLastMovedPawn
        ) {
          if (this.color !== lastMovedPawnColor) {
            possibleMoves.push(
              this.board.coordinateToSquare(
                this.square.rank + moveDirection,
                this.square.file
              )
            );
          }
        }
      }
    }
    return possibleMoves;
  }
}
