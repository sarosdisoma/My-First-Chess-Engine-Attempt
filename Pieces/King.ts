import { ChessBoard } from '../ChessBoard';
import { Piece } from './Piece';
import { Square } from '../Square';

export class King extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }

  public getType(): string {
    return "king";
  }

  getPossibleMoves(): Square []{
    const possibleMoves: Square[] = [];
    return  possibleMoves
  }
}