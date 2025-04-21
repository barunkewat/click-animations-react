import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/">
          Click Anima
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            HOME
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/work">
            WORK
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
