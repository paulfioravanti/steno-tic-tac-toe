import { useState } from "react";
import "./App.css";
import { Board } from "./Board";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const handleMove = updateGame(setSquares, currentMove, setCurrentMove);

  return (
    <div className="game">
      <Board
        squares={squares}
        handleMove={handleMove}
        xIsNext={xIsNext}
      />
    </div>
  );
}

function updateGame(setSquares, currentMove, setCurrentMove) {
  return function (nextSquares) {
    setSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  };
}
