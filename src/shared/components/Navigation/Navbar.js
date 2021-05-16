import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLinks from "../../components/Navigation/NavLinks";
import MenuIcon from "../../../assets/menu-icon.svg";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "../../components/Navigation/SideDrawer";
import NavLinksMob from "../Navigation/NavLinksMob";

const Navbar = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinksMob />
      </SideDrawer>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-main">
            <div className="navbar-head">
              <button
                className="navbar-btn"
                type="button"
                onClick={openDrawerHandler}
              >
                <img src={MenuIcon} alt="menu icon" className="menu-icon" />
              </button>
              <div className="navbar-logo-div">
                <Link to="/" className="navbar-logo">
                  <strong>
                    bnk<span>-homes</span>
                  </strong>
                </Link>
              </div>
            </div>
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
