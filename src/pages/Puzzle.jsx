import { useState } from "react";

import MenuButtons from "../components/MenuButtons.jsx";

const blocks = ["🟪", "🟦", "🟩", "🟨", "🟥", "🟧"];

function createGrid() {
  return Array.from(
    { length: 25 },
    () => blocks[Math.floor(Math.random() * blocks.length)]
  );
}

function Puzzle() {
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(createGrid());

  function clearBlock(index) {
    const updatedGrid = [...grid];
    updatedGrid[index] = "⬜";
    setGrid(updatedGrid);
    setScore(score + 50);
  }

  function resetPuzzle() {
    setGrid(createGrid());
    setScore(0);
  }

  return (
    <main className="puzzle-screen">
      <MenuButtons />

      <h1>Puppy Puzzle</h1>

      <p>Score: {score}</p>

      <section className="tetris-grid">
        {grid.map((block, index) => (
          <button key={index} onClick={() => clearBlock(index)}>
            {block}
          </button>
        ))}
      </section>

      <button className="reset-button" onClick={resetPuzzle}>
        Reset Puzzle
      </button>
    </main>
  );
}

export default Puzzle;