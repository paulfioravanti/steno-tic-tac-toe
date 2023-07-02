import { HistoricalMove } from "./HistoricalMove";

export function History({ history, setCurrentMove }) {
  return (
    <div className="game-history">
      <ol>
        {history.map((_move, moveIndex) =>
          <HistoricalMove
            moveIndex={moveIndex}
            handleClick={() => setCurrentMove(moveIndex)}
          />
        )}
      </ol>
    </div>
  );
}
