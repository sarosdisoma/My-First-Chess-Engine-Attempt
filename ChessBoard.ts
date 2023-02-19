import { Bishop } from "./Pieces/Bishop";
import { King } from "./Pieces/King";
import { Knight } from "./Pieces/Knight";
import { Pawn } from "./Pieces/Pawn";
import { Piece } from "./Pieces/Piece";
import { Square } from "./Square";
import { Queen } from "./Pieces/Queen";
import { Rook } from "./Pieces/Rook";

export class ChessBoard {
  public currentPosition: (Piece | null)[][] = [];
  public lastMovedPawn: Pawn | null;
  public didLastMovedPawnMoveTwoSteps: boolean = false

  constructor() {
    this.lastMovedPawn = null;

    let abc = "abcdefgh";
    let row: (Piece | null)[] = [];
    row.push((new Rook("white", new Square(1, "a", this), this)));
    row.push(new Knight("white", new Square(1, "b", this), this));
    row.push(new Bishop("white", new Square(1, "c", this), this));
    row.push(new Queen("white", new Square(1, "d", this), this));
    row.push(new King("white", new Square(1, "e", this), this));
    row.push(new Bishop("white", new Square(1, "f", this), this));
    row.push(new Knight("white", new Square(1, "g", this), this));
    row.push(new Rook("white", new Square(1, "h", this), this));
    this.currentPosition.push(row)
    row = []
    for (let i = 0; i < 8; i++) {
      row.push(new Pawn("white", new Square(2, abc[i], this), this));
    }
    this.currentPosition.push(row)
    row = []
    for(let j = 0; j < 4; j++){
      for (let i = 0; i < 8; i++) {
        row.push(null)
      } 
      this.currentPosition.push(row)
      row = []
    }
    
    for (let i = 0; i < 8; i++) {
      row.push(new Pawn("black", new Square(2, abc[i], this), this));
    }
    this.currentPosition.push(row)
    // Black currentPosition
    row.push(new Rook("black", new Square(8, "a", this), this));
    row.push(new Knight("black", new Square(8, "b", this), this));
    row.push(new Bishop("black", new Square(8, "c", this), this));
    row.push(new Queen("black", new Square(8, "d", this), this));
    row.push(new King("black", new Square(8, "e", this), this));
    row.push(new Bishop("black", new Square(8, "f", this), this));
    row.push(new Knight("black", new Square(8, "g", this), this));
    row.push(new Rook("black", new Square(8, "h", this), this));
    this.currentPosition.push(row)
  }

  
  captures(pieceThatCaptures: Piece, pieceBeingCaptured: Piece) {
    if(pieceBeingCaptured instanceof King){
      return "you cant capture the king, yo"
    }
    const pos = pieceBeingCaptured.getPosition();
    const pos2 = pieceThatCaptures.getPosition();
    this.removePiece(pos2)
    this.setPiece(pos, pieceThatCaptures)
  }

  getPieceFromSquare(square: Square): Piece | null {
    return this.currentPosition[square.rank][square.file.charCodeAt(0) - "a".charCodeAt(0)];
  }

  movePiece(from: Square, to: Square): boolean {
    const piece = this.getPieceFromSquare(from);
    

    if (!piece) {
      console.log(
        "HOW DID YOU DO IT YOU NUMBNUT??? IF I EVER RUN INTO THIS STATEMENT, IM JUST BAD, BUT GONNA LEAVE IT HERE, MIGHT COME IN HANDY"
      );
      return false;
    }
    const success = piece.moveTo(to, from);
    return success;
  }

  getLastMovedPawn(): Pawn | null {
    return this.lastMovedPawn;
  }

  wasPushedDoubleStep(pawn: Pawn): boolean {
    const lastMovedPawn = this.lastMovedPawn;
    if (!lastMovedPawn || !(lastMovedPawn instanceof Pawn)) {
      return false;
    }
    const lastMovedRank = lastMovedPawn.getPosition().rank;
    const currentRank = pawn.getPosition().rank;
    return Math.abs(currentRank - lastMovedRank) === 2;
  }

  public removePiece(Square: Square): Piece | null {
    const piece = this.getPieceFromSquare(Square);
    if (!this.getPieceFromSquare(Square)) {
      return null;
    }
    this.currentPosition[Square.rank][Square.file.charCodeAt(0) - "a".charCodeAt(0)] = null; 
    return piece;
  }
  makeMove(from: Square, to: Square) {
    const piece = this.getPieceFromSquare(from);
    const capturedPiece = this.getPieceFromSquare(to);

    let legalMoves = piece?.getPossibleMoves()
    if(!(legalMoves?.includes(to))){
      return "das not legal m8";
    }

    if (piece instanceof Pawn) {
      this.lastMovedPawn = piece;
      if(Math.abs(from.rank - to.rank)){
        this.didLastMovedPawnMoveTwoSteps = true;
      }
    } else {
      this.lastMovedPawn = null;
      this.didLastMovedPawnMoveTwoSteps = false;
    }

    // Update the piece's currentPosition on the board
    this.removePiece(from);
    this.setPiece(to, piece);    
  }

  setPiece(currentPosition: Square, piece: Piece | null): void {
    this.currentPosition[currentPosition.rank][
      currentPosition.file.charCodeAt(0) - "a".charCodeAt(0)
    ] = piece;
  }

  isEmpty(rank: number, file: string): boolean{
    let isEmpty: boolean;
    if(this.currentPosition[rank][file.charCodeAt(0) - "a".charCodeAt(0)]){
      isEmpty = false;
    } else {
      isEmpty = true;
    }
    return isEmpty;
  }

  coordinateToSquare(x: number, y: number): Square {
    const letter = String.fromCharCode(97 + x);
    const number = 8 - y;
    let coordinateToSquare = new Square (number, letter,  this)
    return coordinateToSquare;
  }

  //if (this.board.isEnemyPiece(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 1, this.color)) {
    colorOfPieceOnSquare(square: Square): "white" | "black" | undefined {
      return this.getPieceFromSquare(square)?.color;
    }
}

let board: ChessBoard = new ChessBoard();
console.log(board)
