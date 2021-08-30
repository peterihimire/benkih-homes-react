import React, { Component } from "react";
import "./ImageCard.css";
import "./LaptopImgCard.css";
// import Card from "../../shared/components/UIElements/Card";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class LaptopImgCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    console.log(this.props);
    const { imgsArr, imgsArrLen, galleryImgs } = this.props;

    // Length of the array which is converted to integer
    const imgsArrLength = imgsArrLen;

    console.log(imgsArrLen);
    console.log(imgsArr);
    console.log(this.props);

    const { photoIndex, isOpen } = this.state;

    return (
      <>
        {/* <Card> */}

        <div className="gallery-img">
          <img
            src={galleryImgs}
            alt="house"
            onClick={() => this.setState({ isOpen: true })}
          />
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={`${imgsArr[photoIndex]}`}
            nextSrc={`${imgsArr[(photoIndex + 1) % parseInt(imgsArrLength)]}`}
            prevSrc={`${
              imgsArr[
                (photoIndex + parseInt(imgsArrLength) - 1) %
                  parseInt(imgsArrLength)
              ]
            }`}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: `${photoIndex + 1}` % parseInt(imgsArrLength),
              })
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + parseInt(imgsArrLength) - 1) %
                  parseInt(imgsArrLength),
              })
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
        {/* </Card> */}
      </>
    );
  }
}
export default LaptopImgCard;
