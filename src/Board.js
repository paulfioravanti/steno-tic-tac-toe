import { Square } from "./Square";

export function Board({ squares, handleMove }) {
  const rows = [...chunks([...Array(9).keys()], 3)];
  const handleClick = updateBoard.bind(null, squares, handleMove);

  return (
    <div className="game-board">
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

function updateBoard(squares, handleMove, squareNumber) {
  return function () {
    if (squares[squareNumber]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[squareNumber] = "X";
    handleMove(nextSquares);
  };
}

function* chunks(array, chunkSize) {
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}
