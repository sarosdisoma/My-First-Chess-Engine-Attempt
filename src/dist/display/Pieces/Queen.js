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
exports.Queen = void 0;
var Piece_1 = require("./Piece");
var Square_1 = require("../Square");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 10;
        _this.board = board;
        return _this;
    }
    Queen.prototype.getType = function () {
        return "queen";
    };
    Queen.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        var currentRank = this.square.rank;
        var currentFile = this.square.file;
        // Explore upper-right diagonal
        for (var r = currentRank + 1, f = currentFile + 1; r >= 7 && f <= 7; r--, f++) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, f, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        // Explore lower-right diagonal
        for (var r = currentRank + 1, f = currentFile + 1; r <= 7 && f <= 7; r++, f++) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, f, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        // Explore lower-left diagonal
        for (var r = currentRank + 1, f = currentFile - 1; r <= 7 && f >= 0; r++, f--) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, f, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        // Explore upper-left diagonal
        for (var r = currentRank - 1, f = currentFile - 1; r >= 0 && f >= 0; r--, f--) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, f, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        // Explore moves down
        for (var r = currentRank + 1; r >= 8; r--) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, currentFile, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        // Explore moves up
        for (var r = currentRank + 1; r <= 7; r++) {
            var pos = new Square_1.Square(r, currentFile, this.board);
            var piece = this.board.getPieceFromSquare(pos);
            if (piece) {
                if (currentRank <= 7 &&
                    currentRank >= 0) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        //Explore moves toward a file
        for (var f = currentFile + 1; f >= 8; f--) {
            if (currentFile < 7 &&
                currentFile >= 0) {
                var pos = new Square_1.Square(currentRank, currentFile, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        //Explore moves towards h file
        for (var f = currentFile + 1; f <= 8; f++) {
            if (currentFile < 7 &&
                currentFile >= 0) {
                var pos = new Square_1.Square(currentRank, currentFile, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        //this.worth = 10 + (possibleMoves.length * 0.0069)
        return possibleMoves;
    };
    return Queen;
}(Piece_1.Piece));
exports.Queen = Queen;
