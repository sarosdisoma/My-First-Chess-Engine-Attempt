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
exports.Knight = void 0;
var Piece_1 = require("./Piece");
var Square_1 = require("../Square");
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, square, board) {
        var _this = _super.call(this, color, square) || this;
        _this.worth = 2.7;
        _this.board = board;
        return _this;
    }
    Knight.prototype.getType = function () {
        return "knight";
    };
    Knight.prototype.getPossibleMoves = function () {
        var possibleMoves = [];
        var currentPosition = this.square;
        var rankOffsets = [2, 1, -1, -2, -2, -1, 1, 2];
        var fileOffsets = [1, 2, 2, 1, -1, -2, -2, -1];
        for (var i = 0; i < rankOffsets.length; i++) {
            var rank = currentPosition.rank + rankOffsets[i];
            var file = currentPosition.file + fileOffsets[i];
            if (rank >= 0 && rank <= 7 && file >= 0 && file <= 7) {
                var square = this.board.getPieceFromSquare(new Square_1.Square(rank, file, this.board));
                if (square == null || square.color !== this.color) {
                    possibleMoves.push(new Square_1.Square(rank, file, this.board));
                }
            }
        }
        //this.worth = 2.7 + (possibleMoves.length * 0.0069);
        return possibleMoves;
    };
    return Knight;
}(Piece_1.Piece));
exports.Knight = Knight;
