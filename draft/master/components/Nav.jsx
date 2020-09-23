import React, { useState, useEffect } from "react";

import "../css/nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);

  const handleNav = (boolean) => (boolean ? setShow(true) : setShow(false));

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.screenY > 100 ? handleNav(true) : handleNav(false)
    );

    return window.removeEventListener("scroll", () => console.log("Removed the event listener"));
  }, []);

  return (
    <nav className={`nav ${show && "nav--scroll"}`}>
      <img src="" alt="Our Logo" className="nav__logo" />
    </nav>
  );
};

export default Nav;
