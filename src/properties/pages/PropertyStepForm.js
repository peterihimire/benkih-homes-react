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

    title: "3 Bedroom duplex",
    titleValid: false,
    slug: "3-Bedroom-duplex",
    slugValid: false,
    address: "",
    addressValid: false,
    amount: 0,
    amountValid: false,

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
          // handleChange={this.handleChange}
          title={title}
          titleValid={titleValid}
          slug={slug}
          slugValid={slugValid}
          address={address}
          addressValid={addressValid}
          amount={amount}
          amountValid={amountValid}
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
