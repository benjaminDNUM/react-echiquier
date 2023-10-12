import { Cell } from "../models/chessBoard";

const colLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];

const BOARD_SIZE = 8;

export const createInitialChessBoard = (): Cell[][] => {
  const result = Array(BOARD_SIZE);
  for (let k = 0; k < BOARD_SIZE; k++) {
    result[k] = Array(BOARD_SIZE);
    for (let l = 0; l < BOARD_SIZE; l++) {
      result[k][l] = { row: k + 1, col: colLetters[l] };
    }
  }

  return result;
};
