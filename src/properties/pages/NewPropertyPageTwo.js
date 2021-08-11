import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
import { FaArrowLeft, FaTimesCircle } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPageTwo extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();

    this.state = {
      description: "",
      descriptionValid: false,
      // creator: "",
      // creatorValid: false,
      latitude: "",
      latitudeValid: false,
      longitude: "",
      longitudeValid: false,
      formValid: false,
      // for images
      images: [],
      previews: [],
      errorMsg: {},
      loading: false,
      error: "",
    };
  }

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const {
      descriptionValid,
      // creatorValid,
      latitudeValid,
      longitudeValid,
    } = this.state;
    this.setState({
      formValid: descriptionValid && latitudeValid && longitudeValid,
    });
  };

  // FOR DESCRIPTION VALIDATION
  updateDescription = (description) => {
    this.setState({ description }, this.validateDescription);
  };

  validateDescription = () => {
    const { description } = this.state;
    let descriptionValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (description.length < 7) {
      descriptionValid = false;
      errorMsg.description = "Must be at least 7 characters long";
    }

    this.setState({ descriptionValid, errorMsg }, this.validateForm);
  };

  // // FOR CREATOR VALIDATION
  // updateCreator = (creator) => {
  //   this.setState({ creator }, this.validateCreator);
  // };

  // validateCreator = () => {
  //   const { creator } = this.state;
  //   let creatorValid = true;
  //   let errorMsg = { ...this.state.errorMsg };

  //   if (creator.length < 7) {
  //     creatorValid = false;
  //     errorMsg.creator = "Must be at least 7 characters long";
  //   }

  //   this.setState({ creatorValid, errorMsg }, this.validateForm);
  // };

  // FOR LATITUDE VALIDATION
  updateLatitude = (latitude) => {
    this.setState({ latitude }, this.validateLatitude);
  };

  validateLatitude = () => {
    const { latitude } = this.state;
    let latitudeValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/\d/.test(latitude)) {
      latitudeValid = false;
      errorMsg.latitude = "Latitude must contain only digits";
    }

    this.setState({ latitudeValid, errorMsg }, this.validateForm);
  };

  // FOR LONGITUDE VALIDATION
  updateLongitude = (longitude) => {
    this.setState({ longitude }, this.validateLongitude);
  };

  validateLongitude = () => {
    const { longitude } = this.state;
    let longitudeValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/\d/.test(longitude)) {
      longitudeValid = false;
      errorMsg.longitude = "Latitude must contain only digits";
    }

    this.setState({ longitudeValid, errorMsg }, this.validateForm);
  };

  // FOR IMAGES PREVIEW AND UPLOADING OF MULTIPLE IMAGES
  onChangePropertiesImages = (e) => {
    // console.log(e.target.files);
    const files = e.target.files;
    let imagesUploadArray = Array.from(files);
    console.log(imagesUploadArray);
    if (imagesUploadArray) {
      const fileArray = imagesUploadArray.map((file, index) => {
        console.log(file, index);
        // setImages(imagesUploadArray);
        this.setState({ images: imagesUploadArray });
        return URL.createObjectURL(file);
      });
      console.log(fileArray);
      // setPreviews((prevImgs) => {
      //   return prevImgs.concat(fileArray);
      // });
      this.setState((prevImgs) => {
        console.log(prevImgs.images);
        return { previews: fileArray };
      });
      imagesUploadArray.map((files) => {
        return URL.revokeObjectURL(files);
      });
    }
  };
  // console.log(this.images);
  renderImages = (source) => {
    console.log(source);
    return source.map((image, index) => {
      console.log(image, index);
      return (
        this.state.images && (
          <div className="image-with-cancel" key={image}>
            {/* <img
              // src={cancelIcon}
              alt="red x"
              key={image}
              className="cancel-icon"
              onClick={() => {
                console.log(`${index} Image clicked!`);
                // let img = index;
                // // Deletes the blob image
                // source.splice(img, 1);
                // // Deletes the file image
                // setImages((prevImgs) => {
                //   console.log(img);
                //   console.log(prevImgs);
                //   return prevImgs.filter((image, index) => {
                //     console.log(index);
                //     return index !== img;
                //   });
                // });
              }}
            /> */}
            <div
              // className="cancelIcon"
              key={image}
              className="cancel-icon"
              onClick={() => {
                console.log(`${index} Image clicked!`);
                // let img = index;
                // // Deletes the blob image
                // source.splice(img, 1);
                // // Deletes the file image
                // setImages((prevImgs) => {
                //   console.log(img);
                //   console.log(prevImgs);
                //   return prevImgs.filter((image, index) => {
                //     console.log(index);
                //     return index !== img;
                //   });
                // });
              }}
            >
              <FaTimesCircle className="arrow-back-icon" />
            </div>
            <div className="render-images-div">
              <img
                src={image}
                alt="previews"
                key={image}
                className="upload-browse"
              />
            </div>
          </div>
        )
      );
    });
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      description,
      descriptionChange,
      descriptionValid,
      errorMsg,

      // creator,
      // creatorChange,
      // creatorValid,

      latitude,
      latitudeChange,
      latitudeValid,

      longitude,
      longitudeChange,
      longitudeValid,

      formTwoValid,
    } = this.props;
    return (
      <div className="auth-item">
        <div className="login-bg-div hidden-xs visible-md visible-xl">
          <img src={homeBg} alt="home" />
        </div>
        <div className="login-form">
          <div className="close-form-btn-div">
            <button
              className="back-btn"
              onClick={() => this.props.closeForm.history.goBack()}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>
          <div className="login-form-content">
            <div className="back-arrow">
              <button
                className="back-btn"
                // onClick={() => this.props.history.goBack()}
                // onClick={() => this.props.closeForm.history.goBack()}
                onClick={this.back}
              >
                <FaArrowLeft className="arrow-back-icon" />
              </button>
            </div>
            <div className="heading">
              <h2>Add new property.</h2>
              <p>Add or create new property for sale.</p>
            </div>
            <form>
              {/* <div className="form-group">
                <ValidationMessage
                  valid={creatorValid}
                  message={errorMsg.creator}
                />
                <input
                  name="creator"
                  type="creator"
                  placeholder="Creator"
                  className="form-field"
                  id="creator"
                  value={creator}
                  onChange={(e) => creatorChange(e.target.value)}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                  name="latitude"
                  type="number"
                  placeholder="Latitude"
                  className="form-field"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => latitudeChange(e.target.value)}
                />
                <ValidationMessage
                  valid={latitudeValid}
                  message={errorMsg.latitude}
                />
              </div>
              <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                  name="longitude"
                  type="number"
                  placeholder="Longitude"
                  className="form-field"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => longitudeChange(e.target.value)}
                />
                <ValidationMessage
                  valid={longitudeValid}
                  message={errorMsg.longitude}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="form-field-textarea"
                  id="description"
                  value={description}
                  onChange={(e) => descriptionChange(e.target.value)}
                  rows="4"
                ></textarea>
                <ValidationMessage
                  valid={descriptionValid}
                  message={errorMsg.description}
                />
              </div>
              <div className="form-group">
                <label htmlFor="images">Images</label>
                <div className="upload-browse-div">
                  {this.renderImages(this.state.previews)}
                </div>
                <div className="property-upload-div">
                  <input
                    type="file"
                    multiple
                    id="images"
                    name="images"
                    className="form-file"
                    accept="image/*"
                    onChange={this.onChangePropertiesImages}
                    ref={this.fileInputRef}
                  />
                  <button
                    className="property-upload-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      this.fileInputRef.current.click();
                    }}
                  >
                    Browse
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-full"
                disabled={!formTwoValid}
                onClick={this.continue}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPropertyPageTwo;
