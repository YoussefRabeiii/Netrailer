import React from "react";
import { Link } from "react-router-dom";

import { Social } from "./";
import { FaCode, FaRegHeart, FaCoffee } from "react-icons/fa";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <h1 className="logo footer__logo">NeTrailer</h1>
      </Link>

      <h1>Find Me On</h1>
      <Social />

      <h5>
        <FaCode className="footer__icons code" title="Made" /> with
        <FaRegHeart className="footer__icons love" title="Love" /> and
        <FaCoffee className="footer__icons coffee" title="Coffee" /> by{" "}
        <a href="https://youssefrabei.netlify.com">
          <i>Youssef Rabei</i>
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
