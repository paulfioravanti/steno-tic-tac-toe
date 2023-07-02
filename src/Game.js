import { useState } from "react";
import "./App.css";
import { Board } from "./Board";
import { calculateWinner } from "./rules";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const winner = calculateWinner(squares);
  const handleMove = updateGame(setSquares, currentMove, setCurrentMove);

  return (
    <div className="game">
      <Board
        squares={squares}
        handleMove={handleMove}
        xIsNext={xIsNext}
        winner={winner}
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
