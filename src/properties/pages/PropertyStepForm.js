import React, { Component } from "react";
// import PropTypes from "prop-types";
import NewPropertyPageOne from "./NewPropertyPageOne";
import NewPropertyPageTwo from "./NewPropertyPageTwo";
import NewPropertyPageThree from "./NewPropertyPageThree";
import AllStepFormInfo from "./AllStepFormInfo";

// function ValidationMessage(props) {
//   if (!props.valid) {
//     return <div className="error-msg">{props.message}</div>;
//   }
//   return null;
// }

export class PropertyStepForm extends Component {
  state = {
    step: 1,

    // step 1

    title: "",
    titleValid: false,
    slug: "",
    slugValid: false,
    address: "",
    addressValid: false,
    amount: "",
    amountValid: false,
    formOneValid: false,

    // step 2

    description: "",
    descriptionValid: false,
    creator: "",
    creatorValid: false,
    latitude: "",
    latitudeValid: false,
    longitude: "",
    longitudeValid: false,
    formTwoValid: false,

    // step 3
    bedroom: "",
    bedroomValid: false,
    bathroom: "",
    bathroomValid: false,
    propertyCity: "",
    propertyCityValid: false,
    propertyState: "",
    propertyStateValid: false,
    featured: "no",
    featuredValid: false,
    recent: "no",
    recentValid: false,
    newProperty: false,
    newPropertyValid: false,
    formThreeValid: false,

    // FORM VALIDATION STATE
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // FOR FORM-ONE VALIDATION
  validateFormOne = () => {
    console.log(this.props);
    const { titleValid, slugValid, addressValid, amountValid } = this.state;
    this.setState({
      formOneValid: titleValid && slugValid && addressValid && amountValid,
    });
  };

  // FOR TITLE VALIDATION
  updateTitle = (title) => {
    this.setState({ title }, this.validatetitle);
  };

  validatetitle = () => {
    const { title } = this.state;
    let titleValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (title.length < 7) {
      titleValid = false;
      errorMsg.title = "Must be at least 7 characters long";
    }

    this.setState({ titleValid, errorMsg }, this.validateFormOne);
  };

  // FOR SLUG VALIDATION
  updateSlug = (slug) => {
    this.setState({ slug }, this.validateSlug);
  };

  validateSlug = () => {
    const { slug } = this.state;
    let slugValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (slug.length < 5) {
      slugValid = false;
      errorMsg.slug = "Must be at least 5 characters long";
    }

    this.setState({ slugValid, errorMsg }, this.validateFormOne);
  };

  // FOR ADDRESS VALIDATION
  updateAddress = (address) => {
    this.setState({ address }, this.validateAddress);
  };

  validateAddress = () => {
    const { address } = this.state;
    let addressValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // address must be 6 chars and must contain a number
    if (address.length < 6) {
      addressValid = false;
      errorMsg.address = "Address must be at least 6 characters long";
    }

    this.setState({ addressValid, errorMsg }, this.validateFormOne);
  };

  // FOR AMOUNT VALIDATION
  updateAmount = (amount) => {
    this.setState({ amount }, this.validateAmount);
  };

  validateAmount = () => {
    const { amount } = this.state;
    let amountValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/\d/.test(amount)) {
      amountValid = false;
      errorMsg.amount = "Amount must contain only digits";
    }

    this.setState({ amountValid, errorMsg }, this.validateFormOne);
  };

  // FOR FORM-TWO VALIDATION
  validateFormTwo = () => {
    const {
      descriptionValid,
      creatorValid,
      latitudeValid,
      longitudeValid,
    } = this.state;
    this.setState({
      formTwoValid:
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

    this.setState({ descriptionValid, errorMsg }, this.validateFormTwo);
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

    this.setState({ creatorValid, errorMsg }, this.validateFormTwo);
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

    this.setState({ latitudeValid, errorMsg }, this.validateFormTwo);
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

    this.setState({ longitudeValid, errorMsg }, this.validateFormTwo);
  };

  // FOR FORM-THREE VALIDATION
  validateFormThree = () => {
    const {
      bedroomValid,
      bathroomValid,
      propertyCityValid,
      propertyStateValid,
    } = this.state;
    this.setState({
      formThreeValid:
        bedroomValid &&
        bathroomValid &&
        propertyCityValid &&
        propertyStateValid,
    });
  };

  // FOR BEDROOM VALIDATION
  updateBedroom = (bedroom) => {
    this.setState({ bedroom }, this.validateBedroom);
  };

  validateBedroom = () => {
    const { bedroom } = this.state;
    let bedroomValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/\d/.test(bedroom)) {
      bedroomValid = false;
      errorMsg.bedroom = "Bedroom must contain only digits";
    }

    this.setState({ bedroomValid, errorMsg }, this.validateFormThree);
  };

  // FOR BATHROOM VALIDATION
  updateBathroom = (bathroom) => {
    this.setState({ bathroom }, this.validateBathroom);
  };

  validateBathroom = () => {
    const { bathroom } = this.state;
    let bathroomValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/\d/.test(bathroom)) {
      bathroomValid = false;
      errorMsg.bathroom = "Bathroom must contain only digits";
    }

    this.setState({ bathroomValid, errorMsg }, this.validateFormThree);
  };

