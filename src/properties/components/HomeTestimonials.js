import React, { Component } from "react";
import "./HomeTestimonials.css";
// NOTE react-slick and slick-carousel are needed for the react-slick slider to work
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/profile.png";
// import Card from '../../shared/components/UIElements/Card';

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
      speed: 500,
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
        <h4>Testimonials</h4>
        <h4>what they are saying</h4>
        <p>
          Feel free to read about the comments of customers and sellers making
          use of our platform. And you are also free to write down your comments
          for our review which we will update at the appropriate time.
        </p>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <div className="testimonials-content">
              <div className="testimonials-img">
                <img src={img} alt="people" />
              </div>
              <div>
                <p>
                  BNK realestate is the estate for you to invest your
                  hard-earned money. Feel free to read about the comments of
                  customers and sellers making use of our platform. And you are
                  also free to write down your comments for our review which we
                  will update at the appropriate time.
                </p>
                <b>Ihimire Peter</b>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonials-content">
              <div className="testimonials-img">
                <img src={img} alt="people" />
              </div>
              <div>
                <p>
                  BNK realestate is the estate for you to invest your
                  hard-earned money. Feel free to read about the comments of
                  customers and sellers making use of our platform. And you are
                  also free to write down your comments for our review which we
                  will update at the appropriate time.
                </p>
                <b>Ihimire Peter</b>
              </div>
            </div>
          </div>
        </Slider>
        <div className="r-slick-container" style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            <i className="material-icons left">chevron_left</i>
          </button>
          <button className="button" onClick={this.next}>
            <i className="material-icons right">chevron_right</i>
          </button>
        </div>
        {/* <div className="main-testimonials">
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
        </div> */}
      </div>
    );
  }
}

export default HomeTestimonials;
