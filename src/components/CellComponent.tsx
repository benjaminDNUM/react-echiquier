import { Cell } from "../models/chessBoard";

type CellProps = {
  cell: Cell;
};

export const CellComponent = ({ cell }: CellProps) => {
  return (
    <button
      className="border-2 border-black p-2"
      onClick={() => console.log(cell.row, cell.col)}
    >{`${cell.row}${cell.col}`}</button>
  );
};