  // FOR PROPERTY-CITY VALIDATION
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

    this.setState({ propertyCityValid, errorMsg }, this.validateFormThree);
  };

  // FOR PROPERTY-STATE VALIDATION
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

    this.setState({ propertyStateValid, errorMsg }, this.validateFormThree);
  };

  // FOR FEATURED VALIDATION
  updateFeatured = (featured) => {
    this.setState({ featured }, this.validateFeatured);
  };

  validateFeatured = () => {
    const { featured } = this.state;
    let featuredValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (featured === "none") {
      featuredValid = true;
      errorMsg.featured = "This is chosen";
    }

    this.setState({ featuredValid, errorMsg }, this.validateFormThree);
  };

  // FOR RECENT VALIDATION
  updateRecent = (recent) => {
    this.setState({ recent }, this.validateRecent);
  };

  validateRecent = () => {
    const { recent } = this.state;
    let recentValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (recent === "none") {
      recentValid = true;
      errorMsg.recent = "This is chosen";
    }

    this.setState({ recentValid, errorMsg }, this.validateFormThree);
  };

  // FOR NEWPROPERTY VALIDATION
  updateNewProperty = (newProperty) => {
    this.setState({ newProperty }, this.validateNewProperty);
  };

  validateNewProperty = () => {
    const { newProperty } = this.state;
    let newPropertyValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (newProperty === false) {
      newPropertyValid = false;
      errorMsg.newProperty = "Property not new";
    }

    this.setState({ newPropertyValid, errorMsg }, this.validateFormThree);
  };

  showStep = () => {
    const {
      step,

      title,
      titleValid,
      slug,
      slugValid,
      address,
      addressValid,
      amount,
      amountValid,
      errorMsg,
      formOneValid,

      creator,
      creatorValid,
      latitude,
      latitudeValid,
      longitude,
      longitudeValid,
      description,
      descriptionValid,
      formTwoValid,

      bedroom,
      bedroomValid,
      bathroom,
      bathroomValid,
      propertyCity,
      propertyCityValid,
      propertyState,
      propertyStateValid,
      featured,
      featuredValid,
      recent,
      recentValid,
      newProperty,
      newPropertyValid,
      formThreeValid,

    } = this.state;

    if (step === 1)
      return (
        <NewPropertyPageOne
          nextStep={this.nextStep}
          titleChange={this.updateTitle}
          title={title}
          titleValid={titleValid}
          slug={slug}
          slugValid={slugValid}
          slugChange={this.updateSlug}
          address={address}
          addressValid={addressValid}
          addressChange={this.updateAddress}
          amount={amount}
          amountValid={amountValid}
          amountChange={this.updateAmount}
          formOneValid={formOneValid}
          errorMsg={errorMsg}
          closeForm={this.props}
        />
      );
    if (step === 2)
      return (
        <NewPropertyPageTwo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange={this.handleChange}
          description={description}
          descriptionValid={descriptionValid}
          descriptionChange={this.updateDescription}
          creator={creator}
          creatorValid={creatorValid}
          creatorChange={this.updateCreator}
          latitude={latitude}
          latitudeValid={latitudeValid}
          latitudeChange={this.updateLatitude}
          longitude={longitude}
          longitudeValid={longitudeValid}
          longitudeChange={this.updateLongitude}
          formTwoValid={formTwoValid}
          errorMsg={errorMsg}
          closeForm={this.props}
        />
      );

    if (step === 3)
      return (
        <NewPropertyPageThree
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange={this.handleChange}
          bedroom={bedroom}
          bedroomValid={bedroomValid}
          bedroomChange={this.updateBedroom}
          bathroom={bathroom}
          bathroomValid={bathroomValid}
          bathroomChange={this.updateBathroom}
          propertyCity={propertyCity}
          propertyCityValid={propertyCityValid}
          propertyCityChange={this.updatePropertyCity}
          propertyState={propertyState}
          propertyStateValid={propertyStateValid}
          propertyStateChange={this.updatePropertyState}
          featured={featured}
          featuredValid={featuredValid}
          featuredChange={this.updateFeatured}
          recent={recent}
          recentValid={recentValid}
          recentChange={this.updateRecent}
          newProperty={newProperty}
          newPropertyValid={newPropertyValid}
          newPropertyChange={this.updateNewProperty}
          formThreeValid={formThreeValid}
          errorMsg={errorMsg}
          closeForm={this.props}
        />
      );
    if (step === 4)
      return (
        <AllStepFormInfo
          title={title}
          slug={slug}
          address={address}
          amount={amount}
          description={description}
          creator={creator}
          latitude={latitude}
          longitude={longitude}
          bedroom={bedroom}
          bathroom={bathroom}
          propertyCity={propertyCity}
          propertyState={propertyState}
          featured={featured}
          recent={recent}
          prevStep={this.prevStep}
        />
      );
  };

  // static propTypes = {};

  render() {
    // const { step } = this.state;
    console.log(this.props);
    return (
      <>
        {/* <h2>Step {step} of 3.</h2> */}
        {this.showStep()}
      </>
    );
  }
}

export default PropertyStepForm;
