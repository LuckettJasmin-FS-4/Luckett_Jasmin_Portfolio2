import { useState } from "react";

import puppyPark from "../assets/puppyPark.png";
import poppyShooter from "../assets/poppyShooter.png";

import pinkBubble from "../assets/pinkpupbubble1.png";
import blueBubble from "../assets/bluePupbubble1.png";
import lightBlueBubble from "../assets/lightbluPupbubble1.png";
import greenBubble from "../assets/greenPupbubble1.png";
import yellowBubble from "../assets/yellowPupbubble1.png";
import purpleBubble from "../assets/purplePupbubble1.png";
import orangeBubble from "../assets/orangePupbubble1.png";

import enemy1 from "../assets/enemy1.png";
import enemy2 from "../assets/enemy2.png";
import enemy3 from "../assets/enemy3.png";

const bubbleTypes = [
  { color: "pink", img: pinkBubble },
  { color: "blue", img: blueBubble },
  { color: "lightblue", img: lightBlueBubble },
  { color: "green", img: greenBubble },
  { color: "yellow", img: yellowBubble },
  { color: "purple", img: purpleBubble },
  { color: "orange", img: orangeBubble },
];

const enemyTypes = [
  { color: "enemy", img: enemy1 },
  { color: "enemy", img: enemy2 },
  { color: "enemy", img: enemy3 },
];

function makePattern() {
  const allItems = [...bubbleTypes, ...bubbleTypes, ...enemyTypes];

  return Array.from({ length: 30 }, (_, index) => {
    const item = allItems[Math.floor(Math.random() * allItems.length)];

    return {
      id: crypto.randomUUID(),
      img: item.img,
      color: item.color,
      isEnemy: item.color === "enemy",
      row: Math.floor(index / 10),
    };
  });
}

function Detail() {
  const [bubbles, setBubbles] = useState(makePattern());
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(28);
  const [streak, setStreak] = useState(0);
  const [bottleColor, setBottleColor] = useState("pink");
  const [bottleFill, setBottleFill] = useState(0);

  function popBubble(clickedBubble) {
    if (moves <= 0) return;

    setMoves(moves - 1);

    if (clickedBubble.isEnemy) {
      setStreak(0);
      setBubbles(makePattern());
      return;
    }

    const newStreak = streak + 1;
    const points = 100 * newStreak;

    setScore(score + points);
    setStreak(newStreak);
    setBottleColor(clickedBubble.color);
    setBottleFill(Math.min(bottleFill + 12, 100));

    setBubbles(makePattern());
  }

  function resetGame() {
    setBubbles(makePattern());
    setScore(0);
    setMoves(28);
    setStreak(0);
    setBottleFill(0);
    setBottleColor("pink");
  }

  return (
    <main
      className="game-page"
      style={{ backgroundImage: `url(${puppyPark})` }}
    >
      <div className="game-hud">
        <p>Score: {score}</p>
        <p>Moves: {moves}</p>
        <p>Streak: {streak}</p>
      </div>

      <div className="juice-bottle">
        <div
          className={`juice-fill ${bottleColor}`}
          style={{ height: `${bottleFill}%` }}
        ></div>
      </div>

      <section className="bubble-grid">
        {bubbles.map((bubble) => (
          <button
            key={bubble.id}
            className="bubble-button"
            onClick={() => popBubble(bubble)}
          >
            <img
              src={bubble.img}
              alt={bubble.isEnemy ? "enemy bubble" : `${bubble.color} bubble`}
              className={bubble.isEnemy ? "enemy-bubble" : "bubble"}
            />
          </button>
        ))}
      </section>

      <img src={poppyShooter} alt="Poppy Shooter" className="shooter" />

      {moves === 0 && <h2 className="win-message">Game Over!</h2>}

      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
    </main>
  );
}

export default Detail;