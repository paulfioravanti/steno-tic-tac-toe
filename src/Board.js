import { Square } from "./Square";

export function Board() {
  const rows = [...chunks([...Array(9).keys()], 3)];

  return (
    <div className="game-board">
      {rows.map(row =>
        <div className="board-row">
          {row.map(squareNumber =>
            <Square value={squareNumber} />
          )}
        </div>
      )}
    </div>
  );
}

function* chunks(array, chunkSize) {
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}
