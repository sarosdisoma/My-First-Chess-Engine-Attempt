import { ChessBoard } from "../ChessBoard";
import { Piece } from "./Piece";
import { Pawn } from "./Pawn";
import { Square } from "../Square";

export class Bishop extends Piece {
  public worth = 3.5
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
            console.log(this.square);
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
    //this.worth = 3 + (possibleMoves.length * 0.0069)
    return possibleMoves;
  }


  determineWorth(): number {
    let allyPawnCountOnSameColorWeighedByTheirDepth: number = 0;
    let enemyPawnCountOnOnSameColorWeighedByTheirDepth: number = 0;
    for (let i = 0; i < this.board.currentPosition.length; i++) {
      for (let j = 0; j < this.board.currentPosition[i].length; j++) {
        if (this.board.currentPosition[i][j]) {
          if(this.board.currentPosition[i][j] instanceof Pawn){
            if (this.board.currentPosition[i][j]!.color == this.color) {
              allyPawnCountOnSameColorWeighedByTheirDepth++;
              allyPawnCountOnSameColorWeighedByTheirDepth - this.board.currentPosition[i][j]!.square.rank * 1.037
            } else {
              if(this.color === "white" && this.square.rank > 5 && this.square.file === 6 || 1){
                enemyPawnCountOnOnSameColorWeighedByTheirDepth + this.board.currentPosition[i][j]!.square.rank * 1.050
              } else if (this.color === "black" && this.square.rank < 5) {
                enemyPawnCountOnOnSameColorWeighedByTheirDepth + 1 + Math.abs(this.board.currentPosition[i][j]!.square.rank - 8) * 1.050
              }
            }
          }
        }
      }
    }

    if(enemyPawnCountOnOnSameColorWeighedByTheirDepth > 5 && enemyPawnCountOnOnSameColorWeighedByTheirDepth < 3.14){
      return 3.2 + (this.getPossibleMoves().length * 0.1);
    } else if (enemyPawnCountOnOnSameColorWeighedByTheirDepth > 5){
      return 3.14 + (this.getPossibleMoves().length * 0.1);
    } 
    return 2.7 + (this.getPossibleMoves().length * 0.1);
  }
}
