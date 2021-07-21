import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Real Estate Advice for real locals.</h1>
            <p>
              Have you ever thought about investing your hard-earned money on
              something worth it. Invest in our real-estate plan , ranging from
              as low as 50 thousand to 100 million naira, and be sure to get 10%
              RIO . To get started, hit the get started button.
            </p>
            <button className="btn btn-bigger">
              <Link to="/property/new">add property</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
