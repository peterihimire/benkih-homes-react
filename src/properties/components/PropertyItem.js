import React from "react";
import "./PropertyItem.css";
import Card from "../../shared/components/UIElements/Card";
import "./PropertyItem.css";
import { FaBed, FaBath } from "react-icons/fa";

const PropertyItem = (props) => {
  const { properties } = props;
  console.log(props);
  return (
    <Card>
      <div className="property-item-img">
        <img src={properties.image} alt="home" />
      </div>
      <div>
        <h5>{properties.name}</h5>
        <div className="price-bed">
          <div>
            <h6>
              {properties.amount}
              <span> million</span>
            </h6>
          </div>
          <div className="flex-align">
            <p>{properties.bedrooms}</p>
            <span>{<FaBed className="arrow-icon" />}</span>
          </div>
        </div>
        <div className="location-shower">
          <div>
            <h6>{properties.location}</h6>
          </div>
          <div className="flex-align">
            <p>{properties.bathrooms}</p>
            <span>{<FaBath className="arrow-icon" />}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyItem;
