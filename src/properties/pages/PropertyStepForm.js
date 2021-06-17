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
    amount: null,
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

    // step 3

    propertyCity: "",
    propertyCityValid: false,
    propertyState: "",
    propertyStateValid: false,
    featured: "no",
    featuredValid: false,
    recent: "no",
    recentValid: false,

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

  // FOR OVERALL FORM VALIDATION
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

      description,
      creator,
      latitude,
      longitude,

      propertyCity,
      propertyState,
      featured,
      recent,
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
          creator={creator}
          latitude={latitude}
          longitude={longitude}
          closeForm={this.props}
        />
      );

    if (step === 3)
      return (
        <NewPropertyPageThree
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange={this.handleChange}
          properrtyCity={propertyCity}
          propertyState={propertyState}
          featured={featured}
          recent={recent}
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
          properrtyCity={propertyCity}
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
