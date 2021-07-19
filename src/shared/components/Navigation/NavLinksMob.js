import React, { useContext } from "react";
import "./NavLinksMob.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const NavLinksMob = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

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
        {auth.isLoggedIn && (
          <li className="side-navbar-item">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/profile"
            >
              profile
            </NavLink>
          </li>
        )}
        <li className="side-navbar-item">
          <NavLink
            activeClassName="active"
            className="navbar-single-link"
            to="/properties"
          >
            properties
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
        {auth.isLoggedIn && (
          <li className="side-navbar-item ">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/property/new"
            >
              add property
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="side-navbar-item">
            <button className="navbar-signout-mob " onClick={auth.logout}>
              sign out
            </button>
          </li>
        )}

        {!auth.isLoggedIn && (
          <li className="side-navbar-item">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/login"
            >
              sign in
            </NavLink>
          </li>
        )}
      </ul>

      {!auth.isLoggedIn && (
        <Link to="/register">
          <button className="btn btn-side-navbar">get started</button>
        </Link>
      )}
    </div>
  );
};

export default NavLinksMob;
