import { Link } from "react-router-dom";

import logo from "../assets/logophoto.png";

function Overview() {
  return (
    <main className="overview-screen">

      <Link to="/" className="back-button">
        ←
      </Link>

      <img src={logo} alt="Logo" className="overview-logo" />

      <section className="overview-card">
        <h2>GAME PURPOSE</h2>

        <p>
          A cute arcade game where players tap
          popping chibi dogs and play a bonus puzzle game.
        </p>
      </section>

      <section className="overview-card">
        <h2>MAIN FEATURES</h2>

        <ul>
          <li>Tap chibi dogs for points</li>
          <li>Unlock puppies and accessories</li>
          <li>Collect treats and rewards</li>
          <li>Customize music and settings</li>
          <li>Track scores and achievements</li>
        </ul>
      </section>

      <section className="overview-card">
        <h2>PAGES INCLUDED</h2>

        <p>Dashboard / Main</p>

        <p>User / Settings</p>

        <p>Search Page</p>
      </section>

    </main>
  );
}

export default Overview;