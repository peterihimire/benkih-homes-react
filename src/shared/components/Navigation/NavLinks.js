import React, { useContext, useState } from "react";
import "./NavLinks.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import SignOutModal from "../UIElements/SignOutModal";

const NavLinks = (props) => {
  const [showSignOut, setShowSignOut] = useState(false);
  const { scrollColor } = props;
  let history = useHistory();
  console.log(props);

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

  const mainLogout = () => {
    // clears out the user data to log user out
    auth.logout();
    // redirects to homepage when logged out
    history.push("/");
    // removes the stuck logout modal , when you logout from the homepage.
    const timer = setTimeout(() => {
      console.log("Clears the stuck modal in homepage, when signout.");
      cancelSignOutHandler();
    }, 500);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <SignOutModal
        show={showSignOutHandler}
        onConfirm={mainLogout}
        onCancel={cancelSignOutHandler}
        onSignOut={showSignOut}
      />
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

          {auth.isLoggedIn && (
            <li className="navbar-item">
              <NavLink
                activeClassName="active"
                className={
                  scrollColor
                    ? "navbar-single-link navbar-single-color"
                    : "navbar-single-link"
                }
                to="/profile"
              >
                profile
              </NavLink>
            </li>
          )}
          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={
                scrollColor
                  ? "navbar-single-link navbar-single-color"
                  : "navbar-single-link"
              }
              to="/properties"
            >
              properties
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
          {auth.isLoggedIn && (
            <li className="navbar-item">
              <NavLink
                activeClassName="active"
                className={
                  scrollColor
                    ? "navbar-single-link navbar-single-color"
                    : "navbar-single-link"
                }
                to="/property/new"
              >
                add property
              </NavLink>
            </li>
          )}
        </ul>
        <div className="navbar-links-buttons">
          {auth.isLoggedIn && (
            <div className="navbar-item-button">
              <button
                // activeClassName="active"
                className={
                  scrollColor
                    ? "navbar-signout navbar-signout-color"
                    : "navbar-signout"
                }
                onClick={showSignOutHandler}
              >
                sign out
              </button>
            </div>
          )}

          {!auth.isLoggedIn && (
            <div className="navbar-item-button">
              <NavLink
                activeClassName="active"
                className={
                  scrollColor
                    ? "navbar-single-link navbar-single-color"
                    : "navbar-single-link"
                }
                to="/login"
              >
                sign in
              </NavLink>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div className="navbar-links-getstarted">
              <Link to="/register">
                <button className="btn">get started</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
