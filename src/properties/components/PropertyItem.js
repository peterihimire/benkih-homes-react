import React from "react";
import "./PropertyItem.css";
import Card from "../../shared/components/UIElements/Card";
import "./PropertyItem.css";
import { FaBed, FaBath } from "react-icons/fa";
import imgProperty from "../../assets/property-1.jpg";

const PropertyItem = (props) => {
  const { properties } = props;
  console.log(props);
  return (
    <Card>
      <div className="property-item-img">
        <img src={imgProperty} alt="home" />
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
    </Card>
  );
};

export default PropertyItem;
