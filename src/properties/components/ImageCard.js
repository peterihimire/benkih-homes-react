import React, { Component } from "react";
import "./ImageCard.css";
// import Card from "../../shared/components/UIElements/Card";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class ImageCard extends Component {
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
        <div className="image-card">
          <img
            // src={imgsArr}
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
export default ImageCard;

// const ImageCard = (props) => {
//   // console.log(props);
//   const { imgsArr } = props;
//   console.log(imgsArr);
//   return (
//     <Card>
//       <div className="">{/* <img src={} alt='house' /> */}</div>
//     </Card>
//   );
// };
