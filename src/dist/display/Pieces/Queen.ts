import { ChessBoard } from '../ChessBoard';
import { Piece } from "./Piece";
import { Square } from "../Square";

export class Queen extends Piece {
  public worth = 10

  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board;
  }

  public getType(): string {
    return "queen";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];
    const currentRank = this.square.rank;
    const currentFile = this.square.file;

    // Explore upper-right diagonal
    for (
      let r = currentRank + 1, f = currentFile + 1;
      r >= 7 && f <= 7;
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

    // Explore lower-right diagonal
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
    // Explore lower-left diagonal
    for (
      let r = currentRank + 1, f = currentFile - 1;
      r <= 7 && f >= 0;
      r++, f--
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
    // Explore upper-left diagonal
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
          possibleMoves.push(pos);
        }
        break;
      }

      possibleMoves.push(pos);
    }
  }
    // Explore moves down
    for (let r = currentRank + 1; r >= 8; r--) {
      if (
        currentFile < 7 &&
        currentFile >= 0 &&
        currentRank <= 7 &&
        currentRank >= 0
      ) {
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
    for (let r = currentRank + 1; r <= 7; r++) {
      const pos = new Square(r, currentFile, this.board);
      const piece = this.board.getPieceFromSquare(pos);

      if (piece) {
        if (
          currentRank <= 7 &&
          currentRank >= 0
        ) {
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
      if (
        currentFile < 7 &&
        currentFile >= 0){
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
      if (
        currentFile < 7 &&
        currentFile >= 0 
      ) {
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
  //this.worth = 10 + (possibleMoves.length * 0.0069)

    return possibleMoves;
  }
}

