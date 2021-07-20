import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPageTwo extends Component {
  state = {
    description: "",
    descriptionValid: false,
    // creator: "",
    // creatorValid: false,
    latitude: "",
    latitudeValid: false,
    longitude: "",
    longitudeValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const {
      descriptionValid,
      // creatorValid,
      latitudeValid,
      longitudeValid,
    } = this.state;
    this.setState({
      formValid:
        descriptionValid  && latitudeValid && longitudeValid,
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
                <ValidationMessage
                  valid={latitudeValid}
                  message={errorMsg.latitude}
                />
                <input
                  name="latitude"
                  type="number"
                  placeholder="Latitude"
                  className="form-field"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => latitudeChange(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={longitudeValid}
                  message={errorMsg.longitude}
                />
                <input
                  name="longitude"
                  type="number"
                  placeholder="Longitude"
                  className="form-field"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => longitudeChange(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={descriptionValid}
                  message={errorMsg.description}
                />
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
