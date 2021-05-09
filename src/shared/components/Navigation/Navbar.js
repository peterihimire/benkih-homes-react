import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLinks from "../../components/Navigation/NavLinks";
import MenuIcon from "../../../assets/menu-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-head">
            <button
              className="navbar-btn"
              type="button"
              // onClick={props.clicked}
            >
              <img src={MenuIcon} alt="menu icon" className="menu-icon" />
            </button>
            <Link to="/" className="logo">
              <strong>
                benkih<span>-homes</span>{" "}
              </strong>
            </Link>
          </div>

          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
