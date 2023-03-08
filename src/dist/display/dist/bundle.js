/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Pieces/Bishop.ts":
/*!**************************!*\
  !*** ./Pieces/Bishop.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bishop = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Pawn_1 = __webpack_require__(/*! ./Pawn */ "./Pieces/Pawn.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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
                            else {}
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


/***/ }),

/***/ "./Pieces/King.ts":
/*!************************!*\
  !*** ./Pieces/King.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.King = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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


/***/ }),

/***/ "./Pieces/Knight.ts":
/*!**************************!*\
  !*** ./Pieces/Knight.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Knight = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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


/***/ }),

/***/ "./Pieces/Pawn.ts":
/*!************************!*\
  !*** ./Pieces/Pawn.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pawn = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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


/***/ }),

/***/ "./Pieces/Piece.ts":
/*!*************************!*\
  !*** ./Pieces/Piece.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./Pieces/Queen.ts":
/*!*************************!*\
  !*** ./Pieces/Queen.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Queen = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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


/***/ }),

/***/ "./Pieces/Rook.ts":
/*!************************!*\
  !*** ./Pieces/Rook.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rook = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ../Square */ "./Square.ts");
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


/***/ }),

/***/ "./Square.ts":
/*!*******************!*\
  !*** ./Square.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./chessboard.ts":
/*!***********************!*\
  !*** ./chessboard.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChessBoard = void 0;
var Bishop_1 = __webpack_require__(/*! ./Pieces/Bishop */ "./Pieces/Bishop.ts");
var King_1 = __webpack_require__(/*! ./Pieces/King */ "./Pieces/King.ts");
var Knight_1 = __webpack_require__(/*! ./Pieces/Knight */ "./Pieces/Knight.ts");
var Pawn_1 = __webpack_require__(/*! ./Pieces/Pawn */ "./Pieces/Pawn.ts");
var Piece_1 = __webpack_require__(/*! ./Pieces/Piece */ "./Pieces/Piece.ts");
var Square_1 = __webpack_require__(/*! ./Square */ "./Square.ts");
var Queen_1 = __webpack_require__(/*! ./Pieces/Queen */ "./Pieces/Queen.ts");
var Rook_1 = __webpack_require__(/*! ./Pieces/Rook */ "./Pieces/Rook.ts");
var ChessBoard = /** @class */ (function () {
    function ChessBoard() {
        this.currentPosition = [];
        this.didLastMovedPawnMoveTwoSteps = false;
        this.lastMove = {
            piece: Piece_1.Piece,
            initialValueOfToSquare: Piece_1.Piece || null,
            from: Square_1.Square,
            to: Square_1.Square,
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
var board = new ChessBoard();
var count = 0;
var bCount = 0;
//board.getPossibleMoves("white");
//board.makeMove(new Square(1,1, board),new Square(3,1, board))
for (var i = 0; i < board.currentPosition.length; i++) {
    for (var j = 0; j < board.currentPosition[i].length; j++) {
        if (board.currentPosition[i][j]) {
            if (board.currentPosition[i][j].color === "white") {
                count += board.currentPosition[i][j].worth;
                console.log(board.currentPosition[i][j].worth, "added to white", (_a = board.currentPosition[i][j]) === null || _a === void 0 ? void 0 : _a.getType());
            }
            else if (board.currentPosition[i][j].color === "black") {
                console.log(board.currentPosition[i][j].worth, "added to black", (_b = board.currentPosition[i][j]) === null || _b === void 0 ? void 0 : _b.getType());
                bCount += board.currentPosition[i][j].worth;
            }
        }
    }
}
console.log(
//count, bCount
//board.getPieceFromSquare(new Square(6, 6, board))?.getPossibleMoves()
//board.makeMove( new Square (1,4, board), new Square (3,4, board)),
//board.makeMove( new Square (6,4, board), new Square (4,4, board))
);
//console.log(board.getPieceFromSquare(new Square(1,4, board)))


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var chessboard_1 = __webpack_require__(/*! ./chessboard */ "./chessboard.ts");
//console.log("k gjsndf")
var board = new chessboard_1.ChessBoard();
// Get the current position of the board
var currentPosition = board.currentPosition;
// Define symbols for each piece
var pieceSymbols = {
    whitepawn: "♙",
    whiterook: "♖",
    whiteknight: "♘",
    whitebishop: "♗",
    whitequeen: "♕",
    whiteking: "♔",
    blackpawn: "♟",
    blackrook: "♜",
    blackknight: "♞",
    blackbishop: "♝",
    blackqueen: "♛",
    blackking: "♚",
};
// Loop through each square and create a td element to display the piece
for (var i = 0; i < 8; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 8; j++) {
        var td = document.createElement("td");
        console.log(tr, td);
        if ((i + j) % 2 === 0) {
            td.classList.add("white");
        }
        else {
            td.classList.add("black");
        }
        var piece = currentPosition[i][j];
        if (piece) {
            // Get the symbol for the piece
            var color = piece.color === "white" ? "white_" : "black_";
            var type = piece.type;
            var symbol = pieceSymbols[color + type];
            td.innerText = symbol;
        }
        tr.appendChild(td);
    }
    document.querySelector("tbody").appendChild(tr);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMEJBQTBCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQsNEJBQTRCLG9DQUFvQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQ0FBa0M7QUFDbEQsb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLHFDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVzc2FpLy4vUGllY2VzL0Jpc2hvcC50cyIsIndlYnBhY2s6Ly9jaGVzc2FpLy4vUGllY2VzL0tpbmcudHMiLCJ3ZWJwYWNrOi8vY2hlc3NhaS8uL1BpZWNlcy9LbmlnaHQudHMiLCJ3ZWJwYWNrOi8vY2hlc3NhaS8uL1BpZWNlcy9QYXduLnRzIiwid2VicGFjazovL2NoZXNzYWkvLi9QaWVjZXMvUGllY2UudHMiLCJ3ZWJwYWNrOi8vY2hlc3NhaS8uL1BpZWNlcy9RdWVlbi50cyIsIndlYnBhY2s6Ly9jaGVzc2FpLy4vUGllY2VzL1Jvb2sudHMiLCJ3ZWJwYWNrOi8vY2hlc3NhaS8uL1NxdWFyZS50cyIsIndlYnBhY2s6Ly9jaGVzc2FpLy4vY2hlc3Nib2FyZC50cyIsIndlYnBhY2s6Ly9jaGVzc2FpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZXNzYWkvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJpc2hvcCA9IHZvaWQgMDtcbnZhciBQaWVjZV8xID0gcmVxdWlyZShcIi4vUGllY2VcIik7XG52YXIgUGF3bl8xID0gcmVxdWlyZShcIi4vUGF3blwiKTtcbnZhciBTcXVhcmVfMSA9IHJlcXVpcmUoXCIuLi9TcXVhcmVcIik7XG52YXIgQmlzaG9wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCaXNob3AsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmlzaG9wKGNvbG9yLCBzcXVhcmUsIGJvYXJkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbG9yLCBzcXVhcmUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndvcnRoID0gMy41O1xuICAgICAgICBfdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEJpc2hvcC5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiYmlzaG9wXCI7XG4gICAgfTtcbiAgICBCaXNob3AucHJvdG90eXBlLmdldFBvc3NpYmxlTW92ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3NzaWJsZU1vdmVzID0gW107XG4gICAgICAgIHZhciBjdXJyZW50UmFuayA9IHRoaXMuc3F1YXJlLnJhbms7XG4gICAgICAgIHZhciBjdXJyZW50RmlsZSA9IHRoaXMuc3F1YXJlLmZpbGU7XG4gICAgICAgIGZvciAodmFyIHIgPSBjdXJyZW50UmFuayArIDEsIGYgPSBjdXJyZW50RmlsZSArIDE7IHIgPD0gNyAmJiBmIDw9IDc7IHIrKywgZisrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZpbGUgPCA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rIDw9IDcgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBTcXVhcmVfMS5TcXVhcmUociwgZiwgdGhpcy5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUocG9zKTtcbiAgICAgICAgICAgICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLmNvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgciA9IGN1cnJlbnRSYW5rIC0gMSwgZiA9IGN1cnJlbnRGaWxlICsgMTsgciA+PSAwICYmIGYgPD0gNzsgci0tLCBmKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RmlsZSA8IDcgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZSA+PSAwICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPD0gNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rID49IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IFNxdWFyZV8xLlNxdWFyZShyLCBmLCB0aGlzLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB2YXIgcGllY2UgPSB0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZShwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciByID0gY3VycmVudFJhbmsgLSAxLCBmID0gY3VycmVudEZpbGUgLSAxOyByID49IDAgJiYgZiA+PSAwOyByLS0sIGYtLSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zcXVhcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHIgPSBjdXJyZW50UmFuayArIDEsIGYgPSBjdXJyZW50RmlsZSAtIDE7IHIgPD0gNyAmJiBmID49IDA7IHIrKywgZi0tKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZpbGUgPD0gNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy53b3J0aCA9IDMgKyAocG9zc2libGVNb3Zlcy5sZW5ndGggKiAwLjAwNjkpXG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzO1xuICAgIH07XG4gICAgQmlzaG9wLnByb3RvdHlwZS5kZXRlcm1pbmVXb3J0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFsbHlQYXduQ291bnRPblNhbWVDb2xvcldlaWdoZWRCeVRoZWlyRGVwdGggPSAwO1xuICAgICAgICB2YXIgZW5lbXlQYXduQ291bnRPbk9uU2FtZUNvbG9yV2VpZ2hlZEJ5VGhlaXJEZXB0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5jdXJyZW50UG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5ib2FyZC5jdXJyZW50UG9zaXRpb25baV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5jdXJyZW50UG9zaXRpb25baV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdIGluc3RhbmNlb2YgUGF3bl8xLlBhd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmN1cnJlbnRQb3NpdGlvbltpXVtqXS5jb2xvciA9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxseVBhd25Db3VudE9uU2FtZUNvbG9yV2VpZ2hlZEJ5VGhlaXJEZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbHlQYXduQ291bnRPblNhbWVDb2xvcldlaWdoZWRCeVRoZWlyRGVwdGggLSB0aGlzLmJvYXJkLmN1cnJlbnRQb3NpdGlvbltpXVtqXS5zcXVhcmUucmFuayAqIDEuMDM3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IgPT09IFwid2hpdGVcIiAmJiB0aGlzLnNxdWFyZS5yYW5rID4gNSAmJiB0aGlzLnNxdWFyZS5maWxlID09PSA2IHx8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlQYXduQ291bnRPbk9uU2FtZUNvbG9yV2VpZ2hlZEJ5VGhlaXJEZXB0aCArIHRoaXMuYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdLnNxdWFyZS5yYW5rICogMS4wNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY29sb3IgPT09IFwiYmxhY2tcIiAmJiB0aGlzLnNxdWFyZS5yYW5rIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteVBhd25Db3VudE9uT25TYW1lQ29sb3JXZWlnaGVkQnlUaGVpckRlcHRoICsgMSArIE1hdGguYWJzKHRoaXMuYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdLnNxdWFyZS5yYW5rIC0gOCkgKiAxLjA1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZW15UGF3bkNvdW50T25PblNhbWVDb2xvcldlaWdoZWRCeVRoZWlyRGVwdGggPiA1ICYmIGVuZW15UGF3bkNvdW50T25PblNhbWVDb2xvcldlaWdoZWRCeVRoZWlyRGVwdGggPCAzLjE0KSB7XG4gICAgICAgICAgICByZXR1cm4gMy4yICsgKHRoaXMuZ2V0UG9zc2libGVNb3ZlcygpLmxlbmd0aCAqIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5lbXlQYXduQ291bnRPbk9uU2FtZUNvbG9yV2VpZ2hlZEJ5VGhlaXJEZXB0aCA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiAzLjE0ICsgKHRoaXMuZ2V0UG9zc2libGVNb3ZlcygpLmxlbmd0aCAqIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDIuNyArICh0aGlzLmdldFBvc3NpYmxlTW92ZXMoKS5sZW5ndGggKiAwLjEpO1xuICAgIH07XG4gICAgcmV0dXJuIEJpc2hvcDtcbn0oUGllY2VfMS5QaWVjZSkpO1xuZXhwb3J0cy5CaXNob3AgPSBCaXNob3A7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLktpbmcgPSB2b2lkIDA7XG52YXIgUGllY2VfMSA9IHJlcXVpcmUoXCIuL1BpZWNlXCIpO1xudmFyIFNxdWFyZV8xID0gcmVxdWlyZShcIi4uL1NxdWFyZVwiKTtcbnZhciBLaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhLaW5nLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEtpbmcoY29sb3IsIHNxdWFyZSwgYm9hcmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29sb3IsIHNxdWFyZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud29ydGggPSAwO1xuICAgICAgICBfdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEtpbmcucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcImtpbmdcIjtcbiAgICB9O1xuICAgIEtpbmcucHJvdG90eXBlLmdldFBvc3NpYmxlTW92ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3NzaWJsZU1vdmVzID0gW107XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzO1xuICAgIH07XG4gICAgS2luZy5wcm90b3R5cGUuZ2V0TGVnYWxNb3ZlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gW107XG4gICAgICAgIHZhciByYW5rID0gdGhpcy5zcXVhcmUucmFuaztcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLnNxdWFyZS5maWxlO1xuICAgICAgICAvLyBDaGVjayB0aGUgZWlnaHQgc3F1YXJlcyBpbW1lZGlhdGVseSBzdXJyb3VuZGluZyB0aGUga2luZ1xuICAgICAgICB2YXIgc3F1YXJlc1RvQ2hlY2sgPSBbXG4gICAgICAgICAgICBuZXcgU3F1YXJlXzEuU3F1YXJlKHJhbmsgKyAxLCBmaWxlLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgICAgIG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuayAtIDEsIGZpbGUsIHRoaXMuYm9hcmQpLFxuICAgICAgICAgICAgbmV3IFNxdWFyZV8xLlNxdWFyZShyYW5rLCBmaWxlICsgMSwgdGhpcy5ib2FyZCksXG4gICAgICAgICAgICBuZXcgU3F1YXJlXzEuU3F1YXJlKHJhbmssIGZpbGUgLSAxLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgICAgIG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuayArIDEsIGZpbGUgKyAxLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgICAgIG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuayArIDEsIGZpbGUgLSAxLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgICAgIG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuayAtIDEsIGZpbGUgKyAxLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgICAgIG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuayAtIDEsIGZpbGUgLSAxLCB0aGlzLmJvYXJkKSxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBzcXVhcmVzVG9DaGVja18xID0gc3F1YXJlc1RvQ2hlY2s7IF9pIDwgc3F1YXJlc1RvQ2hlY2tfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzcXVhcmUgPSBzcXVhcmVzVG9DaGVja18xW19pXTtcbiAgICAgICAgICAgIGlmIChzcXVhcmUucmFuayA8IDAgfHxcbiAgICAgICAgICAgICAgICBzcXVhcmUucmFuayA+IDcgfHxcbiAgICAgICAgICAgICAgICBzcXVhcmUuZmlsZSA+IDcgfHxcbiAgICAgICAgICAgICAgICBzcXVhcmUuZmlsZSA8IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwaWVjZU9uU3F1YXJlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUoc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghcGllY2VPblNxdWFyZSB8fCBwaWVjZU9uU3F1YXJlLmNvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHNxdWFyZSBpcyBlbXB0eSBvciBjb250YWlucyBhbiBvcHBvbmVudCdzIHBpZWNlXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciBjYXN0bGluZ1xuICAgICAgICBpZiAoIXRoaXMuaGFzTW92ZWQpIHtcbiAgICAgICAgICAgIC8vIFRoZSBraW5nIGhhcyBub3QgbW92ZWQgeWV0XG4gICAgICAgICAgICB2YXIga2luZ3NpZGVSb29rID0gdGhpcy5ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUobmV3IFNxdWFyZV8xLlNxdWFyZSh0aGlzLmNvbG9yID09PSBcIndoaXRlXCIgPyA3IDogMCwgNywgdGhpcy5ib2FyZCkpO1xuICAgICAgICAgICAgdmFyIHF1ZWVuc2lkZVJvb2sgPSB0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZShuZXcgU3F1YXJlXzEuU3F1YXJlKHRoaXMuY29sb3IgPT09IFwid2hpdGVcIiA/IDcgOiAwLCA3LCB0aGlzLmJvYXJkKSk7XG4gICAgICAgICAgICBpZiAoa2luZ3NpZGVSb29rICYmXG4gICAgICAgICAgICAgICAgIWtpbmdzaWRlUm9vay5oYXNNb3ZlZCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmJvYXJkLmlzU3F1YXJlQXR0YWNrZWQobmV3IFNxdWFyZV8xLlNxdWFyZShyYW5rLCBmaWxlICsgMSwgdGhpcy5ib2FyZCksIHRoaXMuY29sb3IpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuYm9hcmQuaXNTcXVhcmVBdHRhY2tlZChuZXcgU3F1YXJlXzEuU3F1YXJlKHJhbmssIGZpbGUgKyAyLCB0aGlzLmJvYXJkKSwgdGhpcy5jb2xvcikpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUga2luZ3NpZGUgcm9vayBoYXMgbm90IG1vdmVkIHlldCBhbmQgdGhlIHNxdWFyZXMgYmV0d2VlbiB0aGUga2luZyBhbmQgdGhlIHJvb2sgYXJlIG5vdCBhdHRhY2tlZCBieSB0aGUgb3Bwb25lbnRcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuaywgZmlsZSArIDIsIHRoaXMuYm9hcmQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChxdWVlbnNpZGVSb29rICYmXG4gICAgICAgICAgICAgICAgIXF1ZWVuc2lkZVJvb2suaGFzTW92ZWQgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5ib2FyZC5pc1NxdWFyZUF0dGFja2VkKG5ldyBTcXVhcmVfMS5TcXVhcmUocmFuaywgZmlsZSAtIDEsIHRoaXMuYm9hcmQpLCB0aGlzLmNvbG9yKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmJvYXJkLmlzU3F1YXJlQXR0YWNrZWQobmV3IFNxdWFyZV8xLlNxdWFyZShyYW5rLCBmaWxlIC0gMiwgdGhpcy5ib2FyZCksIHRoaXMuY29sb3IpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuYm9hcmQuaXNTcXVhcmVBdHRhY2tlZChuZXcgU3F1YXJlXzEuU3F1YXJlKHJhbmssIGZpbGUgLSAzLCB0aGlzLmJvYXJkKSwgdGhpcy5jb2xvcikpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcXVlZW5zaWRlIHJvb2sgaGFzIG5vdCBtb3ZlZCB5ZXQgYW5kIHRoZSBzcXVhcmVzIGJldHdlZW4gdGhlIGtpbmcgYW5kIHRoZSByb29rIGFyZSBub3QgYXR0YWNrZWQgYnkgdGhlIG9wcG9uZW50XG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgU3F1YXJlXzEuU3F1YXJlKHJhbmssIGZpbGUgLSAyLCB0aGlzLmJvYXJkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH07XG4gICAgcmV0dXJuIEtpbmc7XG59KFBpZWNlXzEuUGllY2UpKTtcbmV4cG9ydHMuS2luZyA9IEtpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLktuaWdodCA9IHZvaWQgMDtcbnZhciBQaWVjZV8xID0gcmVxdWlyZShcIi4vUGllY2VcIik7XG52YXIgU3F1YXJlXzEgPSByZXF1aXJlKFwiLi4vU3F1YXJlXCIpO1xudmFyIEtuaWdodCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoS25pZ2h0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEtuaWdodChjb2xvciwgc3F1YXJlLCBib2FyZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb2xvciwgc3F1YXJlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53b3J0aCA9IDIuNztcbiAgICAgICAgX3RoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBLbmlnaHQucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcImtuaWdodFwiO1xuICAgIH07XG4gICAgS25pZ2h0LnByb3RvdHlwZS5nZXRQb3NzaWJsZU1vdmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zcXVhcmU7XG4gICAgICAgIHZhciByYW5rT2Zmc2V0cyA9IFsyLCAxLCAtMSwgLTIsIC0yLCAtMSwgMSwgMl07XG4gICAgICAgIHZhciBmaWxlT2Zmc2V0cyA9IFsxLCAyLCAyLCAxLCAtMSwgLTIsIC0yLCAtMV07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFua09mZnNldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYW5rID0gY3VycmVudFBvc2l0aW9uLnJhbmsgKyByYW5rT2Zmc2V0c1tpXTtcbiAgICAgICAgICAgIHZhciBmaWxlID0gY3VycmVudFBvc2l0aW9uLmZpbGUgKyBmaWxlT2Zmc2V0c1tpXTtcbiAgICAgICAgICAgIGlmIChyYW5rID49IDAgJiYgcmFuayA8PSA3ICYmIGZpbGUgPj0gMCAmJiBmaWxlIDw9IDcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3F1YXJlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUobmV3IFNxdWFyZV8xLlNxdWFyZShyYW5rLCBmaWxlLCB0aGlzLmJvYXJkKSk7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZSA9PSBudWxsIHx8IHNxdWFyZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gobmV3IFNxdWFyZV8xLlNxdWFyZShyYW5rLCBmaWxlLCB0aGlzLmJvYXJkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy53b3J0aCA9IDIuNyArIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAqIDAuMDA2OSk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzO1xuICAgIH07XG4gICAgcmV0dXJuIEtuaWdodDtcbn0oUGllY2VfMS5QaWVjZSkpO1xuZXhwb3J0cy5LbmlnaHQgPSBLbmlnaHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhd24gPSB2b2lkIDA7XG52YXIgUGllY2VfMSA9IHJlcXVpcmUoXCIuL1BpZWNlXCIpO1xudmFyIFNxdWFyZV8xID0gcmVxdWlyZShcIi4uL1NxdWFyZVwiKTtcbnZhciBQYXduID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYXduLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhd24oY29sb3IsIHNxdWFyZSwgYm9hcmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29sb3IsIHNxdWFyZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud29ydGggPSAxLjE7IC8vICsgKCh0aGlzLmNvbG9yID09PSBcImJsYWNrXCIgPyB0aGlzLnNxdWFyZS5yYW5rIC0gMSA6IE1hdGguYWJzKDAgLSB0aGlzLnNxdWFyZS5yYW5rICsgMSkgKSAqIDAuMDA2OSk7XG4gICAgICAgIF90aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUGF3bi5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwicGF3blwiO1xuICAgIH07XG4gICAgUGF3bi5wcm90b3R5cGUuZ2V0UG9zc2libGVNb3ZlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb24gdGhlIHBhd24gbW92ZXMgYmFzZWQgb24gaXRzIGNvbG9yXG4gICAgICAgIHZhciBtb3ZlRGlyZWN0aW9uID0gdGhpcy5jb2xvciA9PT0gXCJ3aGl0ZVwiID8gLTEgOiAxO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGF3biBjYW4gbW92ZSBvbmUgb3IgdHdvIHNwYWNlcyBmb3J3YXJkXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRW1wdHkodGhpcy5zcXVhcmUucmFuayArIG1vdmVEaXJlY3Rpb24sIHRoaXMuc3F1YXJlLmZpbGUpKSB7XG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gobmV3IFNxdWFyZV8xLlNxdWFyZSh0aGlzLnNxdWFyZS5yYW5rICsgbW92ZURpcmVjdGlvbiwgdGhpcy5zcXVhcmUuZmlsZSwgdGhpcy5ib2FyZCkpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHBhd24gY2FuIG1vdmUgdHdvIHNwYWNlcyBmb3J3YXJkIGZyb20gaXRzIHN0YXJ0aW5nIHNxdWFyZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc01vdmVkICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0VtcHR5KHRoaXMuc3F1YXJlLnJhbmsgKyAyICogbW92ZURpcmVjdGlvbiwgdGhpcy5zcXVhcmUuZmlsZSkpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gobmV3IFNxdWFyZV8xLlNxdWFyZSh0aGlzLnNxdWFyZS5yYW5rICsgMiAqIG1vdmVEaXJlY3Rpb24sIHRoaXMuc3F1YXJlLmZpbGUsIHRoaXMuYm9hcmQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGF3biBjYW4gY2FwdHVyZSBhIHBpZWNlIGRpYWdvbmFsbHkgdG8gaXRzIGxlZnRcbiAgICAgICAgLy8gc3F1YXJlIG9mIHBhd24gdG8gaXRzIGxlZnQgPT5cbiAgICAgICAgdmFyIHNxdWFyZVRvSXRzTW92ZURpcmVjdGlvbkRpYWdvbmFsbHkgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHRoaXMuc3F1YXJlLnJhbmsgKyBtb3ZlRGlyZWN0aW9uLCB0aGlzLnNxdWFyZS5maWxlIC0gMSwgdGhpcy5ib2FyZCk7XG4gICAgICAgIHNxdWFyZVRvSXRzTW92ZURpcmVjdGlvbkRpYWdvbmFsbHkucmFuayA9XG4gICAgICAgICAgICBzcXVhcmVUb0l0c01vdmVEaXJlY3Rpb25EaWFnb25hbGx5LnJhbmsgKyBtb3ZlRGlyZWN0aW9uO1xuICAgICAgICBzcXVhcmVUb0l0c01vdmVEaXJlY3Rpb25EaWFnb25hbGx5LmZpbGUgPVxuICAgICAgICAgICAgc3F1YXJlVG9JdHNNb3ZlRGlyZWN0aW9uRGlhZ29uYWxseS5maWxlIC0gMTtcbiAgICAgICAgLypjb25zdCBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHNxdWFyZVRvSXRzTW92ZURpcmVjdGlvbkRpYWdvbmFsbHkpO1xuICAgIGlmIChwaWVjZSAhPT0gbnVsbCAmJiBwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICovXG4gICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHNxdWFyZVRvSXRzTW92ZURpcmVjdGlvbkRpYWdvbmFsbHkpO1xuICAgICAgICBpZiAocGllY2UgJiYgcGllY2UuY29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChzcXVhcmVUb0l0c01vdmVEaXJlY3Rpb25EaWFnb25hbGx5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGF3biBjYW4gY2FwdHVyZSBhIHBpZWNlIGRpYWdvbmFsbHkgdG8gaXRzIHJpZ2h0XG4gICAgICAgIHNxdWFyZVRvSXRzTW92ZURpcmVjdGlvbkRpYWdvbmFsbHkuZmlsZSA9ICsyO1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5jb2xvck9mUGllY2VPblNxdWFyZShzcXVhcmVUb0l0c01vdmVEaXJlY3Rpb25EaWFnb25hbGx5KSAhPT1cbiAgICAgICAgICAgIHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChzcXVhcmVUb0l0c01vdmVEaXJlY3Rpb25EaWFnb25hbGx5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBmb3IgZW4gcGFzc2FudCBtb3Zlc1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5sYXN0TW92ZWRQYXduICYmIHRoaXMuYm9hcmQuZGlkTGFzdE1vdmVkUGF3bk1vdmVUd29TdGVwcykge1xuICAgICAgICAgICAgdmFyIGxhc3RNb3ZlZFBhd24gPSB0aGlzLmJvYXJkLmxhc3RNb3ZlZFBhd247XG4gICAgICAgICAgICB2YXIgbGFzdE1vdmVkUGF3bkNvbG9yID0gbGFzdE1vdmVkUGF3bi5jb2xvcjtcbiAgICAgICAgICAgIHZhciBsYXN0TW92ZWRQYXduUmFuayA9IHRoaXMuYm9hcmQubGFzdE1vdmVkUGF3bi5zcXVhcmUucmFuaztcbiAgICAgICAgICAgIHZhciBmaWxlT0ZMYXN0TW92ZWRQYXduID0gdGhpcy5ib2FyZC5sYXN0TW92ZWRQYXduLnNxdWFyZS5maWxlO1xuICAgICAgICAgICAgaWYgKGxhc3RNb3ZlZFBhd24uY29sb3IgPT09IFwid2hpdGVcIikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydGluZ1Bvc2l0aW9uT2ZMYXN0TW92ZWRQYXduID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RNb3ZlZFBhd24uY29sb3IgPT09IFwiYmxhY2tcIikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydGluZ1Bvc2l0aW9uT2ZMYXN0TW92ZWRQYXduID0gNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydGluZ1Bvc2l0aW9uT2ZMYXN0TW92ZWRQYXduID0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNxdWFyZS5maWxlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3F1YXJlLnJhbmsgPT09IGxhc3RNb3ZlZFBhd25SYW5rICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3F1YXJlLmZpbGUgPT09IGZpbGVPRkxhc3RNb3ZlZFBhd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IgIT09IGxhc3RNb3ZlZFBhd25Db2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHRoaXMuYm9hcmQuY29vcmRpbmF0ZVRvU3F1YXJlKHRoaXMuc3F1YXJlLnJhbmsgKyBtb3ZlRGlyZWN0aW9uLCB0aGlzLnNxdWFyZS5maWxlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGF3biBjYW4gY2FwdHVyZSBlbiBwYXNzYW50IHRvIHRoZSByaWdodFxuICAgICAgICAgICAgZmlsZU9GTGFzdE1vdmVkUGF3biA9IGZpbGVPRkxhc3RNb3ZlZFBhd24gKyAyO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3F1YXJlLmZpbGUgIT09IDcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcXVhcmUucmFuayA9PT0gbGFzdE1vdmVkUGF3blJhbmsgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcXVhcmUuZmlsZSA9PT0gZmlsZU9GTGFzdE1vdmVkUGF3bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvciAhPT0gbGFzdE1vdmVkUGF3bkNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2godGhpcy5ib2FyZC5jb29yZGluYXRlVG9TcXVhcmUodGhpcy5zcXVhcmUucmFuayArIG1vdmVEaXJlY3Rpb24sIHRoaXMuc3F1YXJlLmZpbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3ZlcztcbiAgICB9O1xuICAgIHJldHVybiBQYXduO1xufShQaWVjZV8xLlBpZWNlKSk7XG5leHBvcnRzLlBhd24gPSBQYXduO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBpZWNlID0gdm9pZCAwO1xudmFyIFBpZWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBpZWNlKGNvbG9yLCBzcXVhcmUpIHtcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndvcnRoID0gMDtcbiAgICAgICAgdGhpcy50eXBlID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNxdWFyZSA9IHNxdWFyZTtcbiAgICB9XG4gICAgUGllY2UucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmU7XG4gICAgfTtcbiAgICBQaWVjZS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoc3F1YXJlKSB7XG4gICAgICAgIHRoaXMuc3F1YXJlID0gc3F1YXJlO1xuICAgIH07XG4gICAgcmV0dXJuIFBpZWNlO1xufSgpKTtcbmV4cG9ydHMuUGllY2UgPSBQaWVjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUXVlZW4gPSB2b2lkIDA7XG52YXIgUGllY2VfMSA9IHJlcXVpcmUoXCIuL1BpZWNlXCIpO1xudmFyIFNxdWFyZV8xID0gcmVxdWlyZShcIi4uL1NxdWFyZVwiKTtcbnZhciBRdWVlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVlZW4sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVlZW4oY29sb3IsIHNxdWFyZSwgYm9hcmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29sb3IsIHNxdWFyZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud29ydGggPSAxMDtcbiAgICAgICAgX3RoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBRdWVlbi5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwicXVlZW5cIjtcbiAgICB9O1xuICAgIFF1ZWVuLnByb3RvdHlwZS5nZXRQb3NzaWJsZU1vdmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFJhbmsgPSB0aGlzLnNxdWFyZS5yYW5rO1xuICAgICAgICB2YXIgY3VycmVudEZpbGUgPSB0aGlzLnNxdWFyZS5maWxlO1xuICAgICAgICAvLyBFeHBsb3JlIHVwcGVyLXJpZ2h0IGRpYWdvbmFsXG4gICAgICAgIGZvciAodmFyIHIgPSBjdXJyZW50UmFuayArIDEsIGYgPSBjdXJyZW50RmlsZSArIDE7IHIgPj0gNyAmJiBmIDw9IDc7IHItLSwgZisrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZpbGUgPCA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rIDw9IDcgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBTcXVhcmVfMS5TcXVhcmUociwgZiwgdGhpcy5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUocG9zKTtcbiAgICAgICAgICAgICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLmNvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXhwbG9yZSBsb3dlci1yaWdodCBkaWFnb25hbFxuICAgICAgICBmb3IgKHZhciByID0gY3VycmVudFJhbmsgKyAxLCBmID0gY3VycmVudEZpbGUgKyAxOyByIDw9IDcgJiYgZiA8PSA3OyByKyssIGYrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEV4cGxvcmUgbG93ZXItbGVmdCBkaWFnb25hbFxuICAgICAgICBmb3IgKHZhciByID0gY3VycmVudFJhbmsgKyAxLCBmID0gY3VycmVudEZpbGUgLSAxOyByIDw9IDcgJiYgZiA+PSAwOyByKyssIGYtLSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEV4cGxvcmUgdXBwZXItbGVmdCBkaWFnb25hbFxuICAgICAgICBmb3IgKHZhciByID0gY3VycmVudFJhbmsgLSAxLCBmID0gY3VycmVudEZpbGUgLSAxOyByID49IDAgJiYgZiA+PSAwOyByLS0sIGYtLSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEV4cGxvcmUgbW92ZXMgZG93blxuICAgICAgICBmb3IgKHZhciByID0gY3VycmVudFJhbmsgKyAxOyByID49IDg7IHItLSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDAgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuayA8PSA3ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKHIsIGN1cnJlbnRGaWxlLCB0aGlzLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB2YXIgcGllY2UgPSB0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZShwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFeHBsb3JlIG1vdmVzIHVwXG4gICAgICAgIGZvciAodmFyIHIgPSBjdXJyZW50UmFuayArIDE7IHIgPD0gNzsgcisrKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gbmV3IFNxdWFyZV8xLlNxdWFyZShyLCBjdXJyZW50RmlsZSwgdGhpcy5ib2FyZCk7XG4gICAgICAgICAgICB2YXIgcGllY2UgPSB0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZShwb3MpO1xuICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSYW5rIDw9IDcgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJhbmsgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0V4cGxvcmUgbW92ZXMgdG93YXJkIGEgZmlsZVxuICAgICAgICBmb3IgKHZhciBmID0gY3VycmVudEZpbGUgKyAxOyBmID49IDg7IGYtLSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IFNxdWFyZV8xLlNxdWFyZShjdXJyZW50UmFuaywgY3VycmVudEZpbGUsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vRXhwbG9yZSBtb3ZlcyB0b3dhcmRzIGggZmlsZVxuICAgICAgICBmb3IgKHZhciBmID0gY3VycmVudEZpbGUgKyAxOyBmIDw9IDg7IGYrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlIDwgNyAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlID49IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbmV3IFNxdWFyZV8xLlNxdWFyZShjdXJyZW50UmFuaywgY3VycmVudEZpbGUsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy53b3J0aCA9IDEwICsgKHBvc3NpYmxlTW92ZXMubGVuZ3RoICogMC4wMDY5KVxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3ZlcztcbiAgICB9O1xuICAgIHJldHVybiBRdWVlbjtcbn0oUGllY2VfMS5QaWVjZSkpO1xuZXhwb3J0cy5RdWVlbiA9IFF1ZWVuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Sb29rID0gdm9pZCAwO1xudmFyIFBpZWNlXzEgPSByZXF1aXJlKFwiLi9QaWVjZVwiKTtcbnZhciBTcXVhcmVfMSA9IHJlcXVpcmUoXCIuLi9TcXVhcmVcIik7XG52YXIgUm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUm9vaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSb29rKGNvbG9yLCBzcXVhcmUsIGJvYXJkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbG9yLCBzcXVhcmUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndvcnRoID0gNTtcbiAgICAgICAgX3RoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSb29rLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJyb29rXCI7XG4gICAgfTtcbiAgICBSb29rLnByb3RvdHlwZS5nZXRQb3NzaWJsZU1vdmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFJhbmsgPSB0aGlzLnNxdWFyZS5yYW5rO1xuICAgICAgICB2YXIgY3VycmVudEZpbGUgPSB0aGlzLnNxdWFyZS5maWxlO1xuICAgICAgICAvLyBFeHBsb3JlIG1vdmVzIGRvd25cbiAgICAgICAgZm9yICh2YXIgciA9IGN1cnJlbnRSYW5rICsgMTsgciA+PSA4OyByLS0pIHtcbiAgICAgICAgICAgIGlmIChyIDw9IDcgJiYgciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBTcXVhcmVfMS5TcXVhcmUociwgY3VycmVudEZpbGUsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEV4cGxvcmUgbW92ZXMgdXBcbiAgICAgICAgZm9yICh2YXIgciA9IGN1cnJlbnRSYW5rICsgMTsgciA8PSA3OyByKyspIHtcbiAgICAgICAgICAgIGlmIChyIDw9IDcgJiYgciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBTcXVhcmVfMS5TcXVhcmUociwgY3VycmVudEZpbGUsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vRXhwbG9yZSBtb3ZlcyB0b3dhcmQgYSBmaWxlXG4gICAgICAgIGlmIChjdXJyZW50RmlsZSA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGYgPSBjdXJyZW50RmlsZSAtIDE7IGYgPj0gNzsgZi0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGYgPD0gNyAmJiBmID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBTcXVhcmVfMS5TcXVhcmUoY3VycmVudFJhbmssIGYsIHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGllY2UgPSB0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZShwb3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vRXhwbG9yZSBtb3ZlcyB0b3dhcmRzIGggZmlsZVxuICAgICAgICBpZiAoY3VycmVudEZpbGUgPCA3KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmID0gY3VycmVudEZpbGUgKyAxOyBmIDw9IDg7IGYrKykge1xuICAgICAgICAgICAgICAgIGlmIChmIDw9IDcgJiYgZiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBuZXcgU3F1YXJlXzEuU3F1YXJlKGN1cnJlbnRSYW5rLCBjdXJyZW50RmlsZSwgdGhpcy5ib2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VGcm9tU3F1YXJlKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLmNvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy53b3J0aCA9IDUgKyBwb3NzaWJsZU1vdmVzLmxlbmd0aCAqIDAuMDA2OVxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3ZlcztcbiAgICB9O1xuICAgIHJldHVybiBSb29rO1xufShQaWVjZV8xLlBpZWNlKSk7XG5leHBvcnRzLlJvb2sgPSBSb29rO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNxdWFyZSA9IHZvaWQgMDtcbnZhciBTcXVhcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3F1YXJlKHJhbmssIGZpbGUsIGJvYXJkKSB7XG4gICAgICAgIHRoaXMucmFuayA9IHJhbms7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB9XG4gICAgU3F1YXJlLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJvYXJkLmdldFBpZWNlRnJvbVNxdWFyZSh0aGlzKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3F1YXJlO1xufSgpKTtcbmV4cG9ydHMuU3F1YXJlID0gU3F1YXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaGVzc0JvYXJkID0gdm9pZCAwO1xudmFyIEJpc2hvcF8xID0gcmVxdWlyZShcIi4vUGllY2VzL0Jpc2hvcFwiKTtcbnZhciBLaW5nXzEgPSByZXF1aXJlKFwiLi9QaWVjZXMvS2luZ1wiKTtcbnZhciBLbmlnaHRfMSA9IHJlcXVpcmUoXCIuL1BpZWNlcy9LbmlnaHRcIik7XG52YXIgUGF3bl8xID0gcmVxdWlyZShcIi4vUGllY2VzL1Bhd25cIik7XG52YXIgUGllY2VfMSA9IHJlcXVpcmUoXCIuL1BpZWNlcy9QaWVjZVwiKTtcbnZhciBTcXVhcmVfMSA9IHJlcXVpcmUoXCIuL1NxdWFyZVwiKTtcbnZhciBRdWVlbl8xID0gcmVxdWlyZShcIi4vUGllY2VzL1F1ZWVuXCIpO1xudmFyIFJvb2tfMSA9IHJlcXVpcmUoXCIuL1BpZWNlcy9Sb29rXCIpO1xudmFyIENoZXNzQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hlc3NCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBbXTtcbiAgICAgICAgdGhpcy5kaWRMYXN0TW92ZWRQYXduTW92ZVR3b1N0ZXBzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdE1vdmUgPSB7XG4gICAgICAgICAgICBwaWVjZTogUGllY2VfMS5QaWVjZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZU9mVG9TcXVhcmU6IFBpZWNlXzEuUGllY2UgfHwgbnVsbCxcbiAgICAgICAgICAgIGZyb206IFNxdWFyZV8xLlNxdWFyZSxcbiAgICAgICAgICAgIHRvOiBTcXVhcmVfMS5TcXVhcmUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGFzdE1vdmVkUGF3biA9IG51bGw7XG4gICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgcm93LnB1c2gobmV3IFJvb2tfMS5Sb29rKFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCAwLCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgS25pZ2h0XzEuS25pZ2h0KFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCAxLCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgQmlzaG9wXzEuQmlzaG9wKFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCAyLCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgUXVlZW5fMS5RdWVlbihcImJsYWNrXCIsIG5ldyBTcXVhcmVfMS5TcXVhcmUoMCwgMywgdGhpcyksIHRoaXMpKTtcbiAgICAgICAgcm93LnB1c2gobmV3IEtpbmdfMS5LaW5nKFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCA0LCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgQmlzaG9wXzEuQmlzaG9wKFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCA1LCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgS25pZ2h0XzEuS25pZ2h0KFwiYmxhY2tcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSgwLCA2LCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgUm9va18xLlJvb2soXCJibGFja1wiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDAsIDcsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnB1c2gocm93KTtcbiAgICAgICAgcm93ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICByb3cucHVzaChuZXcgUGF3bl8xLlBhd24oXCJibGFja1wiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDEsIGksIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ucHVzaChyb3cpO1xuICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbi5wdXNoKHJvdyk7XG4gICAgICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgcm93LnB1c2gobmV3IFBhd25fMS5QYXduKFwid2hpdGVcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSg2LCBpLCB0aGlzKSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnB1c2gocm93KTtcbiAgICAgICAgcm93ID0gW107XG4gICAgICAgIC8vIEJsYWNrIGN1cnJlbnRQb3NpdGlvblxuICAgICAgICByb3cucHVzaChuZXcgUm9va18xLlJvb2soXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDAsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBLbmlnaHRfMS5LbmlnaHQoXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDEsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBCaXNob3BfMS5CaXNob3AoXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDIsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBRdWVlbl8xLlF1ZWVuKFwid2hpdGVcIiwgbmV3IFNxdWFyZV8xLlNxdWFyZSg2LCAzLCB0aGlzKSwgdGhpcykpO1xuICAgICAgICByb3cucHVzaChuZXcgS2luZ18xLktpbmcoXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDQsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBCaXNob3BfMS5CaXNob3AoXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDUsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBLbmlnaHRfMS5LbmlnaHQoXCJ3aGl0ZVwiLCBuZXcgU3F1YXJlXzEuU3F1YXJlKDYsIDYsIHRoaXMpLCB0aGlzKSk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBSb29rXzEuUm9vayhcIndoaXRlXCIsIG5ldyBTcXVhcmVfMS5TcXVhcmUoNiwgNywgdGhpcyksIHRoaXMpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ucHVzaChyb3cpO1xuICAgIH1cbiAgICBDaGVzc0JvYXJkLnByb3RvdHlwZS5nZXRQaWVjZUZyb21TcXVhcmUgPSBmdW5jdGlvbiAoc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQb3NpdGlvbltzcXVhcmUucmFua11bc3F1YXJlLmZpbGVdO1xuICAgIH07XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUud2FzUHVzaGVkRG91YmxlU3RlcCA9IGZ1bmN0aW9uIChwYXduKSB7XG4gICAgICAgIHZhciBsYXN0TW92ZWRQYXduID0gdGhpcy5sYXN0TW92ZWRQYXduO1xuICAgICAgICBpZiAoIWxhc3RNb3ZlZFBhd24gfHwgIShsYXN0TW92ZWRQYXduIGluc3RhbmNlb2YgUGF3bl8xLlBhd24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhc3RNb3ZlZFJhbmsgPSBsYXN0TW92ZWRQYXduLmdldFBvc2l0aW9uKCkucmFuaztcbiAgICAgICAgdmFyIGN1cnJlbnRSYW5rID0gcGF3bi5nZXRQb3NpdGlvbigpLnJhbms7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhjdXJyZW50UmFuayAtIGxhc3RNb3ZlZFJhbmspID09PSAyO1xuICAgIH07XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUucmVtb3ZlUGllY2UgPSBmdW5jdGlvbiAoU3F1YXJlKSB7XG4gICAgICAgIHZhciBwaWVjZSA9IHRoaXMuZ2V0UGllY2VGcm9tU3F1YXJlKFNxdWFyZSk7XG4gICAgICAgIGlmICghdGhpcy5nZXRQaWVjZUZyb21TcXVhcmUoU3F1YXJlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb25bU3F1YXJlLnJhbmtdW1NxdWFyZS5maWxlXSA9IG51bGw7XG4gICAgICAgIHJldHVybiBwaWVjZTtcbiAgICB9O1xuICAgIENoZXNzQm9hcmQucHJvdG90eXBlLnVuZG9Nb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblt0aGlzLmxhc3RNb3ZlW1wiZnJvbVwiXS5yYW5rXVt0aGlzLmxhc3RNb3ZlW1wiZnJvbVwiXS5maWxlXSA9IHRoaXMubGFzdE1vdmVbXCJwaWVjZVwiXTtcbiAgICAgICAgaWYgKHRoaXMubGFzdE1vdmVbXCJpbml0aWFsVmFsdWVPZlNxdWFyZVwiXSBpbnN0YW5jZW9mIFBpZWNlXzEuUGllY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uW3RoaXMubGFzdE1vdmVbXCJ0b1wiXS5yYW5rXVt0aGlzLmxhc3RNb3ZlW1widG9cIl0uZmlsZV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vdmVbXCJpbml0aWFsVmFsdWVPZlNxdWFyZVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uW3RoaXMubGFzdE1vdmVbXCJ0b1wiXS5yYW5rXVt0aGlzLmxhc3RNb3ZlW1widG9cIl0uZmlsZV0gPVxuICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0TW92ZVtcInBpZWNlXCJdLnNxdWFyZSA9IHRoaXMubGFzdE1vdmVbXCJmcm9tXCJdLnNxdWFyZTtcbiAgICB9O1xuICAgIENoZXNzQm9hcmQucHJvdG90eXBlLm1ha2VNb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICAgIHZhciBwaWVjZSA9IHRoaXMuZ2V0UGllY2VGcm9tU3F1YXJlKGZyb20pO1xuICAgICAgICB0aGlzLmdldFBpZWNlRnJvbVNxdWFyZShmcm9tKS5zcXVhcmUgPSB0bztcbiAgICAgICAgdmFyIG9wcG9uZW50UGllY2UgPSB0aGlzLmdldFBpZWNlRnJvbVNxdWFyZSh0byk7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uW3BpZWNlLnNxdWFyZS5yYW5rXVtwaWVjZS5zcXVhcmUuZmlsZV0gPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblt0by5yYW5rXVt0by5maWxlXSA9IHBpZWNlO1xuICAgICAgICB0aGlzLmxhc3RNb3ZlW1wicGllY2VcIl0gPSBwaWVjZTtcbiAgICAgICAgdGhpcy5sYXN0TW92ZVtcImZyb21TcXVhcmVcIl0gPSBmcm9tO1xuICAgICAgICB0aGlzLmxhc3RNb3ZlW1widG9TcXVhcmVcIl0gPSB0bztcbiAgICAgICAgdGhpcy5sYXN0TW92ZVtcImluaXRpYWxWYWx1ZU9mVG9TcXVhcmVcIl0gPSBvcHBvbmVudFBpZWNlO1xuICAgICAgICBwaWVjZS5zcXVhcmUgPSB0bztcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgUGF3bl8xLlBhd24pIHtcbiAgICAgICAgICAgIHBpZWNlLmhhc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdmVkUGF3biA9IHBpZWNlO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGZyb20ucmFuayAtIHRvLnJhbmspID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWRMYXN0TW92ZWRQYXduTW92ZVR3b1N0ZXBzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdmVkUGF3biA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRpZExhc3RNb3ZlZFBhd25Nb3ZlVHdvU3RlcHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4aW1pemVyTWF0ZXJpYWxjb3VudCA9IDA7XG4gICAgICAgIHZhciBtaW5pbWl6ZXJrTWF0ZXJpYWxDb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jdXJyZW50UG9zaXRpb25baV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9zaXRpb25baV1bal0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb25baV1bal0gaW5zdGFuY2VvZiBQaWVjZV8xLlBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXS5jb2xvciA9PT0gcGllY2UuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltaXplck1hdGVyaWFsY291bnQgKz0gdGhpcy5jdXJyZW50UG9zaXRpb25baV1bal0ud29ydGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbWl6ZXJrTWF0ZXJpYWxDb3VudCArPSB0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXS53b3J0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW21heGltaXplck1hdGVyaWFsY291bnQsIG1pbmltaXplcmtNYXRlcmlhbENvdW50XTtcbiAgICB9O1xuICAgIENoZXNzQm9hcmQucHJvdG90eXBlLnNldFBpZWNlID0gZnVuY3Rpb24gKGN1cnJlbnRQb3NpdGlvbiwgcGllY2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb25bY3VycmVudFBvc2l0aW9uLnJhbmtdW2N1cnJlbnRQb3NpdGlvbi5maWxlXSA9IHBpZWNlO1xuICAgIH07XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uIChyYW5rLCBmaWxlKSB7XG4gICAgICAgIHZhciBpc0VtcHR5O1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9zaXRpb25bcmFua11bZmlsZV0pIHtcbiAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlzRW1wdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0VtcHR5O1xuICAgIH07XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUuY29vcmRpbmF0ZVRvU3F1YXJlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGxldHRlciA9IHg7XG4gICAgICAgIHZhciBudW1iZXIgPSA4IC0geTtcbiAgICAgICAgdmFyIGNvb3JkaW5hdGVUb1NxdWFyZSA9IG5ldyBTcXVhcmVfMS5TcXVhcmUobnVtYmVyLCBsZXR0ZXIsIHRoaXMpO1xuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZVRvU3F1YXJlO1xuICAgIH07XG4gICAgLy9pZiAodGhpcy5ib2FyZC5pc0VuZW15UGllY2UodGhpcy5zcXVhcmUucmFuayArIG1vdmVEaXJlY3Rpb24sIHRoaXMuc3F1YXJlLmZpbGUuY2hhckNvZGVBdCgwKSAtIDEsIHRoaXMuY29sb3IpKSB7XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUuY29sb3JPZlBpZWNlT25TcXVhcmUgPSBmdW5jdGlvbiAoc3F1YXJlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZ2V0UGllY2VGcm9tU3F1YXJlKHNxdWFyZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvcjtcbiAgICB9O1xuICAgIENoZXNzQm9hcmQucHJvdG90eXBlLmlzU3F1YXJlQXR0YWNrZWQgPSBmdW5jdGlvbiAoc3F1YXJlLCBwZXJzcGVjdGl2ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudFBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY3VycmVudFBvc2l0aW9uW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uW2ldW2pdIGluc3RhbmNlb2YgUGllY2VfMS5QaWVjZSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0YWNrZWRTcXVhcmVzID0gdGhpcy5jdXJyZW50UG9zaXRpb25baV1bal0uZ2V0UG9zc2libGVNb3ZlcygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IChhdHRhY2tlZFNxdWFyZXMgPT09IG51bGwgfHwgYXR0YWNrZWRTcXVhcmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhdHRhY2tlZFNxdWFyZXMubGVuZ3RoKTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrZWRTcXVhcmVzW2tdLmZpbGUgPT09IHNxdWFyZS5maWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmVzW2tdLnJhbmsgPT09IHNxdWFyZS5yYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQ2hlc3NCb2FyZC5wcm90b3R5cGUuZ2V0UG9zc2libGVNb3ZlcyA9IGZ1bmN0aW9uIChtYXhpbWl6aW5nUGxheWVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQb3NpdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnRQb3NpdGlvbltpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXSBpbnN0YW5jZW9mIFBpZWNlXzEuUGllY2UgJiZcbiAgICAgICAgICAgICAgICAgICAgKChfYSA9IHRoaXMuY3VycmVudFBvc2l0aW9uW2ldW2pdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29sb3IpID09PSBtYXhpbWl6aW5nUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb3Zlc09mQ3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50UG9zaXRpb25baV1bal0uZ2V0UG9zc2libGVNb3ZlcygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG1vdmVzT2ZDdXJyZW50UGllY2UubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0tpbmdJbkNoZWNrSW5IeXBvdGV0aGljYWxQb3MobmV3IFNxdWFyZV8xLlNxdWFyZShpLCBqLCB0aGlzKSwgbW92ZXNPZkN1cnJlbnRQaWVjZVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gobW92ZXNPZkN1cnJlbnRQaWVjZVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlTW92ZXM7XG4gICAgfTtcbiAgICBDaGVzc0JvYXJkLnByb3RvdHlwZS5pc0tpbmdJbkNoZWNrSW5IeXBvdGV0aGljYWxQb3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIga2luZztcbiAgICAgICAgdmFyIGh5cG90ZXRoaWNhbFBvcyA9IHRoaXMuY3VycmVudFBvc2l0aW9uO1xuICAgICAgICBoeXBvdGV0aGljYWxQb3NbZnJvbS5yYW5rXVtmcm9tLmZpbGVdID0gbnVsbDtcbiAgICAgICAgaWYgKHRvLnJhbmsgPCA3ICYmIHRvLnJhbmsgPiAwICYmIHRvLmZpbGUgPCA3ICYmIHRvLmZpbGUgPiAwKSB7XG4gICAgICAgICAgICBoeXBvdGV0aGljYWxQb3NbdG8ucmFua11bdG8uZmlsZV0gPSB0aGlzLmdldFBpZWNlRnJvbVNxdWFyZShmcm9tKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaHlwb3RldGhpY2FsUG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoeXBvdGV0aGljYWxQb3NbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGllY2VGcm9tU3F1YXJlKGZyb20pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHlwb3RldGhpY2FsUG9zW2ldW2pdIGluc3RhbmNlb2YgS2luZ18xLktpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBpZWNlRnJvbVNxdWFyZShmcm9tKS5jb2xvciA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwb3RldGhpY2FsUG9zW2ldW2pdLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZyA9IGh5cG90ZXRoaWNhbFBvc1tpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGh5cG90ZXRoaWNhbFBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoeXBvdGV0aGljYWxQb3NbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQaWVjZUZyb21TcXVhcmUoZnJvbSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBoeXBvdGV0aGljYWxQb3NbaV1bal0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvcikgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBpZWNlRnJvbVNxdWFyZShmcm9tKS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlTW92ZXMgPSBoeXBvdGV0aGljYWxQb3NbaV1bal0uZ2V0UG9zc2libGVNb3ZlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaV0uZmlsZSA9PT0ga2luZy5zcXVhcmUuZmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzW2ldLnJhbmsgPT09IGtpbmcuc3F1YXJlLnJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIENoZXNzQm9hcmQucHJvdG90eXBlLmdldE1heGltYWxpemF0b3JzS2luZyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudFBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY3VycmVudFBvc2l0aW9uW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uW2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXS5jb2xvciA9PT0gY29sb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uW2ldW2pdIGluc3RhbmNlb2YgS2luZ18xLktpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQb3NpdGlvbltpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENoZXNzQm9hcmQ7XG59KCkpO1xuZXhwb3J0cy5DaGVzc0JvYXJkID0gQ2hlc3NCb2FyZDtcbnZhciBib2FyZCA9IG5ldyBDaGVzc0JvYXJkKCk7XG52YXIgY291bnQgPSAwO1xudmFyIGJDb3VudCA9IDA7XG4vL2JvYXJkLmdldFBvc3NpYmxlTW92ZXMoXCJ3aGl0ZVwiKTtcbi8vYm9hcmQubWFrZU1vdmUobmV3IFNxdWFyZSgxLDEsIGJvYXJkKSxuZXcgU3F1YXJlKDMsMSwgYm9hcmQpKVxuZm9yICh2YXIgaSA9IDA7IGkgPCBib2FyZC5jdXJyZW50UG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvYXJkLmN1cnJlbnRQb3NpdGlvbltpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdLmNvbG9yID09PSBcIndoaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBib2FyZC5jdXJyZW50UG9zaXRpb25baV1bal0ud29ydGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9hcmQuY3VycmVudFBvc2l0aW9uW2ldW2pdLndvcnRoLCBcImFkZGVkIHRvIHdoaXRlXCIsIChfYSA9IGJvYXJkLmN1cnJlbnRQb3NpdGlvbltpXVtqXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFR5cGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChib2FyZC5jdXJyZW50UG9zaXRpb25baV1bal0uY29sb3IgPT09IFwiYmxhY2tcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXJkLmN1cnJlbnRQb3NpdGlvbltpXVtqXS53b3J0aCwgXCJhZGRlZCB0byBibGFja1wiLCAoX2IgPSBib2FyZC5jdXJyZW50UG9zaXRpb25baV1bal0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRUeXBlKCkpO1xuICAgICAgICAgICAgICAgIGJDb3VudCArPSBib2FyZC5jdXJyZW50UG9zaXRpb25baV1bal0ud29ydGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zb2xlLmxvZyhcbi8vY291bnQsIGJDb3VudFxuLy9ib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUobmV3IFNxdWFyZSg2LCA2LCBib2FyZCkpPy5nZXRQb3NzaWJsZU1vdmVzKClcbi8vYm9hcmQubWFrZU1vdmUoIG5ldyBTcXVhcmUgKDEsNCwgYm9hcmQpLCBuZXcgU3F1YXJlICgzLDQsIGJvYXJkKSksXG4vL2JvYXJkLm1ha2VNb3ZlKCBuZXcgU3F1YXJlICg2LDQsIGJvYXJkKSwgbmV3IFNxdWFyZSAoNCw0LCBib2FyZCkpXG4pO1xuLy9jb25zb2xlLmxvZyhib2FyZC5nZXRQaWVjZUZyb21TcXVhcmUobmV3IFNxdWFyZSgxLDQsIGJvYXJkKSkpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2hlc3Nib2FyZF8xID0gcmVxdWlyZShcIi4vY2hlc3Nib2FyZFwiKTtcbi8vY29uc29sZS5sb2coXCJrIGdqc25kZlwiKVxudmFyIGJvYXJkID0gbmV3IGNoZXNzYm9hcmRfMS5DaGVzc0JvYXJkKCk7XG4vLyBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGJvYXJkXG52YXIgY3VycmVudFBvc2l0aW9uID0gYm9hcmQuY3VycmVudFBvc2l0aW9uO1xuLy8gRGVmaW5lIHN5bWJvbHMgZm9yIGVhY2ggcGllY2VcbnZhciBwaWVjZVN5bWJvbHMgPSB7XG4gICAgd2hpdGVwYXduOiBcIuKZmVwiLFxuICAgIHdoaXRlcm9vazogXCLimZZcIixcbiAgICB3aGl0ZWtuaWdodDogXCLimZhcIixcbiAgICB3aGl0ZWJpc2hvcDogXCLimZdcIixcbiAgICB3aGl0ZXF1ZWVuOiBcIuKZlVwiLFxuICAgIHdoaXRla2luZzogXCLimZRcIixcbiAgICBibGFja3Bhd246IFwi4pmfXCIsXG4gICAgYmxhY2tyb29rOiBcIuKZnFwiLFxuICAgIGJsYWNra25pZ2h0OiBcIuKZnlwiLFxuICAgIGJsYWNrYmlzaG9wOiBcIuKZnVwiLFxuICAgIGJsYWNrcXVlZW46IFwi4pmbXCIsXG4gICAgYmxhY2traW5nOiBcIuKZmlwiLFxufTtcbi8vIExvb3AgdGhyb3VnaCBlYWNoIHNxdWFyZSBhbmQgY3JlYXRlIGEgdGQgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBwaWVjZVxuZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICB2YXIgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ciwgdGQpO1xuICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGllY2UgPSBjdXJyZW50UG9zaXRpb25baV1bal07XG4gICAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzeW1ib2wgZm9yIHRoZSBwaWVjZVxuICAgICAgICAgICAgdmFyIGNvbG9yID0gcGllY2UuY29sb3IgPT09IFwid2hpdGVcIiA/IFwid2hpdGVfXCIgOiBcImJsYWNrX1wiO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBwaWVjZS50eXBlO1xuICAgICAgICAgICAgdmFyIHN5bWJvbCA9IHBpZWNlU3ltYm9sc1tjb2xvciArIHR5cGVdO1xuICAgICAgICAgICAgdGQuaW5uZXJUZXh0ID0gc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLmFwcGVuZENoaWxkKHRyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==