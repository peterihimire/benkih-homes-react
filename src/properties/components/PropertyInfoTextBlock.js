import React from "react";
import "./PropertyInfoTextBlock.css";

const PropertyInfoTextBlock = (props) => {
  console.log(props);
  const { property } = props;
  console.log(property);
  const propertyExtras = [
    property.miniTheater === true ? "Mini Theater" : null,
    property.furnished === true ? "Furnished" : null,
    property.inDoorPool === true ? "Indoor Pool" : null,
    property.outDoorPool === true ? "Outdoor Pool" : null,
    "Complete legal document",
  ];
  console.log(propertyExtras);

  return (
    <div className="property-info-text-block">
      <div className="property-main-info-div">
        <div className="property-main-info">
          <div className="detail-info-div property-detail-div">
            <h3>details</h3>
            <div className="property-detail-div-text">
              <p>{property.description}</p>
            </div>
          </div>
          <div className="detail-info-div property-info-div">
            <h3>info</h3>
            <div>
              <div className="property-info-span">
                <p>Price : </p>
                <span> ${property.amount} Million</span>
              </div>
              <div className="property-info-span">
                <p>Condition : </p>
                <span>
                  {property.newProperty === true ? "New" : "Pre-Owned"}
                </span>
              </div>
              <div className="property-info-span">
                <p>No. of Bedroom : </p>
                <span> {property.bedroom}</span>
              </div>
              <div className="property-info-span">
                <p>No. of Bathroom : </p>
                <span> {property.bathroom}</span>
              </div>
              <div className="property-info-span">
                <p>State Location : </p>
                <span> {property.propertyState}</span>
              </div>
              <div className="property-info-span">
                <p>City Location : </p>
                <span> {property.propertyCity}</span>
              </div>
              <div className="property-info-span">
                <p>Address : </p>
                <span> {property.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="property-extra-info-div">
        <h3>extras</h3>
        <div className="property-extra-info">
          <p>- Mini Theater</p>
          <p>- Furnished</p>
          <p>- Indoor Pool</p>
          <p>- Outdoor Pool</p>
          <p>- Complete legal documents</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfoTextBlock;
