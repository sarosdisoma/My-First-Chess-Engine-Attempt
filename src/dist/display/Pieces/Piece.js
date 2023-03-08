"use strict";
exports.__esModule = true;
exports.Piece = void 0;
var Piece = /** @class */ (function () {
    function Piece(color, square) {
        this.hasMoved = false;
        this.worth = 0;
        this.type = "";
        this.color = color;
        this.square = square;
    }
    Piece.prototype.getPosition = function () {
        return this.square;
    };
    Piece.prototype.setPosition = function (square) {
        this.square = square;
    };
    return Piece;
}());
exports.Piece = Piece;
