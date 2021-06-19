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

class NewPropertyPageThree extends Component {
  state = {
    propertyCity: "",
    propertyCityValid: false,
    propertyState: "",
    propertyStateValid: false,
    featured: "",
    featuredValid: false,
    recent: "",
    recentValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    const { propertyCityValid, propertyStateValid } = this.state;
    this.setState({
      formValid: propertyCityValid && propertyStateValid,
    });
  };

  // FOR CITY VALIDATION
  updatePropertyCity = (propertyCity) => {
    this.setState({ propertyCity }, this.validatePropertyCity);
  };

  validatePropertyCity = () => {
    const { propertyCity } = this.state;
    console.log(propertyCity);
    let propertyCityValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (propertyCity === "none") {
      propertyCityValid = false;
      errorMsg.propertyCity = "Please choose a city";
    }

    this.setState({ propertyCityValid, errorMsg }, this.validateForm);
  };

  // FOR STATE VALIDATION
  updatePropertyState = (propertyState) => {
    this.setState({ propertyState }, this.validatePropertyState);
  };

  validatePropertyState = () => {
    const { propertyState } = this.state;
    let propertyStateValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (propertyState === "none") {
      propertyStateValid = false;
      errorMsg.propertyState = "Please choose a state";
    }

    this.setState({ propertyStateValid, errorMsg }, this.validateForm);
  };

  // // FOR FEATURED VALIDATION
  // updateFeatured = (featured) => {
  //   this.setState({ featured }, this.validateFeatured);
  // };

  // validateFeatured = () => {
  //   const { featured } = this.state;
  //   let featuredValid = true;
  //   let errorMsg = { ...this.state.errorMsg };

  //   if (featured.length < 4) {
  //     featuredValid = false;
  //     errorMsg.featured = "Latitude must contain only digits";
  //   }

  //   this.setState({ featuredValid, errorMsg }, this.validateForm);
  // };

  // // FOR RECENT VALIDATION
  // updateRecent = (recent) => {
  //   this.setState({ recent }, this.validateRecent);
  // };

  // validateRecent = () => {
  //   const { recent } = this.state;
  //   console.log(recent);
  //   let recentValid = true;
  //   let errorMsg = { ...this.state.errorMsg };

  //   if (recent.length < 4) {
  //     recentValid = false;
  //     errorMsg.recent = "Latitude must contain only digits";
  //   }

  //   this.setState({ recentValid, errorMsg }, this.validateForm);
  // };

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
      bedroom,
      bedroomChange,
      bedroomValid,
      errorMsg,

      bathroom,
      bathroomChange,
      bathroomValid,

      propertyCity,
      propertyCityChange,
      propertyCityValid,

      propertyState,
      propertyStateChange,
      propertyStateValid,

      // featured,
      // featuredChange,
      // featuredValid,

      // recent,
      // recentChange,
      // recentValid,

      formThreeValid,
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

              <div className="form-group">
                <ValidationMessage
                  valid={bedroomValid}
                  message={errorMsg.bedroom}
                />
                <input
                  name="bedroom"
                  type="number"
                  placeholder="bedroom"
                  className="form-field"
                  id="bedroom"
                  value={bedroom}
                  onChange={(e) => bedroomChange(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ValidationMessage
                  valid={bathroomValid}
                  message={errorMsg.bathroom}
                />
                <input
                  name="bathroom"
                  type="number"
                  placeholder="bathroom"
                  className="form-field"
                  id="bathroom"
                  value={bathroom}
                  onChange={(e) => bathroomChange(e.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="viewerLoc">Prioritized viewers Location</label> */}

                <ValidationMessage
                  valid={propertyCityValid}
                  message={errorMsg.propertyCity}
                />
                <select
                  type="text"
                  name="viewerLoc"
                  className="form-control my-select form-field"
                  id="viewerLoc"
                  placeholder=""
                  required
                  // value={viewerLoc}
                  value={propertyCity}
                  onChange={(e) => propertyCityChange(e.target.value)}
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
                  valid={propertyStateValid}
                  message={errorMsg.propertyState}
                />
                <select
                  type="text"
                  name="viewerLoc"
                  className="form-control my-select form-field"
                  id="viewerLoc"
                  placeholder=""
                  required
                  // value={viewerLoc}
                  value={propertyState}
                  onChange={(e) => propertyStateChange(e.target.value)}
                >
                  <option value="none">Choose State ...</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Edo">Edo</option>
                  <option value="Imo">Imo</option>
                  <option value="Rivers">Rivers</option>
                </select>
              </div>

              <div className="form-group form-group-radio">
                <div className="form-label-div">
                  <label htmlFor="Featured">Featured</label>
                </div>

                <div className=" privacy-radio-div">
                  <div className="radio-public">
                    <input
                      type="radio"
                      // id="radioPublic"
                      name="featured"
                      className="radio-privacy"
                      // value={privacyPublic}
                      value="yes"
                      // defaultChecked
                      // onChange={(e) => this.updateFeatured(e.target.value)}
                    />
                    <label className="radio-privacy-label" htmlFor="radioYes">
                      Yes
                    </label>
                    <p>Will be featured</p>
                  </div>

                  <div>
                    <input
                      type="radio"
                      // id="radioPrivate"
                      name="featured"
                      className="radio-privacy"
                      // value={privacyPrivate}
                      value="no"
                      defaultChecked

                      // onChange={(e) => this.updateFeatured(e.target.value)}
                    />
                    <label className="radio-privacy-label" htmlFor="radioNo">
                      No
                    </label>
                    <p>Will not be featured</p>
                  </div>
                </div>
              </div>

              <div className="form-group form-group-radio">
                <div className="form-label-div">
                  <label htmlFor="Recent">Recent</label>
                </div>

                <div className=" privacy-radio-div">
                  <div className="radio-public">
                    <input
                      type="radio"
                      // id="radioPublic"
                      name="recent"
                      className="radio-privacy"
                      // value={privacyPublic}
                      value="yes"
                      // onChange={(e) => this.updateRecent(e.target.value)}
                    />
                    <label className="radio-privacy-label" htmlFor="radioYes">
                      Yes
                    </label>
                    <p>Recently added</p>
                  </div>

                  <div>
                    <input
                      type="radio"
                      // id="radioPrivate"
                      name="recent"
                      className="radio-privacy"
                      // value={privacyPrivate}
                      value="no"
                      defaultChecked
                      // onChange={(e) => this.updateRecent(e.target.value)}
                    />
                    <label className="radio-privacy-label" htmlFor="radioNo">
                      No
                    </label>
                    <p>Not recently added</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-full"
                disabled={!formThreeValid}
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
