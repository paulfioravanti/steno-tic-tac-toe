export function HistoricalMove({ moveIndex, handleClick }) {
  let description;

  if (moveIndex > 0) {
    description = `Go to move #${moveIndex}`;
  } else {
    description = "Go to game start";
  }

  return (
    <li key={moveIndex}>
      <button onClick={handleClick}>
        {description}
      </button>
    </li>
  );
}
