import { ChessBoard } from '../ChessBoard';
import { Piece } from "./Piece";
import { Square } from "../Square";

export class King extends Piece {
  public worth = 0;

  constructor(color: "white" | "black", square: Square, board: ChessBoard) {
    super(color, square);
    this.board = board;
  }

  public getType(): string {
    return "king";
  }

  getPossibleMoves(): Square[] {
    const possibleMoves: Square[] = [];
    return possibleMoves;
  }

  getLegalMoves(): Square[] {
    const moves: Square[] = [];
    const rank = this.square.rank;
    const file = this.square.file;

    // Check the eight squares immediately surrounding the king
    const squaresToCheck: Square[] = [
      new Square(rank + 1, file, this.board),
      new Square(rank - 1, file, this.board),
      new Square(rank, file + 1, this.board),
      new Square(rank, file - 1, this.board),
      new Square(rank + 1, file + 1, this.board),
      new Square(rank + 1, file - 1, this.board),
      new Square(rank - 1, file + 1, this.board),
      new Square(rank - 1, file - 1, this.board),
    ];

    for (const square of squaresToCheck) {
      if (
        square.rank < 0 ||
        square.rank > 7 ||
        square.file > 7 ||
        square.file < 0
      ) {
        continue;
      }
      const pieceOnSquare = this.board.getPieceFromSquare(square);
      if (!pieceOnSquare || pieceOnSquare.color !== this.color) {
        // The square is empty or contains an opponent's piece
        moves.push(square);
      }
    }

    // Check for castling
    if (!this.hasMoved) {
      // The king has not moved yet
      const kingsideRook = this.board.getPieceFromSquare(
        new Square(this.color === "white" ? 7 : 0, 7, this.board)
      );
      const queensideRook = this.board.getPieceFromSquare(
        new Square(this.color === "white" ? 7 : 0, 7, this.board)
      );

      if (
        kingsideRook &&
        !kingsideRook.hasMoved &&
        !this.board.isSquareAttacked(
          new Square(rank, file + 1, this.board),
          this.color
        ) &&
        !this.board.isSquareAttacked(
          new Square(rank, file + 2, this.board),
          this.color
        )
      ) {
        // The kingside rook has not moved yet and the squares between the king and the rook are not attacked by the opponent
        moves.push(new Square(rank, file + 2, this.board));
      }

      if (
        queensideRook &&
        !queensideRook.hasMoved &&
        !this.board.isSquareAttacked(
          new Square(rank, file - 1, this.board),
          this.color
        ) &&
        !this.board.isSquareAttacked(
          new Square(rank, file - 2, this.board),
          this.color
        ) &&
        !this.board.isSquareAttacked(
          new Square(rank, file - 3, this.board),
          this.color
        )
      ) {
        // The queenside rook has not moved yet and the squares between the king and the rook are not attacked by the opponent
        moves.push(new Square(rank, file - 2, this.board));
      }
    }
    return moves;
  }
}
