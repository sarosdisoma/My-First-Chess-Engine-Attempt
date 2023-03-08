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
  public didLastMovedPawnMoveTwoSteps: boolean = false;
  public lastMove: any = {
    piece: Piece,
    initialValueOfToSquare: Piece || null,
    from: Square,
    to: Square,
  };

  constructor() {
    this.lastMovedPawn = null;
    let row: (Piece | null)[] = [];
    row.push(new Rook("black", new Square(0, 0, this), this));
    row.push(new Knight("black", new Square(0, 1, this), this));
    row.push(new Bishop("black", new Square(0, 2, this), this));
    row.push(new Queen("black", new Square(0, 3, this), this));
    row.push(new King("black", new Square(0, 4, this), this));
    row.push(new Bishop("black", new Square(0, 5, this), this));
    row.push(new Knight("black", new Square(0, 6, this), this));
    row.push(new Rook("black", new Square(0, 7, this), this));
    this.currentPosition.push(row);
    row = [];
    for (let i = 0; i < 8; i++) {
      row.push(new Pawn("black", new Square(1, i, this), this));
    }
    this.currentPosition.push(row);
    row = [];
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 8; i++) {
        row.push(null);
      }
      this.currentPosition.push(row);
      row = [];
    }

    for (let i = 0; i < 8; i++) {
      row.push(new Pawn("white", new Square(6, i, this), this));
    }
    this.currentPosition.push(row);
    row = []
    // Black currentPosition
    row.push(new Rook("white", new Square(6, 0, this), this));
    row.push(new Knight("white", new Square(6, 1, this), this));
    row.push(new Bishop("white", new Square(6, 2, this), this));
    row.push(new Queen("white", new Square(6, 3, this), this));
    row.push(new King("white", new Square(6, 4, this), this));
    row.push(new Bishop("white", new Square(6, 5, this), this));
    row.push(new Knight("white", new Square(6, 6, this), this));
    row.push(new Rook("white", new Square(6, 7, this), this));
    this.currentPosition.push(row);
  }

  getPieceFromSquare(square: Square): Piece | null {
    return this.currentPosition[square.rank][square.file];
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
    this.currentPosition[Square.rank][Square.file] = null;
    return piece;
  }

  undoMove() {
    this.currentPosition[this.lastMove["from"].rank][
      this.lastMove["from"].file
    ] = this.lastMove["piece"];
    if (this.lastMove["initialValueOfSquare"] instanceof Piece) {
      this.currentPosition[this.lastMove["to"].rank][this.lastMove["to"].file] =
        this.lastMove["initialValueOfSquare"];
    } else {
      this.currentPosition[this.lastMove["to"].rank][this.lastMove["to"].file] =
        null;
    }
     this.lastMove["piece"].square = this.lastMove["from"].square
  }

  makeMove(from: Square, to: Square) {
    const piece = this.getPieceFromSquare(from);
    this.getPieceFromSquare(from)!.square = to
    const opponentPiece = this.getPieceFromSquare(to);
    this.currentPosition[piece!.square.rank][piece!.square.file] = null;
    this.currentPosition[to.rank][to.file] = piece;
    this.lastMove["piece"] = piece;
    this.lastMove["fromSquare"] = from;
    this.lastMove["toSquare"] = to;
    this.lastMove["initialValueOfToSquare"] = opponentPiece;
    piece!.square = to;

    if (piece instanceof Pawn) {
      piece.hasMoved = true;
      this.lastMovedPawn = piece;
      if (Math.abs(from.rank - to.rank) === 2) {
        this.didLastMovedPawnMoveTwoSteps = true;
      }
    } else {
      this.lastMovedPawn = null;
      this.didLastMovedPawnMoveTwoSteps = false;
    }
    let maximizerMaterialcount: number = 0;
    let minimizerkMaterialCount: number = 0;
    for (let i = 0; i < this.currentPosition.length; i++) {
      for (let j = 0; j < this.currentPosition[i].length; j++) {
        if (
          this.currentPosition[i][j] &&
          this.currentPosition[i][j] instanceof Piece
        ) {
          if (this.currentPosition[i][j]!.color === piece!.color) {
            maximizerMaterialcount += this.currentPosition[i][j]!.worth;
          } else {
            minimizerkMaterialCount += this.currentPosition[i][j]!.worth;
          }
        }
      }
    }
    return [maximizerMaterialcount,  minimizerkMaterialCount];
  }

  setPiece(currentPosition: Square, piece: Piece | null): void {
    this.currentPosition[currentPosition.rank][currentPosition.file] = piece;
  }

  isEmpty(rank: number, file: number): boolean {
    let isEmpty: boolean;
    if (this.currentPosition[rank][file]) {
      isEmpty = false;
    } else {
      isEmpty = true;
    }
    return isEmpty;
  }

  coordinateToSquare(x: number, y: number): Square {
    const letter = x;
    const number = 8 - y;
    let coordinateToSquare = new Square(number, letter, this);
    return coordinateToSquare;
  }

  colorOfPieceOnSquare(square: Square): "white" | "black" | undefined {
    return this.getPieceFromSquare(square)?.color;
  }

  isSquareAttacked(square: Square, perspective: "white" | "black"): boolean {
    for (let i = 0; i < this.currentPosition.length; i++) {
      for (let j = 0; j < this.currentPosition[i].length; j++) {
        if (
          this.currentPosition[i][j] instanceof Piece &&
          this.currentPosition[i][j]
        ) {
          let attackedSquares = this.currentPosition[i][j]!.getPossibleMoves();
          for (let k = 0; k < attackedSquares?.length; k++) {
            if (
              attackedSquares[k].file === square.file &&
              attackedSquares[k].rank === square.rank
            ) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  getPossibleMoves(maximizingPlayer: "white" | "black"): Square[] {
    const possibleMoves: Square[] = [];
    for (let i = 0; i < this.currentPosition.length; i++) {
      for (let j = 0; j < this.currentPosition[i].length; j++) {
        if (
          this.currentPosition[i][j] instanceof Piece &&
          this.currentPosition[i][j]?.color === maximizingPlayer
        ) {
          let movesOfCurrentPiece =
            this.currentPosition[i][j]!.getPossibleMoves();
          for (let k = 0; k < movesOfCurrentPiece.length; k++) {
            if (
              !this.isKingInCheckInHypotethicalPos(
                new Square(i, j, this),
                movesOfCurrentPiece[k]
              )
            ) {
              possibleMoves.push(movesOfCurrentPiece[k]);
            }
          }
        }
      }
    }
    return possibleMoves;
  }

  isKingInCheckInHypotethicalPos(from: Square, to: Square): boolean {
    let king: Piece | null;
    let hypotethicalPos = this.currentPosition;
    hypotethicalPos[from.rank][from.file] = null;
    if (to.rank < 7 && to.rank > 0 && to.file < 7 && to.file > 0) {
      hypotethicalPos[to.rank][to.file] = this.getPieceFromSquare(from);
      for (let i = 0; i < hypotethicalPos.length; i++) {
        for (let j = 0; j < hypotethicalPos[i].length; j++) {
          if (this.getPieceFromSquare(from) !== null) {
            if (
              hypotethicalPos[i][j] instanceof King &&
              this.getPieceFromSquare(from)!.color ===
                hypotethicalPos[i][j]!.color
            ) {
              king = hypotethicalPos[i][j];
              break;
            }
          }
        }
      }
    } else {
      return false;
    }

    for (let i = 0; i < hypotethicalPos.length; i++) {
      for (let j = 0; j < hypotethicalPos[i].length; j++) {
        if (this.getPieceFromSquare(from) !== null) {
          if (
            hypotethicalPos[i][j]?.color !==
            this.getPieceFromSquare(from)!.color
          ) {
            let possibleMoves = hypotethicalPos[i][j]!.getPossibleMoves();
            for (let k = 0; k < possibleMoves.length; k++) {
              if (
                possibleMoves[i].file === king!.square.file &&
                possibleMoves[i].rank === king!.square.rank
              ) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  getMaximalizatorsKing(color: "white" | "black") {
    for (let i = 0; i < this.currentPosition.length; i++) {
      for (let j = 0; j < this.currentPosition[i].length; j++) {
        if (this.currentPosition[i][j]) {
          if (
            this.currentPosition[i][j]!.color === color &&
            this.currentPosition[i][j] instanceof King
          ) {
            return this.currentPosition[i][j] as King;
          }
        }
      }
    }
  }
}

