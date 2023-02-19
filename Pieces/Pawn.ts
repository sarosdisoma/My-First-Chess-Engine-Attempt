import { ChessBoard } from '../ChessBoard';
import { Piece } from './Piece';
import { Square } from "../Square";

export class Pawn extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }

  public getType(): string {
    return "pawn";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];

      // Determine the direction the pawn moves based on its color
      const moveDirection = (this.color === "white") ? 1 : - 1;
  
      // Check if the pawn can move one or two spaces forward
      if (this.board.isEmpty(this.square.rank + moveDirection, this.square.file)) {
        possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - "a".charCodeAt(0)));
  
        // Check if the pawn can move two spaces forward from its starting square
        if (this.isStartingPosition() && this.board.isEmpty(this.square.rank + 2 * moveDirection, this.square.file)) {
          possibleMoves.push(this.board.coordinateToSquare(this.square.rank + 2 * moveDirection, this.square.file.charCodeAt(0) - "a".charCodeAt(0)));
          console.log(possibleMoves)
        }
      }
  
      // Check if the pawn can capture a piece diagonally to its left
      // square of pawn to its left =>
      let squareToItsMoveDirection: Square = this.square;
      squareToItsMoveDirection.rank += squareToItsMoveDirection.rank +moveDirection 
      let abc = "abcdefgh"
      squareToItsMoveDirection.file = abc[abc.indexOf(squareToItsMoveDirection.file) - 1] 



      if (this.board.colorOfPieceOnSquare(squareToItsMoveDirection) !== this.color) {
        possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 97 - 1));
      }
  
      // Check if the pawn can capture a piece diagonally to its right
      squareToItsMoveDirection.file = abc[abc.indexOf("a") + 1 ]  
      if (this.board.colorOfPieceOnSquare(squareToItsMoveDirection) !== this.color) {
        possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 97 - 1));
      }
  
      // Check for en passant moves
      if (this.board.lastMovedPawn && this.board.didLastMovedPawnMoveTwoSteps) {
        const lastMovedPawn = this.board.lastMovedPawn;
        const lastMovedPawnColor = lastMovedPawn.color;
        const lastMovedPawnRank = this.board.lastMovedPawn.square.rank
        let fileOFLastMovedPawn: string = this.board.lastMovedPawn.square.file
        fileOFLastMovedPawn = abc[abc.indexOf(fileOFLastMovedPawn) - 1]
        if(lastMovedPawn.color === "white"){
          var startingPositionOfLastMovedPawn = 2
        } else if (lastMovedPawn.color === "black"){
          var startingPositionOfLastMovedPawn = 7
        } else {
          var startingPositionOfLastMovedPawn = 1000
        }
        if(this.square.file !== "a"){
          if (this.square.rank === lastMovedPawnRank && this.square.file === fileOFLastMovedPawn) {
            if (lastMovedPawn.square.rank === startingPositionOfLastMovedPawn + 2 && this.color !== lastMovedPawnColor) {
              possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 97 - 1));
            }
          }
        }
        
        // Check if the pawn can capture en passant to the right
        fileOFLastMovedPawn = abc[abc.indexOf(fileOFLastMovedPawn) + 2]
        if(this.square.file !== "h"){
          if (this.square.rank === lastMovedPawnRank && this.square.file === fileOFLastMovedPawn) {
            if (lastMovedPawn.square.rank === startingPositionOfLastMovedPawn && this.color !== lastMovedPawnColor) {
              possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 97 - 1));
            }
          }
        }
        
      }
      return possibleMoves;
    }

    isStartingPosition(): boolean{
      if(this.square.rank === 2 && this.color === "white"){
        return true;
      } else if (this.square.rank === 7 && this.color === "black"){
        return true
      }
      return false
    }
}

