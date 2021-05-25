import React from "react";
import "./TestimonyItem.css";
import Card from "../../shared/components/UIElements/Card";

const TestimonyItem = (props) => {
  console.log(props);
  const { testimonials } = props;
  console.log(testimonials);
  return (
    <Card>
      <div className="testimonials-content">
        <div className="testimonials-img">
          <img src={testimonials.image} alt="people" />
        </div>
        <div>
          <p>{testimonials.testimony}</p>
          <b>{testimonials.name}</b>
        </div>
      </div>
    </Card>
  );
};

export default TestimonyItem;
