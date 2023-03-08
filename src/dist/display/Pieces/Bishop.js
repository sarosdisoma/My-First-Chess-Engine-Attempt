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
exports.Bishop = void 0;
var Piece_1 = require("./Piece");
var Pawn_1 = require("./Pawn");
var Square_1 = require("../Square");
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 3.5;
        _this.board = board;
        return _this;
    }
    Bishop.prototype.getType = function () {
        return "bishop";
    };
    Bishop.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        var currentRank = this.square.rank;
        var currentFile = this.square.file;
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
        for (var r = currentRank - 1, f = currentFile + 1; r >= 0 && f <= 7; r--, f++) {
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
        for (var r = currentRank - 1, f = currentFile - 1; r >= 0 && f >= 0; r--, f--) {
            if (currentFile < 7 &&
                currentFile >= 0 &&
                currentRank <= 7 &&
                currentRank >= 0) {
                var pos = new Square_1.Square(r, f, this.board);
                var piece = this.board.getPieceFromSquare(pos);
                if (piece) {
                    if (piece.color !== this.color) {
                        console.log(this.square);
                        possibleMoves.push(pos);
                    }
                    break;
                }
                possibleMoves.push(pos);
            }
        }
        for (var r = currentRank + 1, f = currentFile - 1; r <= 7 && f >= 0; r++, f--) {
            if (currentFile <= 7 &&
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
        //this.worth = 3 + (possibleMoves.length * 0.0069)
        return possibleMoves;
    };
    Bishop.prototype.determineWorth = function () {
        var allyPawnCountOnSameColorWeighedByTheirDepth = 0;
        var enemyPawnCountOnOnSameColorWeighedByTheirDepth = 0;
        for (var i = 0; i < this.board.currentPosition.length; i++) {
            for (var j = 0; j < this.board.currentPosition[i].length; j++) {
                if (this.board.currentPosition[i][j]) {
                    if (this.board.currentPosition[i][j] instanceof Pawn_1.Pawn) {
                        if (this.board.currentPosition[i][j].color == this.color) {
                            allyPawnCountOnSameColorWeighedByTheirDepth++;
                            allyPawnCountOnSameColorWeighedByTheirDepth - this.board.currentPosition[i][j].square.rank * 1.037;
                        }
                        else {
                            if (this.color === "white" && this.square.rank > 5 && this.square.file === 6 || 1) {
                                enemyPawnCountOnOnSameColorWeighedByTheirDepth + this.board.currentPosition[i][j].square.rank * 1.050;
                            }
                            else if (this.color === "black" && this.square.rank < 5) {
                                enemyPawnCountOnOnSameColorWeighedByTheirDepth + 1 + Math.abs(this.board.currentPosition[i][j].square.rank - 8) * 1.050;
                            }
                        }
                    }
                }
            }
        }
        if (enemyPawnCountOnOnSameColorWeighedByTheirDepth > 5 && enemyPawnCountOnOnSameColorWeighedByTheirDepth < 3.14) {
            return 3.2 + (this.getPossibleMoves().length * 0.1);
        }
        else if (enemyPawnCountOnOnSameColorWeighedByTheirDepth > 5) {
            return 3.14 + (this.getPossibleMoves().length * 0.1);
        }
        return 2.7 + (this.getPossibleMoves().length * 0.1);
    };
    return Bishop;
}(Piece_1.Piece));
exports.Bishop = Bishop;
