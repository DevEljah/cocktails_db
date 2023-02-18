import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import logo1 from "../logo1.png";
import logo2 from "../logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo2} alt="cocktail db logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
