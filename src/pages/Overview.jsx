import { Link } from "react-router-dom";

import logo from "../assets/logophoto.png";
import homeButton from "../assets/homeButton.png";
import searchButton from "../assets/searchButton.png";
import overviewButton from "../assets/overviewButton.png";

function Overview() {
  return (
    <main className="overview-page">
      <nav className="overview-menu">
        <Link to="/">
          <img src={homeButton} alt="Home" />
        </Link>

        <Link to="/Search">
          <img src={searchButton} alt="Search" />
        </Link>

        <Link to="/Overview">
          <img src={overviewButton} alt="Overview" />
        </Link>
      </nav>

      <img src={logo} alt="Chibi Puppy Pop Logo" className="overview-logo" />

      <section className="overview-section">
        <h2>GAME PURPOSE</h2>
        <p>A cute arcade game where players tap popping chibi dogs and play a bonus puzzle game.</p>
      </section>

      <section className="overview-section">
        <h2>MAIN FEATURES</h2>
        <p>
          Tap chibi dogs for points in Whack-a-Pup mode<br />
          Unlock new dogs and accessories<br />
          Play a bonus puzzle stacking game<br />
          Collect treats, bones, and rewards<br />
          Customize music and game settings<br />
          Track high scores and achievements<br />
          Search and view dog characters<br />
          Use colorful arcade-style controls
        </p>
      </section>

      <section className="overview-section">
        <h2>PAGES INCLUDED</h2>
        <p>
          Dashboard/Main<br />
          The main home screen where players can start games, view scores, and access navigation.<br />
          User/Settings<br />
          Allows players to customize sound, themes, difficulty, and profile settings.<br />
          Search Page<br />
          Lets players search and browse unlocked dog characters and collectibles.
        </p>
      </section>

      <section className="overview-section">
        <h2>DESIGN SYSTEM</h2>
        <p>
          Material Design 3<br />
          Link:<br />
          Material Design 3<br />
          I chose Material Design 3 because it provides clean mobile-friendly layouts,
          rounded UI components, and colorful design patterns that fit the playful and bubbly style of my game prototype.
        </p>
      </section>
    </main>
  );
}

export default Overview;