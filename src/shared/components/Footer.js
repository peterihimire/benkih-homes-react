import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <b> bnk-homes</b>
      </div>
      <div className="upper-footer">
        <ul>
          <li>
            <Link to="/about">about us</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <Link to="/faq">faq</Link>
          </li>
          <li>
            <Link to="/terms">terms of service</Link>
          </li>
          <li>
            <Link to="/privacy">privacy policy</Link>
          </li>
        </ul>
      </div>
      <div className="lower-footer">
        <p>
          copyright &copy; of
          <span>
            <b> bnk-homes </b>
          </span>
          2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
