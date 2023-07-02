import { Square } from "./Square";
import { Status } from "./Status";

export function Board({ squares, handleMove, xIsNext, winner }) {
  const rows = [...chunks([...Array(9).keys()], 3)];
  const handleClick =
    updateBoard.bind(null, squares, handleMove, xIsNext, winner);

  return (
    <div className="game-board">
      <Status xIsNext={xIsNext} winner={winner} />
      {rows.map(row =>
        <div className="board-row">
          {row.map(squareNumber =>
            <Square
              value={squares[squareNumber]}
              handleClick={handleClick(squareNumber)}
            />
          )}
        </div>
      )}
    </div>
  );
}

function updateBoard(squares, handleMove, xIsNext, winner, squareNumber) {
  return function () {
    if (winner || squares[squareNumber]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[squareNumber] = "X";
    } else {
      nextSquares[squareNumber] = "O";
    }

    handleMove(nextSquares);
  };
}

function* chunks(array, chunkSize) {
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}
