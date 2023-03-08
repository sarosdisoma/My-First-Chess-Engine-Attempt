import { ChessBoard } from "./chessboard";

const board = new ChessBoard();

// Get the current position of the board
const currentPosition = board.currentPosition;

// Define symbols for each piece
const pieceSymbols: { [key: string]: string } = {
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
for (let i = 0; i < 8; i++) {
  const tr = document.createElement("div");
  for (let j = 0; j < 8; j++) {
    const td = document.createElement("div");
    if ((i + j) % 2 === 0) {
      td.classList.add("white");
    } else {
      td.classList.add("black");
    }
    const piece = currentPosition[i][j];
    if (piece) {
      // Get the symbol for the piece
      const color = piece.color === "white" ? "white" : "black";
      const type = piece.getType();
      const symbol = pieceSymbols[color + type];
      //const symbol = pieceSymbols[`${color} + ${type}`];
      td.innerText = symbol;
    }
    tr.appendChild(td);
  }
  document.querySelector("body")!.appendChild(tr);
}