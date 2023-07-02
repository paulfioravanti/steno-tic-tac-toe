import { useState } from "react";
import "./App.css";
import { Board } from "./Board";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleMove = updateGame(setSquares);

  return (
    <div className="game">
      <Board squares={squares} handleMove={handleMove} />
    </div>
  );
}

function updateGame(setSquares) {
  return function (nextSquares) {
    setSquares(nextSquares);
  };
}
