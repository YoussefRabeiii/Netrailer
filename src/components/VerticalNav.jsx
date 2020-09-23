import React from "react";

import { FaHome, FaFilm, FaTv, FaPersonBooth } from "react-icons/fa";

import "./verticalNav.css";
const VerticalNav = () => {
  return (
    <nav className="vNav">
      <h1>
        Ne<span>T</span>railer
      </h1>

      <div className="vNav__list">
        <span>
          <FaHome className="nav__icons" />
          <h2>Home</h2>
        </span>

        <span>
          <FaFilm className="nav__icons" />
          <h2>Movies</h2>
        </span>

        <span>
          <FaTv className="nav__icons" />
          <h2>Series</h2>
        </span>

        <span>
          <FaPersonBooth className="nav__icons" />
          <h2>Actors/Actresses</h2>
        </span>
      </div>
    </nav>
  );
};

export default VerticalNav;
