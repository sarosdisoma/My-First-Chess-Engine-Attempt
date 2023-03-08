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
exports.Pawn = void 0;
var Piece_1 = require("./Piece");
var Square_1 = require("../Square");
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 1.1; // + ((this.color === "black" ? this.square.rank - 1 : Math.abs(0 - this.square.rank + 1) ) * 0.0069);
        _this.board = board;
        return _this;
    }
    Pawn.prototype.getType = function () {
        return "pawn";
    };
    Pawn.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        // Determine the direction the pawn moves based on its color
        var moveDirection = this.color === "white" ? -1 : 1;
        // Check if the pawn can move one or two spaces forward
        if (this.board.isEmpty(this.square.rank + moveDirection, this.square.file)) {
            possibleMoves.push(new Square_1.Square(this.square.rank + moveDirection, this.square.file, this.board));
            // Check if the pawn can move two spaces forward from its starting square
            if (!this.hasMoved &&
                this.board.isEmpty(this.square.rank + 2 * moveDirection, this.square.file)) {
                possibleMoves.push(new Square_1.Square(this.square.rank + 2 * moveDirection, this.square.file, this.board));
            }
        }
        // Check if the pawn can capture a piece diagonally to its left
        // square of pawn to its left =>
        var squareToItsMoveDirectionDiagonally = new Square_1.Square(this.square.rank + moveDirection, this.square.file - 1, this.board);
        squareToItsMoveDirectionDiagonally.rank =
            squareToItsMoveDirectionDiagonally.rank + moveDirection;
        squareToItsMoveDirectionDiagonally.file =
            squareToItsMoveDirectionDiagonally.file - 1;
        /*const piece = this.board.getPieceFromSquare(squareToItsMoveDirectionDiagonally);
    if (piece !== null && piece.color !== this.color) {
    */
        var piece = this.board.getPieceFromSquare(squareToItsMoveDirectionDiagonally);
        if (piece && piece.color !== this.color) {
            possibleMoves.push(squareToItsMoveDirectionDiagonally);
        }
        // Check if the pawn can capture a piece diagonally to its right
        squareToItsMoveDirectionDiagonally.file = +2;
        if (this.board.colorOfPieceOnSquare(squareToItsMoveDirectionDiagonally) !==
            this.color) {
            possibleMoves.push(squareToItsMoveDirectionDiagonally);
        }
        // Check for en passant moves
        if (this.board.lastMovedPawn && this.board.didLastMovedPawnMoveTwoSteps) {
            var lastMovedPawn = this.board.lastMovedPawn;
            var lastMovedPawnColor = lastMovedPawn.color;
            var lastMovedPawnRank = this.board.lastMovedPawn.square.rank;
            var fileOFLastMovedPawn = this.board.lastMovedPawn.square.file;
            if (lastMovedPawn.color === "white") {
                var startingPositionOfLastMovedPawn = 2;
            }
            else if (lastMovedPawn.color === "black") {
                var startingPositionOfLastMovedPawn = 7;
            }
            else {
                var startingPositionOfLastMovedPawn = 1000;
            }
            if (this.square.file !== 0) {
                if (this.square.rank === lastMovedPawnRank &&
                    this.square.file === fileOFLastMovedPawn) {
                    if (this.color !== lastMovedPawnColor) {
                        possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file));
                    }
                }
            }
            // Check if the pawn can capture en passant to the right
            fileOFLastMovedPawn = fileOFLastMovedPawn + 2;
            if (this.square.file !== 7) {
                if (this.square.rank === lastMovedPawnRank &&
                    this.square.file === fileOFLastMovedPawn) {
                    if (this.color !== lastMovedPawnColor) {
                        possibleMoves.push(this.board.coordinateToSquare(this.square.rank + moveDirection, this.square.file));
                    }
                }
            }
        }
        return possibleMoves;
    };
    return Pawn;
}(Piece_1.Piece));
exports.Pawn = Pawn;
