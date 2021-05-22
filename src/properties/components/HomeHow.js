import React from "react";
import "./HomeHow.css";
import { FaBuilding, FaSearch, FaList } from "react-icons/fa";

const HomeHow = () => {
  return (
    <div className="home-how">
      <div className="home-how-title">
        <h4>how it works</h4>
        <p>
          How it works is very simple, just pay in the amount you want to invest
          into the companies account , send us a comfirmation slip of your
          payment , we will verify it and get back to you with the plan of your
          choice listed in your personal account, with the payment details.
        </p>
      </div>
      <div>
        <div className="home-how-content-logo">
          <div className="home-how-content">
            <div className="home-how-logo">
              <FaList className="home-how-icon" />
            </div>
            <div className="home-how-text">
              <h4>register</h4>
              <p>
                Register to join our platform to enjoy our wide network either
                as a real estate agent or a person searching for property. Join
                Our Network Now!
              </p>
            </div>
          </div>
          <div className="home-how-content">
            <div className="home-how-logo">
              <FaBuilding className="home-how-icon" />
            </div>
            <div className="home-how-text">
              <h4>create property</h4>
              <p>
                Register to join our platform to enjoy our wide network either
                as a real estate agent or a person searching for property. Join
                Our Network Now!
              </p>
            </div>
          </div>
          <div className="home-how-content">
            <div className="home-how-logo">
              <FaSearch className="home-how-icon" />
            </div>
            <div className="home-how-text">
              <h4>search property</h4>
              <p>
                Register to join our platform to enjoy our wide network either
                as a real estate agent or a person searching for property. Join
                Our Network Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHow;
