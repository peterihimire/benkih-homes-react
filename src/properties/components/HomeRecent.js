import React from "react";
import "./HomeRecent.css";
import { Link } from "react-router-dom";
import PropertySlide from "../components/PropertySlide";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeRecent = () => {
  return (
    <div className="home-recent">
      <h4>Recent</h4>
      <div className="recent-flex-start">
        <h4>recently added properties</h4>
      </div>

      <div className="">
        <div className="more-flex-end">
          <Link to="/properties">
            <div className="more-arrow">
              <h4>Find more properties</h4>{" "}
              <span>{<FaLongArrowAltRight />}</span>
            </div>
          </Link>
        </div>

        <PropertySlide />
      </div>
    </div>
  );
};

export default HomeRecent;
