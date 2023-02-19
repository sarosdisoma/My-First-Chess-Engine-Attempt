import { ChessBoard } from '../ChessBoard';
import { Square } from "../Square";
import { Pawn } from './Pawn';

export abstract class Piece {
  public color: "white" | "black";
  public square: Square;
  public board!: ChessBoard;

  constructor(color: "white" | "black", square: Square) {
    this.color = color;
    this.square = square;
  }

  public getColor(): "white" | "black" {
    return this.color;
  }

  public getPosition(): Square {
    return this.square;
  }

  public setPosition(square: Square): void {
    this.square = square;
  }

  moveTo(from: Square, to: Square): boolean {
    const piece = this.board.getPieceFromSquare(from);
    const capturedPiece = this.board.getPieceFromSquare(to);
    const move = {
      from,
      to,
      piece,
      capturedPiece,
      isCapture: capturedPiece !== null,
      isEnPassantCapturePossible: false // initialize to false
    };
    
    // check if the move is an en passant capture
    if (piece instanceof Pawn && this.board.lastMovedPawn !== null) {
      if (this.board.wasPushedDoubleStep(piece)) {
        const lastMovedPawnPos = this.board.lastMovedPawn.getPosition();
        if (lastMovedPawnPos.rank === from.rank && Math.abs(lastMovedPawnPos.file.charCodeAt(0) - from.file.charCodeAt(0)) === 1) {
          move.isEnPassantCapturePossible = true;
          this.board.removePiece(lastMovedPawnPos); // remove the captured pawn
          this.board.setPiece(to, piece);
        }
      }
    }
  
    // make the move and return whether it was successful
    this.board.makeMove(from, to);
    return true;
  }
  

  abstract getType(): string;
  abstract getPossibleMoves(): Square []
}










