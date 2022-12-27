import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import kartLogo from "./assets/kartLogo.png";
import profileLogo from "./assets/profileLogo.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/kart">
        <div className="kart-btn">
          <img src={kartLogo} alt="Kart Logo" />
          <span className="kart-icon-css">0</span>
        </div>
      </Link>
      <Link to="/profile">
        <div className="profile-btn">
          <img src={profileLogo} alt="Profile Logo" className="profile-icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
