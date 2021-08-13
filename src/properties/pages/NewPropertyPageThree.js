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
      // bedroom,
      // bedroomChange,
      // bedroomValid,
      errorMsg,

      // bathroom,
      // bathroomChange,
      // bathroomValid,

      propertyCity,
      propertyCityChange,
      propertyCityValid,

      propertyState,
      propertyStateChange,
      propertyStateValid,

      furnished,
      furnishedChange,

      outDoorPool,
      outDoorPoolChange,

      inDoorPool,
      inDoorPoolChange,

      miniTheater,
      miniTheaterChange,

      featured,
      featuredChange,
      // featuredValid,

      recent,
      recentChange,
      // recentValid,

      newProperty,
      newPropertyChange,
      // newPropertyValid,

      formThreeValid,
    } = this.props;
    console.log(this.props);
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
                  valid={bedroomValid}
                  message={errorMsg.bedroom}
                />
                <input
                  name="bedroom"
                  type="number"
                  placeholder="no. of bedroom"
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
                  placeholder="no. of bathroom"
                  className="form-field"
                  id="bathroom"
                  value={bathroom}
                  onChange={(e) => bathroomChange(e.target.value)}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="propertyState">Property State</label>

                <select
                  type="text"
                  name="propertyState"
                  className="form-control my-select form-field"
                  id="propertyState"
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
                  <option value="Abuja">Abuja</option>
                  <option value="Rivers">Rivers</option>
                </select>
                <ValidationMessage
                  valid={propertyStateValid}
                  message={errorMsg.propertyState}
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertyCity">Property City</label>
                <select
                  type="text"
                  name="propertyCity"
                  className="form-control my-select form-field"
                  id="propertyCity"
                  placeholder=""
                  required
                  value={propertyCity}
                  onChange={(e) => propertyCityChange(e.target.value)}
                >
                  <option value="none">Choose City ...</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Lekki">Lekki</option>
                  <option value="Ikoyi">Ikoyi</option>
                  <option value="Sapele-road">Sapele Road</option>
                  <option value="Benin">Benin</option>
                  <option value="Orji">Orji</option>
                  <option value="Akwakuma">Akwakuma</option>
                  <option value="Ogbogoro">Ogbogoro</option>
                  <option value="NTA Road">NTA Road</option>
                  <option value="Gwagwalada">Gwagwalada</option>
                </select>
                <ValidationMessage
                  valid={propertyCityValid}
                  message={errorMsg.propertyCity}
                />
              </div>

              {/* <div className="form-group form-group-radio">
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
                      onChange={(e) => featuredChange(e.target.value)}
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
                      onChange={(e) => featuredChange(e.target.value)}
                    />
                    <label className="radio-privacy-label" htmlFor="radioNo">
                      No
                    </label>
                    <p>Will not be featured</p>
                  </div>
                </div>
              </div> */}
              {/* BEGINNING OF NOTE */}
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">Furnished</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={furnished}
                      onChange={furnishedChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">Out-Door Pool</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={outDoorPool}
                      onChange={outDoorPoolChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">In-Door Pool</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={inDoorPool}
                      onChange={inDoorPoolChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">Mini Theater</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={miniTheater}
                      onChange={miniTheaterChange}
                    />
                  </div>
                </div>
              </div>
              {/* END OF NOTE */}
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">Featured</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={featured}
                      onChange={featuredChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">Recent</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      defaultChecked={recent}
                      onChange={recentChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <div className="form-group-checkbox ">
                  <div className="form-label-div">
                    <label htmlFor="checkbus">New</label>
                  </div>
                  <div className="new-checkbox-div">
                    <input
                      type="checkbox"
                      name="checkbus"
                      // required
                      // value={newProperty}
                      defaultChecked={newProperty}
                      onChange={newPropertyChange}
                    />
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
