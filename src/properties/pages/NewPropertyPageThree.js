import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPageThree extends Component {
  state = {
    description: "",
    descriptionValid: false,
    creator: "",
    creatorValid: false,
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
      creatorValid,
      latitudeValid,
      longitudeValid,
    } = this.state;
    this.setState({
      formValid:
        descriptionValid && creatorValid && latitudeValid && longitudeValid,
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

  // FOR CREATOR VALIDATION
  updateCreator = (creator) => {
    this.setState({ creator }, this.validateCreator);
  };

  validateCreator = () => {
    const { creator } = this.state;
    let creatorValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (creator.length < 7) {
      creatorValid = false;
      errorMsg.creator = "Must be at least 7 characters long";
    }

    this.setState({ creatorValid, errorMsg }, this.validateForm);
  };

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
  render() {
    return (
      <div className="auth-item">
        <div className="login-bg-div hidden-xs visible-md visible-xl">
          <img src={homeBg} alt="home" />
        </div>
        <div className="login-form">
          <div className="login-form-content">
            <div className="back-arrow">
              <button
                className="back-btn"
                onClick={() => this.props.history.goBack()}
              >
                <FaArrowLeft className="arrow-back-icon" />
              </button>
            </div>
            <div className="heading">
              <h2>Add new property.</h2>
              <p>Add or create new property for sale.</p>
            </div>
            <form>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.creatorValid}
                  message={this.state.errorMsg.creator}
                />
                <input
                  name="creator"
                  type="creator"
                  placeholder="Creator"
                  className="form-field"
                  id="creator"
                  value={this.state.creator}
                  onChange={(e) => this.updateCreator(e.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="viewerLoc">Prioritized viewers Location</label> */}

                <ValidationMessage
                  valid={this.state.creatorValid}
                  message={this.state.errorMsg.creator}
                />
                <select
                  type="text"
                  name="viewerLoc"
                  className="form-control my-select form-field"
                  id="viewerLoc"
                  placeholder=""
                  required
                  // value={viewerLoc}
                  // onChange={setForm}
                >
                  <option value="none">Choose City ...</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Lekki">Lekki</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Ikoyi">Ikoyi</option>
                </select>
              </div>

              <div className="form-group">
                {/* <label htmlFor="viewerLoc">Prioritized viewers Location</label> */}
                <ValidationMessage
                  valid={this.state.creatorValid}
                  message={this.state.errorMsg.creator}
                />
                <select
                  type="text"
                  name="viewerLoc"
                  className="form-control my-select form-field"
                  id="viewerLoc"
                  placeholder=""
                  required
                  // value={viewerLoc}
                  // onChange={setForm}
                >
                  <option value="none">Choose State ...</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Edo">Edo</option>
                  <option value="Imo">Imo</option>
                  <option value="Rivers">Rivers</option>
                </select>
              </div>

              <div className="form-group form-group-radio">
                <label htmlFor="Featured">Featured</label>
                <div className=" privacy-radio-div">
                  <div className="radio-public">
                    <input
                      type="radio"
                      // id="radioPublic"
                      name="privacy"
                      className="radio-privacy"
                      // value={privacyPublic}
                      value="yes"
                      defaultChecked
                      // onChange={setForm}
                    />
                    <label
                      className="radio-privacy-label"
                      htmlFor="radioPublic"
                    >
                      Yes
                    </label>
                    <p>Will be featured</p>
                  </div>

                  <div>
                    <input
                      type="radio"
                      // id="radioPrivate"
                      name="privacy"
                      className="radio-privacy"
                      // value={privacyPrivate}
                      value="private"
                      // onChange={setForm}
                    />
                    <label
                      className="radio-privacy-label"
                      htmlFor="radioPrivate"
                    >
                      No
                    </label>
                    <p>Will not be featured</p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <ValidationMessage
                  valid={this.state.latitudeValid}
                  message={this.state.errorMsg.latitude}
                />
                <input
                  name="latitude"
                  type="number"
                  placeholder="Latitude"
                  className="form-field"
                  id="latitude"
                  value={this.state.latitude}
                  onChange={(e) => this.updateLatitude(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.longitudeValid}
                  message={this.state.errorMsg.longitude}
                />
                <input
                  name="longitude"
                  type="number"
                  placeholder="Longitude"
                  className="form-field"
                  id="longitude"
                  value={this.state.longitude}
                  onChange={(e) => this.updateLongitude(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={this.state.descriptionValid}
                  message={this.state.errorMsg.description}
                />
                <textarea
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="form-field-textarea"
                  id="description"
                  value={this.state.description}
                  onChange={(e) => this.updateDescription(e.target.value)}
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-full"
                disabled={!this.state.formValid}
                onClick={this.continue}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPropertyPageThree;
