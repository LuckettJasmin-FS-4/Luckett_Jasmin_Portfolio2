import { Link } from "react-router-dom";

import homeButton from "../assets/homeButton.png";
import searchButton from "../assets/searchButton.png";
import dogsButton from "../assets/dogsButton.png";
import settingsButton from "../assets/settingsButton.png";

function Navbar() {
  return (
    <nav className="top-menu">
      <Link to="/">
        <img src={homeButton} alt="Home" />
      </Link>

      <Link to="/Search">
        <img src={searchButton} alt="Search" />
      </Link>

      <Link to="/Overview">
        <img src={dogsButton} alt="Overview" />
      </Link>

      <Link to="/Settings">
        <img src={settingsButton} alt="Settings" />
      </Link>
    </nav>
  );
}

export default Navbar;