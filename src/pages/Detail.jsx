import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import MenuButtons from "../components/MenuButtons.jsx";

import puppyPark from "../assets/puppyPark.png";
import poppyShooter from "../assets/poppyShooter.png";

import blueBubble from "../assets/bluePupbubble1.png";
import blueBubble2 from "../assets/bluePupbubble2.png";
import greenBubble from "../assets/greenPupbubble1.png";
import lightBlueBubble from "../assets/lightbluePupbubble1.png";
import orangeBubble from "../assets/orangePupbubble1.png";
import pinkBubble from "../assets/pinkpupbubble1.png";
import pinkBubble2 from "../assets/pinkPupBubble2.png";
import purpleBubble from "../assets/purplePupbubble1.png";
import purpleBubble2 from "../assets/purplePupbubble2.png";
import yellowBubble from "../assets/yellowPupbubble1.png";

import enemy1 from "../assets/enemy1.png";
import enemy2 from "../assets/enemy2.png";
import enemy3 from "../assets/enemy3.png";
import enemy4 from "../assets/enemy4.png";
import enemy5 from "../assets/enemy5.png";
import enemy6 from "../assets/enemy6.png";
import enemy7 from "../assets/enemy7.png";
import enemy8 from "../assets/enemy8.png";

const puppyBubbles = [
  { color: "blue", img: blueBubble },
  { color: "blue", img: blueBubble2 },
  { color: "green", img: greenBubble },
  { color: "lightblue", img: lightBlueBubble },
  { color: "orange", img: orangeBubble },
  { color: "pink", img: pinkBubble },
  { color: "pink", img: pinkBubble2 },
  { color: "purple", img: purpleBubble },
  { color: "purple", img: purpleBubble2 },
  { color: "yellow", img: yellowBubble },
];

const kittyEnemies = [
  { color: "enemy", img: enemy1, enemy: true },
  { color: "enemy", img: enemy2, enemy: true },
  { color: "enemy", img: enemy3, enemy: true },
  { color: "enemy", img: enemy4, enemy: true },
  { color: "enemy", img: enemy5, enemy: true },
  { color: "enemy", img: enemy6, enemy: true },
  { color: "enemy", img: enemy7, enemy: true },
  { color: "enemy", img: enemy8, enemy: true },
];

const shooterColors = [
  "blue",
  "green",
  "lightblue",
  "orange",
  "pink",
  "purple",
  "yellow",
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function makeBoard() {
  const mixedItems = [...puppyBubbles, ...puppyBubbles, ...kittyEnemies];

  return Array.from({ length: 36 }, () => ({
    id: crypto.randomUUID(),
    ...randomItem(mixedItems),
  }));
}

function Detail() {
  const [board, setBoard] = useState(makeBoard());
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(30);
  const [streak, setStreak] = useState(0);
  const [shooterColor, setShooterColor] = useState("pink");
  const [bottleColor, setBottleColor] = useState("pink");
  const [bottleFill, setBottleFill] = useState(0);
  const [message, setMessage] = useState("Pop pink bubbles!");

  const musicRef = useRef(null);

  const shooterBubble = useMemo(() => {
    return puppyBubbles.find((bubble) => bubble.color === shooterColor) || puppyBubbles[0];
  }, [shooterColor]);

  function playSound(type) {
    const sounds = {
      pop: "/sounds/pop.mp3",
      wrong: "/sounds/wrong.mp3",
    };

    const audio = new Audio(sounds[type]);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }

  function toggleMusic() {
    if (!musicRef.current) {
      musicRef.current = new Audio("/sounds/music.mp3");
      musicRef.current.loop = true;
      musicRef.current.volume = 0.25;
    }

    if (musicRef.current.paused) {
      musicRef.current.play().catch(() => {});
    } else {
      musicRef.current.pause();
    }
  }

  function saveHighScore(newScore) {
    const oldHighScore = Number(localStorage.getItem("highScore")) || 0;

    if (newScore > oldHighScore) {
      localStorage.setItem("highScore", String(newScore));
    }
  }

  function handleBubbleClick(item) {
    if (moves <= 0) return;

    setMoves((currentMoves) => currentMoves - 1);

    if (item.enemy) {
      playSound("wrong");
      setStreak(0);
      setMessage(`Kitty enemy! No points. Pop ${shooterColor} bubbles.`);
      return;
    }

    if (item.color === shooterColor) {
      playSound("pop");

      const newStreak = streak + 1;
      const points = 100 * newStreak;
      const newScore = score + points;
      const nextColor = randomItem(shooterColors);

      setScore(newScore);
      saveHighScore(newScore);
      setStreak(newStreak);
      setBottleColor(item.color);
      setBottleFill((fill) => Math.min(fill + 12, 100));
      setShooterColor(nextColor);
      setMessage(`Correct! +${points} points. Now pop ${nextColor} bubbles!`);
      setBoard(makeBoard());
    } else {
      playSound("wrong");
      setStreak(0);
      setMessage(`Wrong color! Pop ${shooterColor} bubbles.`);
    }
  }

  function resetGame() {
    const gamesPlayed = Number(localStorage.getItem("gamesPlayed")) || 0;
    localStorage.setItem("gamesPlayed", String(gamesPlayed + 1));

    setBoard(makeBoard());
    setScore(0);
    setMoves(30);
    setStreak(0);
    setShooterColor("pink");
    setBottleColor("pink");
    setBottleFill(0);
    setMessage("Pop pink bubbles!");
  }

  return (
    <main className="game-page" style={{ backgroundImage: `url(${puppyPark})` }}>
      <MenuButtons />

      <section className="game-hud">
        <p>Score: {score}</p>
        <p>Moves: {moves}</p>
        <p>Streak: {streak}</p>
        <p>Target: {shooterColor}</p>
      </section>

      <button className="music-button" onClick={toggleMusic}>
        Music On / Off
      </button>

      <p className="game-message">{message}</p>

      <div className="juice-bottle">
        <div
          className={`juice-fill ${bottleColor}`}
          style={{ height: `${bottleFill}%` }}
        ></div>
      </div>

      <section className="bubble-grid">
        {board.map((item) => (
          <motion.button
            key={item.id}
            className="bubble-button"
            onClick={() => handleBubbleClick(item)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
          >
            <img
              src={item.img}
              alt={item.enemy ? "kitty enemy" : `${item.color} puppy bubble`}
              className={item.enemy ? "enemy-bubble" : "bubble"}
            />
          </motion.button>
        ))}
      </section>

      <section className="shooter-area">
        <img src={poppyShooter} alt="Poppy Shooter" className="shooter" />

        <div className="target-card">
          <p>Pop this color:</p>
          <img
            src={shooterBubble.img}
            alt={`${shooterColor} target bubble`}
            className="target-bubble"
          />
          <strong>{shooterColor}</strong>
        </div>
      </section>

      {moves === 0 && <h2 className="win-message">Game Over!</h2>}

      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
    </main>
  );
}

export default Detail;