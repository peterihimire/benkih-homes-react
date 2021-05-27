import React, { Component } from "react";
import "./HomeTestimonials.css";
// NOTE react-slick and slick-carousel are needed for the react-slick slider to work
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonyItem from "../components/TestimonyItem";
import testimonies from "../../testimonial-items";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

class HomeTestimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 4000,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="home-testimonials">
        <div className="home-testimonials-head">
          <h4 className="testimonials-small-font">Testimonials</h4>
          <h4 className="testimonials-medium-font">what they are saying</h4>
          <p>
            Feel free to read about the comments of customers and sellers making
            use of our platform. And you are also free to write down your
            comments for our review which we will update at the appropriate
            time.
          </p>
        </div>
        <div className="home-slider-container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {testimonies.map((testimony) => {
              console.log(testimony);
              return (
                <TestimonyItem key={testimony.id} testimonials={testimony} />
              );
            })}
          </Slider>
          <div className="slick-btn-container" style={{ textAlign: "right" }}>
            <button className="chev-btn testimony-chev" onClick={this.previous}>
              <FaChevronLeft className="arrow-icon" />
            </button>
            <button className="chev-btn testimony-chev" onClick={this.next}>
              <FaChevronRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTestimonials;
