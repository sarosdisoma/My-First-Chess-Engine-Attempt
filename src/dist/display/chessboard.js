"use strict";
var _a, _b;
exports.__esModule = true;
exports.ChessBoard = void 0;
var Bishop_1 = require("./Pieces/Bishop");
var King_1 = require("./Pieces/King");
var Knight_1 = require("./Pieces/Knight");
var Pawn_1 = require("./Pieces/Pawn");
var Piece_1 = require("./Pieces/Piece");
var Square_1 = require("./Square");
var Queen_1 = require("./Pieces/Queen");
var Rook_1 = require("./Pieces/Rook");
var ChessBoard = /** @class */ (function () {
    function ChessBoard() {
        this.currentPosition = [];
        this.didLastMovedPawnMoveTwoSteps = false;
        this.lastMove = {
            piece: Piece_1.Piece,
            initialValueOfToSquare: Piece_1.Piece || null,
            from: Square_1.Square,
            to: Square_1.Square
        };
        this.lastMovedPawn = null;
        var row = [];
        row.push(new Rook_1.Rook("black", new Square_1.Square(0, 0, this), this));
        row.push(new Knight_1.Knight("black", new Square_1.Square(0, 1, this), this));
        row.push(new Bishop_1.Bishop("black", new Square_1.Square(0, 2, this), this));
        row.push(new Queen_1.Queen("black", new Square_1.Square(0, 3, this), this));
        row.push(new King_1.King("black", new Square_1.Square(0, 4, this), this));
        row.push(new Bishop_1.Bishop("black", new Square_1.Square(0, 5, this), this));
        row.push(new Knight_1.Knight("black", new Square_1.Square(0, 6, this), this));
        row.push(new Rook_1.Rook("black", new Square_1.Square(0, 7, this), this));
        this.currentPosition.push(row);
        row = [];
        for (var i = 0; i < 8; i++) {
            row.push(new Pawn_1.Pawn("black", new Square_1.Square(1, i, this), this));
        }
        this.currentPosition.push(row);
        row = [];
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 8; i++) {
                row.push(null);
            }
            this.currentPosition.push(row);
            row = [];
        }
        for (var i = 0; i < 8; i++) {
            row.push(new Pawn_1.Pawn("white", new Square_1.Square(6, i, this), this));
        }
        this.currentPosition.push(row);
        row = [];
        // Black currentPosition
        row.push(new Rook_1.Rook("white", new Square_1.Square(6, 0, this), this));
        row.push(new Knight_1.Knight("white", new Square_1.Square(6, 1, this), this));
        row.push(new Bishop_1.Bishop("white", new Square_1.Square(6, 2, this), this));
        row.push(new Queen_1.Queen("white", new Square_1.Square(6, 3, this), this));
        row.push(new King_1.King("white", new Square_1.Square(6, 4, this), this));
        row.push(new Bishop_1.Bishop("white", new Square_1.Square(6, 5, this), this));
        row.push(new Knight_1.Knight("white", new Square_1.Square(6, 6, this), this));
        row.push(new Rook_1.Rook("white", new Square_1.Square(6, 7, this), this));
        this.currentPosition.push(row);
    }
    ChessBoard.prototype.getPieceFromSquare = function (square) {
        return this.currentPosition[square.rank][square.file];
    };
    ChessBoard.prototype.wasPushedDoubleStep = function (pawn) {
        var lastMovedPawn = this.lastMovedPawn;
        if (!lastMovedPawn || !(lastMovedPawn instanceof Pawn_1.Pawn)) {
            return false;
        }
        var lastMovedRank = lastMovedPawn.getPosition().rank;
        var currentRank = pawn.getPosition().rank;
        return Math.abs(currentRank - lastMovedRank) === 2;
    };
    ChessBoard.prototype.removePiece = function (Square) {
        var piece = this.getPieceFromSquare(Square);
        if (!this.getPieceFromSquare(Square)) {
            return null;
        }
        this.currentPosition[Square.rank][Square.file] = null;
        return piece;
    };
    ChessBoard.prototype.undoMove = function () {
        this.currentPosition[this.lastMove["from"].rank][this.lastMove["from"].file] = this.lastMove["piece"];
        if (this.lastMove["initialValueOfSquare"] instanceof Piece_1.Piece) {
            this.currentPosition[this.lastMove["to"].rank][this.lastMove["to"].file] =
                this.lastMove["initialValueOfSquare"];
        }
        else {
            this.currentPosition[this.lastMove["to"].rank][this.lastMove["to"].file] =
                null;
        }
        this.lastMove["piece"].square = this.lastMove["from"].square;
    };
    ChessBoard.prototype.makeMove = function (from, to) {
        var piece = this.getPieceFromSquare(from);
        this.getPieceFromSquare(from).square = to;
        var opponentPiece = this.getPieceFromSquare(to);
        this.currentPosition[piece.square.rank][piece.square.file] = null;
        this.currentPosition[to.rank][to.file] = piece;
        this.lastMove["piece"] = piece;
        this.lastMove["fromSquare"] = from;
        this.lastMove["toSquare"] = to;
        this.lastMove["initialValueOfToSquare"] = opponentPiece;
        piece.square = to;
        if (piece instanceof Pawn_1.Pawn) {
            piece.hasMoved = true;
            this.lastMovedPawn = piece;
            if (Math.abs(from.rank - to.rank) === 2) {
                this.didLastMovedPawnMoveTwoSteps = true;
            }
        }
        else {
            this.lastMovedPawn = null;
            this.didLastMovedPawnMoveTwoSteps = false;
        }
        var maximizerMaterialcount = 0;
        var minimizerkMaterialCount = 0;
        for (var i = 0; i < this.currentPosition.length; i++) {
            for (var j = 0; j < this.currentPosition[i].length; j++) {
                if (this.currentPosition[i][j] &&
                    this.currentPosition[i][j] instanceof Piece_1.Piece) {
                    if (this.currentPosition[i][j].color === piece.color) {
                        maximizerMaterialcount += this.currentPosition[i][j].worth;
                    }
                    else {
                        minimizerkMaterialCount += this.currentPosition[i][j].worth;
                    }
                }
            }
        }
        return [maximizerMaterialcount, minimizerkMaterialCount];
    };
    ChessBoard.prototype.setPiece = function (currentPosition, piece) {
        this.currentPosition[currentPosition.rank][currentPosition.file] = piece;
    };
    ChessBoard.prototype.isEmpty = function (rank, file) {
        var isEmpty;
        if (this.currentPosition[rank][file]) {
            isEmpty = false;
        }
        else {
            isEmpty = true;
        }
        return isEmpty;
    };
    ChessBoard.prototype.coordinateToSquare = function (x, y) {
        var letter = x;
        var number = 8 - y;
        var coordinateToSquare = new Square_1.Square(number, letter, this);
        return coordinateToSquare;
    };
    //if (this.board.isEnemyPiece(this.square.rank + moveDirection, this.square.file.charCodeAt(0) - 1, this.color)) {
    ChessBoard.prototype.colorOfPieceOnSquare = function (square) {
        var _a;
        return (_a = this.getPieceFromSquare(square)) === null || _a === void 0 ? void 0 : _a.color;
    };
    ChessBoard.prototype.isSquareAttacked = function (square, perspective) {
        for (var i = 0; i < this.currentPosition.length; i++) {
            for (var j = 0; j < this.currentPosition[i].length; j++) {
                if (this.currentPosition[i][j] instanceof Piece_1.Piece &&
                    this.currentPosition[i][j]) {
                    var attackedSquares = this.currentPosition[i][j].getPossibleMoves();
                    for (var k = 0; k < (attackedSquares === null || attackedSquares === void 0 ? void 0 : attackedSquares.length); k++) {
                        if (attackedSquares[k].file === square.file &&
                            attackedSquares[k].rank === square.rank) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    ChessBoard.prototype.getPossibleMoves = function (maximizingPlayer) {
        var _a;
        var possibleMoves = [];
        for (var i = 0; i < this.currentPosition.length; i++) {
            for (var j = 0; j < this.currentPosition[i].length; j++) {
                if (this.currentPosition[i][j] instanceof Piece_1.Piece &&
                    ((_a = this.currentPosition[i][j]) === null || _a === void 0 ? void 0 : _a.color) === maximizingPlayer) {
                    var movesOfCurrentPiece = this.currentPosition[i][j].getPossibleMoves();
                    for (var k = 0; k < movesOfCurrentPiece.length; k++) {
                        if (!this.isKingInCheckInHypotethicalPos(new Square_1.Square(i, j, this), movesOfCurrentPiece[k])) {
                            possibleMoves.push(movesOfCurrentPiece[k]);
                        }
                    }
                }
            }
        }
        return possibleMoves;
    };
    ChessBoard.prototype.isKingInCheckInHypotethicalPos = function (from, to) {
        var _a;
        var king;
        var hypotethicalPos = this.currentPosition;
        hypotethicalPos[from.rank][from.file] = null;
        if (to.rank < 7 && to.rank > 0 && to.file < 7 && to.file > 0) {
            hypotethicalPos[to.rank][to.file] = this.getPieceFromSquare(from);
            for (var i = 0; i < hypotethicalPos.length; i++) {
                for (var j = 0; j < hypotethicalPos[i].length; j++) {
                    if (this.getPieceFromSquare(from) !== null) {
                        if (hypotethicalPos[i][j] instanceof King_1.King &&
                            this.getPieceFromSquare(from).color ===
                                hypotethicalPos[i][j].color) {
                            king = hypotethicalPos[i][j];
                            break;
                        }
                    }
                }
            }
        }
        else {
            return false;
        }
        for (var i = 0; i < hypotethicalPos.length; i++) {
            for (var j = 0; j < hypotethicalPos[i].length; j++) {
                if (this.getPieceFromSquare(from) !== null) {
                    if (((_a = hypotethicalPos[i][j]) === null || _a === void 0 ? void 0 : _a.color) !==
                        this.getPieceFromSquare(from).color) {
                        var possibleMoves = hypotethicalPos[i][j].getPossibleMoves();
                        for (var k = 0; k < possibleMoves.length; k++) {
                            if (possibleMoves[i].file === king.square.file &&
                                possibleMoves[i].rank === king.square.rank) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
    ChessBoard.prototype.getMaximalizatorsKing = function (color) {
        for (var i = 0; i < this.currentPosition.length; i++) {
            for (var j = 0; j < this.currentPosition[i].length; j++) {
                if (this.currentPosition[i][j]) {
                    if (this.currentPosition[i][j].color === color &&
                        this.currentPosition[i][j] instanceof King_1.King) {
                        return this.currentPosition[i][j];
                    }
                }
            }
        }
    };
    return ChessBoard;
}());
exports.ChessBoard = ChessBoard;
