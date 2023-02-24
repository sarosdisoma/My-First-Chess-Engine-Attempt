import { ChessBoard } from "../ChessBoard";
import { Piece } from "./Piece";
import { Square } from "../Square";

export class Rook extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }

  public getType(): string {
    return "rook";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];
    const currentRank = this.square.rank;
    const currentFile = this.square.file;

    // Explore moves down
    for (let r = currentRank + 1; r >= 8; r--) {
      if(r <= 7 && r >= 0){
      const pos = new Square(r, currentFile, this.board);
      const piece = this.board.getPieceFromSquare(pos);
      if (piece) {
        if (piece.color !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }

    // Explore moves up
    for (let r = currentRank + 1; r <= 8; r++) {
      if(r<=7 && r>=0){
      const pos = new Square(r, currentFile, this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.color !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }

    //Explore moves toward a file
    for (let f = currentFile + 1; f >= 8; f--) {
      if(f <= 7 && f >= 0){
      const pos = new Square(currentRank, currentFile, this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.color !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }

    //Explore moves towards h file
    for (let f = currentFile + 1; f <= 8; f++) {
      if(f <= 7 && f >= 0){
      const pos = new Square(currentRank, currentFile, this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.color !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }
    return possibleMoves;
  }
}