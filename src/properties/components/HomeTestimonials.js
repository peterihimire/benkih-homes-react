import React from "react";
import "./HomeTestimonials.css";
import img from "../../assets/profile.png";
// import Card from '../../shared/components/UIElements/Card';

const HomeTestimonials = () => {
  return (
    <div className="home-testimonials">
      <h4>Testimonials</h4>
      <h4>what they are saying</h4>
      <p>
        Feel free to read about the comments of customers and sellers making use
        of our platform. And you are also free to write down your comments for
        our review which we will update at the appropriate time.
      </p>
      <div className="main-testimonials">
        {/* <Card> */}
          <div className="testimonials-content">
            <div className="testimonials-img">
              <img src={img} alt="people" />
            </div>
            <div>
              <p>
                BNK realestate is the estate for you to invest your hard-earned
                money. Feel free to read about the comments of customers and
                sellers making use of our platform. And you are also free to
                write down your comments for our review which we will update at
                the appropriate time.
              </p>
              <b>Ihimire Peter</b>
            </div>
          </div>
        {/* </Card> */}
      </div>
    </div>
  );
};

export default HomeTestimonials;
