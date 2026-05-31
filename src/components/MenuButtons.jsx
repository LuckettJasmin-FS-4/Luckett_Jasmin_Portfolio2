import { Link } from "react-router-dom";

import homeButton from "../assets/homeButton.png";
import searchButton from "../assets/searchButton.png";
import overviewButton from "../assets/overviewButton.png";

function MenuButtons() {
  return (
    <nav className="top-left-menu">
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
  );
}

export default MenuButtons;