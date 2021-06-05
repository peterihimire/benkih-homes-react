import React from "react";
import "./NavLinksMob.css";
import { Link, NavLink } from "react-router-dom";

const NavLinksMob = () => {
  return (
    <div className="side-navbar-main">
      <ul className="side-navbar-links">
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/"
          >
            home
          </NavLink>
        </li>
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/how-works"
          >
            how it works
          </NavLink>
        </li>
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/features"
          >
            features
          </NavLink>
        </li>
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li className="side-navbar-item ">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/make-payment"
          >
            make a payment
          </NavLink>
        </li>
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/sign-in"
          >
            sign in
          </NavLink>
        </li>
      </ul>

      <Link to="/register">
        <button className="btn btn-side-navbar">get started</button>
      </Link>
    </div>
  );
};

export default NavLinksMob;
