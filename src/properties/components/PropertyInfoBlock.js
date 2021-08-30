import React, { useState } from "react";
import "./PropertyInfoBlock.css";
import ItemsCarousel from "react-items-carousel";
// import images from "../../images-array";
import ImageCard from "./ImageCard";
import LaptopImgCard from "./LaptopImgCard";


const PropertyInfoBlock = (props) => {
  console.log(props);
  // console.log(images);
  const { propertyImgs } = props;
  console.log(propertyImgs);

  
  const pixArr = propertyImgs;

  console.log(pixArr);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <>
      {/* FOR PHONE */}
      { pixArr &&  <div className="visible-xs hidden-md carousel-div">
        <div className="carousel">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2.2}
            gutter={5}
            slidesToScroll={1}
            firstAndLastGutter={true}
            freeScrolling={true}
            outsideChevron
            showSlither={true}
          >
            {pixArr.map((imageArr, index) => (
              <ImageCard
                key={index}
                galleryImgs={imageArr}
                imgsArrLen={pixArr.length}
                imgsArr={pixArr}
              />
            ))}
          </ItemsCarousel>
        </div>
      </div>}
      {/* FOR TABLET */}
      { pixArr &&  <div className="hidden-xs visible-md profile-scapes">
        <div className="carousel">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2.8}
            gutter={7}
            freeScrolling={true}
            slidesToScroll={1}
            firstAndLastGutter={true}
            outsideChevron
            showSlither={true}
          >
            {pixArr.map((imageArr, index) => (
              <ImageCard
                key={index}
                galleryImgs={imageArr}
                imgsArrLen={pixArr.length}
                imgsArr={pixArr}
              />
            ))}
          </ItemsCarousel>
        </div>
      </div>}

      {/* FOR LAPTOP */}
      { pixArr &&  <div className="main-content">
        <div className="main-content-container">
          <div className="hidden-xs hidden-md visible-xl profile-scapes">
            <div className="gallery-img-grid">
              {pixArr.map((imageArr, index) => (
                <LaptopImgCard
                  key={index}
                  galleryImgs={imageArr}
                  imgsArrLen={pixArr.length}
                  imgsArr={pixArr}
                />
              ))}
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default PropertyInfoBlock;
