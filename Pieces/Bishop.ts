import { ChessBoard } from "../ChessBoard";
import { Piece } from "./Piece";
import { Square } from "../Square";

export class Bishop extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board;
  }
  public getType(): string {
    return "bishop";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];

    const currentRank = this.square.rank;
    const currentFile = this.square.file;

    for (
      let r = currentRank + 1, f = currentFile + 1;
      r <= 7 && f <= 7;
      r++, f++
    ) {
      if (
        currentFile < 7 &&
        currentFile >= 0 &&
        currentRank <= 7 &&
        currentRank >= 0
      ) {
      const pos = new Square(r, f, this.board);
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

    for (
      let r = currentRank - 1, f = currentFile + 1;
      r >= 0 && f <= 7;
      r--, f++
    ) {
      if (
        currentFile < 7 &&
        currentFile >= 0 &&
        currentRank <= 7 &&
        currentRank >= 0
      ) {
      const pos = new Square(r, f, this.board);
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

    for (
      let r = currentRank - 1, f = currentFile - 1;
      r >= 0 && f >= 0;
      r--, f--
    ) {
      if (
        currentFile < 7 &&
        currentFile >= 0 &&
        currentRank <= 7 &&
        currentRank >= 0
      ) {
      const pos = new Square(r, f, this.board);
      const piece = this.board.getPieceFromSquare(pos);
      if (piece) {
        if (piece.color !== this.color) {
          console.log(this.square)
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }

    for (
      let r = currentRank + 1, f = currentFile - 1;
      r <= 7 && f >= 0;
      r++, f--
    ) {
      if (
        currentFile <= 7 &&
        currentFile >= 0 &&
        currentRank <= 7 &&
        currentRank >= 0
      ) {
      const pos = new Square(r, f, this.board);
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
