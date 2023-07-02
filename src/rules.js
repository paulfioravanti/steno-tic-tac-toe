const WINNING_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function calculateWinner(squares) {
  for (let i = 0; i < WINNING_POSITIONS.length; i++) {
    const [a, b, c] = WINNING_POSITIONS[i];
    const player = squares[a];
    if (player && player === squares[b] && player === squares[c]) {
      return player;
    }
  }

  return null;
}
