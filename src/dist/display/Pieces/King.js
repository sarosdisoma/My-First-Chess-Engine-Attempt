"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.King = void 0;
var Piece_1 = require("./Piece");
var Square_1 = require("../Square");
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 0;
        _this.board = board;
        return _this;
    }
    King.prototype.getType = function () {
        return "king";
    };
    King.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        return possibleMoves;
    };
    King.prototype.getLegalMoves = function () {
        var moves = [];
        var rank = this.square.rank;
        var file = this.square.file;
        // Check the eight squares immediately surrounding the king
        var squaresToCheck = [
            new Square_1.Square(rank + 1, file, this.board),
            new Square_1.Square(rank - 1, file, this.board),
            new Square_1.Square(rank, file + 1, this.board),
            new Square_1.Square(rank, file - 1, this.board),
            new Square_1.Square(rank + 1, file + 1, this.board),
            new Square_1.Square(rank + 1, file - 1, this.board),
            new Square_1.Square(rank - 1, file + 1, this.board),
            new Square_1.Square(rank - 1, file - 1, this.board),
        ];
        for (var _i = 0, squaresToCheck_1 = squaresToCheck; _i < squaresToCheck_1.length; _i++) {
            var square = squaresToCheck_1[_i];
            if (square.rank < 0 ||
                square.rank > 7 ||
                square.file > 7 ||
                square.file < 0) {
                continue;
            }
            var pieceOnSquare = this.board.getPieceFromSquare(square);
            if (!pieceOnSquare || pieceOnSquare.color !== this.color) {
                // The square is empty or contains an opponent's piece
                moves.push(square);
            }
        }
        // Check for castling
        if (!this.hasMoved) {
            // The king has not moved yet
            var kingsideRook = this.board.getPieceFromSquare(new Square_1.Square(this.color === "white" ? 7 : 0, 7, this.board));
            var queensideRook = this.board.getPieceFromSquare(new Square_1.Square(this.color === "white" ? 7 : 0, 7, this.board));
            if (kingsideRook &&
                !kingsideRook.hasMoved &&
                !this.board.isSquareAttacked(new Square_1.Square(rank, file + 1, this.board), this.color) &&
                !this.board.isSquareAttacked(new Square_1.Square(rank, file + 2, this.board), this.color)) {
                // The kingside rook has not moved yet and the squares between the king and the rook are not attacked by the opponent
                moves.push(new Square_1.Square(rank, file + 2, this.board));
            }
            if (queensideRook &&
                !queensideRook.hasMoved &&
                !this.board.isSquareAttacked(new Square_1.Square(rank, file - 1, this.board), this.color) &&
                !this.board.isSquareAttacked(new Square_1.Square(rank, file - 2, this.board), this.color) &&
                !this.board.isSquareAttacked(new Square_1.Square(rank, file - 3, this.board), this.color)) {
                // The queenside rook has not moved yet and the squares between the king and the rook are not attacked by the opponent
                moves.push(new Square_1.Square(rank, file - 2, this.board));
            }
        }
        return moves;
    };
    return King;
}(Piece_1.Piece));
exports.King = King;
