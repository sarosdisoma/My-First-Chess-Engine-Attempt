import { ChessBoard } from "./ChessBoard";
import { Piece } from "./Pieces/Piece";

export class Square {
  public rank: number;
  public file: number;
  private board: ChessBoard;

  constructor(rank: number, file: number, board: ChessBoard) {
   this.rank = rank
   this.file = file
   this.board = board
  }

  public equals(position: Square): Piece | null{
    return (this.board.getPieceFromSquare(this))
  }
}


