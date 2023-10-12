import { useState } from "react";
import { createInitialChessBoard } from "./utils";
import { CellComponent } from "./CellComponent";
import { Cell } from "../models/chessBoard";

export function App() {
  const [chessBoard, setChessBoard] = useState<Cell[][]>(
    createInitialChessBoard()
  );

  return (
    <div>
      {chessBoard.map((row, index) => (
        <div key={index} className="flex">
          {row.map((cell, index) => (
            <CellComponent cell={cell} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
}
