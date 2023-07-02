export function Status({ xIsNext }) {
  const status = `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="status">
      {status}
    </div>
  );
}
