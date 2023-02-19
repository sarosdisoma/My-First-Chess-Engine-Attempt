import { ChessBoard } from "../ChessBoard";
import { Piece } from "./Piece";
import { Square } from "../Square";

export class Bishop extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }
  public getType(): string {
    return "bishop";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];

    const currentRank = this.square.rank;
    const currentFile = this.square.file.charCodeAt(0) - 'a'.charCodeAt(0);

    for (let r = currentRank + 1, f = currentFile + 1; r <= 8 && f <= 7; r++, f++) {
      const pos = new Square(r, String.fromCharCode(f + 'a'.charCodeAt(0)), this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.getColor() !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }

    for (let r = currentRank - 1, f = currentFile + 1; r >= 1 && f <= 7; r--, f++) {
      const pos = new Square(r, String.fromCharCode(f + 'a'.charCodeAt(0)), this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.getColor() !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }

    for (let r = currentRank - 1, f = currentFile - 1; r >= 1 && f >= 0; r--, f--) {
      const pos = new Square(r, String.fromCharCode(f + 'a'.charCodeAt(0)), this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.getColor() !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }

    for (let r = currentRank + 1, f = currentFile - 1; r <= 8 && f >= 0; r++, f--) {
      const pos = new Square(r, String.fromCharCode(f + 'a'.charCodeAt(0)), this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (piece.getColor() !== this.color) {
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }

    return possibleMoves;
  }
}