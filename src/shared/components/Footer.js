import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <b> bnk-homes</b>
      </div>
      <div className="upper-footer">
        <ul>
          <li>about us</li>
          <li>contact us</li>
          <li>faqs</li>
          <li>terms of service & privacy policy</li>
        </ul>
      </div>
      <div className="lower-footer">
        <p>copyright &copy; of bnk-homes 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
