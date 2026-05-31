import { Link } from "react-router-dom";

import MenuButtons from "../components/MenuButtons.jsx";

import logo from "../assets/logophoto.png";
import readyPop from "../assets/readyPop.png";
import startButton from "../assets/startpoppingButton.png";
import puzzleButton from "../assets/puppyPuzzle.png";

function Home() {
  return (
    <main className="dashboard-screen">
      <MenuButtons />

      <img src={logo} alt="Chibi Puppy Pop Logo" className="dashboard-logo" />

      <img src={readyPop} alt="Ready to Pop" className="ready-pop-img" />

      <Link to="/Detail">
        <img src={startButton} alt="Start Popping" className="dashboard-button" />
      </Link>

      <Link to="/Puzzle">
        <img src={puzzleButton} alt="Puppy Puzzle" className="dashboard-button" />
      </Link>

      <section className="dashboard-stats">
        <p>High Score: {localStorage.getItem("highScore") || 0}</p>
        <p>Puppies Unlocked: 12</p>
        <p>Treats Collected: 120</p>
      </section>
    </main>
  );
}

export default Home;