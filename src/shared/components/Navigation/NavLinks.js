import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navbar-main-links">
      <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/"
          >
            home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/how-works"
          >
            how it works
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/features"
          >
            features
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
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
            className="navbar-single-link"
            to="/make-payment"
          >
            make a payment
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/signin"
          >
            sign in
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/signup"
          >
            get started
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
