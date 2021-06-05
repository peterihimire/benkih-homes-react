import React from "react";
import "./NavLinks.css";
import { NavLink, Link } from "react-router-dom";

const NavLinks = (props) => {
  const { scrollColor } = props;
  console.log(props);
  return (
    <div className="navbar-main-links">
      <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink
            exact
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/how-works"
          >
            how it works
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/features"
          >
            features
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/about"
          >
            about
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-links make-payment-link">
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/make-payment"
          >
            make a payment
          </NavLink>
        </li>
      </ul>
      <div className="navbar-links-buttons">
        <div className="navbar-item-button">
          <NavLink
            activeClassName="active"
            className={
              scrollColor
                ? "navbar-single-link navbar-single-color"
                : "navbar-single-link"
            }
            to="/signin"
          >
            sign in
          </NavLink>
        </div>
        <div className="navbar-links-getstarted">
          <Link to="/register">
            <button className="btn">register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
