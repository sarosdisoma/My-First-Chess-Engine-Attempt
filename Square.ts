import { ChessBoard } from "./ChessBoard";
import { Piece } from "./Pieces/Piece";

export class Square {
  public rank: number;
  public file: string;
  private board: ChessBoard;
  isEnPassantCapture: boolean;

  constructor(rank: number, file: string, board: ChessBoard) {
   this.rank = rank
   this.file = file
   this.board = board
  }

  public equals(position: Square): Piece | null{
    return (this.board.getPieceFromSquare(this))
  }
}
