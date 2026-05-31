import { useEffect, useState } from "react";

import MenuButtons from "../components/MenuButtons.jsx";

import logo from "../assets/logophoto.png";
import poppyCard from "../assets/poppyCard.png";

function Settings() {
  const [musicVolume, setMusicVolume] = useState(
    localStorage.getItem("musicVolume") || 50
  );
  const [soundVolume, setSoundVolume] = useState(
    localStorage.getItem("soundVolume") || 50
  );
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("difficulty") || "Easy"
  );

  useEffect(() => {
    localStorage.setItem("musicVolume", musicVolume);
    localStorage.setItem("soundVolume", soundVolume);
    localStorage.setItem("difficulty", difficulty);
  }, [musicVolume, soundVolume, difficulty]);

  return (
    <main className="settings-app-screen">
      <MenuButtons />

      <img src={logo} alt="Chibi Puppy Pop Logo" className="settings-logo" />

      <h1 className="settings-title">SETTINGS</h1>

      <section className="settings-profile">
        <img src={poppyCard} alt="Poppy" className="settings-poppy" />
        <h2>Poppy</h2>
        <p>LUNAPUP_01</p>
        <p>Favorite Puppy</p>
      </section>

      <section className="slider-panel">
        <label>MUSIC VOLUME: {musicVolume}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={musicVolume}
          onChange={(event) => setMusicVolume(event.target.value)}
        />
      </section>

      <section className="slider-panel">
        <label>SOUND EFFECTS: {soundVolume}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={soundVolume}
          onChange={(event) => setSoundVolume(event.target.value)}
        />
      </section>

      <section className="difficulty-box">
        <h2>DIFFICULTY</h2>

        <button onClick={() => setDifficulty("Easy")}>Easy</button>
        <button onClick={() => setDifficulty("Medium")}>Medium</button>
        <button onClick={() => setDifficulty("Hard")}>Hard</button>

        <p>Current Difficulty: {difficulty}</p>
      </section>

      <section className="settings-stats">
        <h2>STATS</h2>
        <p>Games Played: {localStorage.getItem("gamesPlayed") || 0}</p>
        <p>Puppies Unlocked: 12</p>
        <p>Highest Score: {localStorage.getItem("highScore") || 0}</p>
      </section>
    </main>
  );
}

export default Settings;