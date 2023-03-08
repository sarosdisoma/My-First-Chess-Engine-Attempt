"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(rank, file, board) {
        this.rank = rank;
        this.file = file;
        this.board = board;
    }
    Square.prototype.equals = function (position) {
        return (this.board.getPieceFromSquare(this));
    };
    return Square;
}());
exports.Square = Square;
