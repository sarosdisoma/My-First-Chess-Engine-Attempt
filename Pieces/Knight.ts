import { ChessBoard } from '../ChessBoard';
import { Piece } from './Piece';
import { Square } from '../Square';

export class Knight extends Piece {
  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board
  }

  public getType(): string {
    return "knight";
  }
  
  getPossibleMoves(): Square []{
    const possibleMoves: Square[] = [];
    let abc = "abcdefgh"
    return  possibleMoves
  }
}