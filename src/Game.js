import { useState } from "react";
import "./App.css";
import { Board } from "./Board";
import { History } from "./History";
import { calculateWinner } from "./rules";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const handleMove =
    updateGame(history, setHistory, currentMove, setCurrentMove);

  return (
    <div className="game">
      <Board
        squares={currentSquares}
        handleMove={handleMove}
        xIsNext={xIsNext}
        winner={winner}
      />
      <History
        history={history}
        setCurrentMove={setCurrentMove}
      />
    </div>
  );
}

function updateGame(history, setHistory, currentMove, setCurrentMove) {
  return function (nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
}
