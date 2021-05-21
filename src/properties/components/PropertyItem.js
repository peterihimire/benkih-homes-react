import React from "react";
import "./PropertyItem.css";
import Card from "../../shared/components/UIElements/Card";
import "./PropertyItem.css";

const PropertyItem = (props) => {
  const { properties } = props;
  console.log(props);
  return (
    <Card>
      <div className='property-item-img'>
        <img src={properties.image} alt="home" />
      </div>
      <h3>{properties.name}</h3>
    </Card>
  );
};

export default PropertyItem;
