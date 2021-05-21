import React from "react";
import "./PropertyItem.css";
import Card from "../../shared/components/UIElements/Card";
import "./PropertyItem.css";

const PropertyItem = (props) => {
  const { properties } = props;
  console.log(props);
  return (
    <Card>
      <h3>{properties.name}</h3>
    </Card>
  );
};

export default PropertyItem;
