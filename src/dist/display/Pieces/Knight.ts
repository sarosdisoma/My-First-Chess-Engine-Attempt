import { ChessBoard } from '../ChessBoard';
import { Piece } from './Piece';
import { Square } from "../Square";

export class Knight extends Piece {
  public worth = 2.7;

  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }

  public getType(): string {
    return "knight";
  }
  
  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];
    const currentPosition = this.square;
    const rankOffsets = [2, 1, -1, -2, -2, -1, 1, 2];
    const fileOffsets = [1, 2, 2, 1, -1, -2, -2, -1];

    for (let i = 0; i < rankOffsets.length; i++) {
      const rank = currentPosition.rank + rankOffsets[i];
      const file = currentPosition.file + fileOffsets[i];
      if (rank >= 0 && rank <= 7 && file >= 0 && file <= 7) {
        const square = this.board.getPieceFromSquare(new Square(rank, file, this.board));
        if (square == null || square.color !== this.color) {
          possibleMoves.push(new Square(rank, file, this.board));
        }
      }
    }
    //this.worth = 2.7 + (possibleMoves.length * 0.0069);
    return possibleMoves;
  }
}