import { Link } from "react-router-dom";

import logo from "../assets/logophoto.png";
import readyPop from "../assets/readyPop.png";

import startButton from "../assets/startpoppingButton.png";
import puzzleButton from "../assets/puppyPuzzle.png";

import homeButton from "../assets/homeButton.png";
import searchButton from "../assets/searchButton.png";
import dogsButton from "../assets/dogsButton.png";
import settingsButton from "../assets/settingsButton.png";

function Home() {
  return (
    <main className="dashboard-screen">

      <Link to="/" className="back-button">
        ←
      </Link>

      <img src={logo} alt="Logo" className="dashboard-logo" />

      <img
        src={readyPop}
        alt="Ready To Pop"
        className="ready-pop-img"
      />

      <Link to="/Detail">
        <img
          src={startButton}
          alt="Start"
          className="dashboard-button"
        />
      </Link>

      <Link to="/Detail">
        <img
          src={puzzleButton}
          alt="Puzzle"
          className="dashboard-button"
        />
      </Link>

      <section className="dashboard-stats">
        <p>High Score: 2,450</p>
        <p>Puppies Unlocked: 12</p>
        <p>Treats Collected: 120</p>
      </section>

      <nav className="dashboard-nav">

        <Link to="/">
          <img src={homeButton} alt="Home" />
        </Link>

        <Link to="/Search">
          <img src={searchButton} alt="Search" />
        </Link>

        <Link to="/Overview">
          <img src={dogsButton} alt="Dogs" />
        </Link>

        <Link to="/Settings">
          <img src={settingsButton} alt="Settings" />
        </Link>

      </nav>
    </main>
  );
}

export default Home;