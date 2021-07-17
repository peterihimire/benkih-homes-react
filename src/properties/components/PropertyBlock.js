import React from "react";
import "./PropertyBlock.css";
// import profIcon from "../../assets/profile.png";
import PropertyItem from "../components/PropertyItem";
import properties from "../../property-items";

const PropertyBlock = () => {
  console.log(properties);
  return (
    <div className="property-block">
      <div className="property-block-search">
        <p>search</p>
      </div>

      <div className="">
        <div className="property-block-grid">
          {properties.map((property) => {
            // return console.log(property);
            return (
              <div className="">
                <PropertyItem properties={property} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertyBlock;
