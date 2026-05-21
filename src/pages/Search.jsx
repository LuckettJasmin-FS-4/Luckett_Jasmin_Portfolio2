import { Link } from "react-router-dom";

import logo from "../assets/logophoto.png";

import poppy from "../assets/poppyCard.png";
import boba from "../assets/bobaCard.png";
import mochi from "../assets/mochiCard.png";
import tofu from "../assets/tofuCard.png";
import peanut from "../assets/peanutCard.png";
import biscuit from "../assets/biscuitCard.png";

function Search() {
  return (
    <main className="search-app-screen">

      <Link to="/" className="back-button">
        ←
      </Link>

      <img src={logo} alt="Logo" className="search-logo" />

      <h1 className="search-title">SEARCH</h1>

      <section className="search-box">
        <input type="text" placeholder="Search Puppies..." />
        <span>🔎</span>
      </section>

      <section className="search-puppy-grid">

        <button>
          <img src={poppy} alt="Poppy" />
        </button>

        <button>
          <img src={boba} alt="Boba" />
        </button>

        <button>
          <img src={mochi} alt="Mochi" />
        </button>

        <button>
          <img src={tofu} alt="Tofu" />
        </button>

        <button>
          <img src={peanut} alt="Peanut" />
        </button>

        <button>
          <img src={biscuit} alt="Biscuit" />
        </button>

      </section>
    </main>
  );
}

export default Search;