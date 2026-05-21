import { Link } from "react-router-dom";

import logo from "../assets/logophoto.png";
import poppyCard from "../assets/poppyCard.png";

function Settings() {
  return (
    <main className="settings-app-screen">

      <Link to="/" className="back-button">
        ←
      </Link>

      <img src={logo} alt="Logo" className="settings-logo" />

      <h1 className="settings-title">SETTINGS</h1>

      <section className="settings-profile">

        <img
          src={poppyCard}
          alt="Poppy"
          className="settings-poppy"
        />

        <h2>Poppy</h2>

        <p>LUNAPUP_01</p>

        <p>Favorite Puppy</p>

      </section>

      <section className="slider-panel">
        <label>MUSIC VOLUME</label>
        <input type="range" defaultValue="60" />
      </section>

      <section className="slider-panel">
        <label>SOUND EFFECTS</label>
        <input type="range" defaultValue="50" />
      </section>

      <section className="slider-panel">
        <label>TOGGLE SWITCH</label>
        <input type="range" defaultValue="40" />
      </section>

      <section className="difficulty-box">

        <p>18 x 24</p>

        <h2>DIFFICULTY</h2>

        <button>Easy</button>

        <button>Medium</button>

        <button>Hard</button>

      </section>

      <section className="settings-stats">

        <h2>STATS</h2>

        <p>Games Played: 54</p>

        <p>Puppies Unlocked: 12</p>

        <p>Highest Score: 1,222</p>

      </section>

    </main>
  );
}

export default Settings;