import React, { useContext, useState } from "react";
import "./NavLinksMob.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import SignOutModal from "../UIElements/SignOutModal";

const NavLinksMob = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const auth = useContext(AuthContext);
  console.log(auth);

  const showSignOutHandler = () => {
    setShowSignOut(true);
    // auth.logout;
    // setSignOut(auth.logout)
  };
  const cancelSignOutHandler = () => {
    setShowSignOut(false);
  };

  return (
    <>
      <SignOutModal
        show={showSignOutHandler}
        onConfirm={auth.logout}
        onCancel={cancelSignOutHandler}
        onSignOut={showSignOut}
      />
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
              <button
                className="navbar-signout-mob "
                onClick={showSignOutHandler}
              >
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
    </>
  );
};

export default NavLinksMob;
