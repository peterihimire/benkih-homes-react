import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./ProfilePropertyItem.css";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaInfo, FaTrash } from "react-icons/fa";
// import imgProperty from "../../assets/property-1.jpg";

const ProfilePropertyItem = (props) => {
  const { properties } = props;
  console.log(props);
  return (
    <Card className="property-card">
      {properties.propertyImages && (
        <article className="property">
          <div className="profile-property-item-img">
            <img src={properties.propertyImages[0]} alt="home" />
          </div>
          <div>
            <h5>{properties.title}</h5>
            <div className="price-bed">
              <div>
                <h6>
                  {properties.amount}
                  <span> million</span>
                </h6>
              </div>
              <div className="flex-align">
                <p>{properties.bedroom}</p>
                <span>{<FaBed className="arrow-icon" />}</span>
              </div>
            </div>
            <div className="location-shower">
              <div>
                <h6>{properties.address}</h6>
              </div>
              <div className="flex-align">
                <p>{properties.bathroom}</p>
                <span>{<FaBath className="arrow-icon" />}</span>
              </div>
            </div>
          </div>

          <div className="property-hover-options">
            <Link
              to={`/property/${properties.id}`}
              className="property-options-icon-btn"
            >
              <FaInfo className="option-icon" />
            </Link>
            {/* <Link
            to={`/property/${properties.id}`}
            className="property-options-icon-btn"
          >
            <FaMapMarker className="option-icon" />
          </Link> */}
            <button className="property-options-icon-btn">
              <FaTrash className="option-icon" />
            </button>
          </div>
        </article>
      )}
    </Card>
  );
};

export default ProfilePropertyItem;
