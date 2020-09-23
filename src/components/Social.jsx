import React from "react";

import {
  FaDev,
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./social.css";
const Social = () => {
  return (
    <ul className="social">
      <li>
        <a href="https://youssefrabei.netlify.com">
          <FaGlobe className="social__fa" />
        </a>
      </li>
      <li>
        <a href="https://github.com/youssefRabeiii">
          <FaGithub className="social__fa" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/youssefRabeiii">
          <FaTwitter className="social__fa" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/youssefRabeiii/">
          <FaInstagram className="social__fa" />
        </a>
      </li>
      <li>
        <a href="https://dev.to/youssefRabeiii">
          <FaDev className="social__fa" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
