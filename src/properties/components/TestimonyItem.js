import React from "react";
import "./TestimonyItem.css";
import Card from "../../shared/components/UIElements/Card";

const TestimonyItem = (props) => {
  console.log(props);
  const { testimonials } = props;
  console.log(testimonials);
  return (
    <Card className="testimonials-card">
      <div className="testimonials-content">
        <div className="testimonials-img">
          <img src={testimonials.image} alt="people" />
        </div>
        <div className="testimonials-content-text">
          <p>{testimonials.testimony}</p>
          <div className="testimonials-b">
            <b>{testimonials.name}</b>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonyItem;
