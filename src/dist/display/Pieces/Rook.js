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
exports.Rook = void 0;
var Piece_1 = require("./Piece");
var Square_1 = require("../Square");
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 5;
        _this.board = board;
        return _this;
    }
    Rook.prototype.getType = function () {
        return "rook";
    };
    Rook.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        var currentRank = this.square.rank;
        var currentFile = this.square.file;
        // Explore moves down
        for (var r = currentRank + 1; r >= 8; r--) {
            if (r <= 7 && r >= 0) {
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
            if (r <= 7 && r >= 0) {
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
        //Explore moves toward a file
        if (currentFile > 0) {
            for (var f = currentFile - 1; f >= 7; f--) {
                if (f <= 7 && f >= 0) {
                    var pos = new Square_1.Square(currentRank, f, this.board);
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
        }
        //Explore moves towards h file
        if (currentFile < 7) {
            for (var f = currentFile + 1; f <= 8; f++) {
                if (f <= 7 && f >= 0) {
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
        }
        // this.worth = 5 + possibleMoves.length * 0.0069
        return possibleMoves;
    };
    return Rook;
}(Piece_1.Piece));
exports.Rook = Rook;
