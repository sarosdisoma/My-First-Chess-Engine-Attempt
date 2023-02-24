import { ChessBoard } from '../ChessBoard';
import { Square } from "../Square";

export abstract class Piece {
  public color: "white" | "black";
  public square: Square;
  public board!: ChessBoard;
  public hasMoved: boolean = false

  constructor(color: "white" | "black", square: Square) {
    this.color = color;
    this.square = square;
  }

  public getPosition(): Square {
    return this.square;
  }

  public setPosition(square: Square): void {
    this.square = square;
  }

 
  

  abstract getType(): string;
  abstract getPossibleMoves(): Square []
}










