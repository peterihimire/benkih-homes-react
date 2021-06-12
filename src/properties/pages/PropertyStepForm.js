import React, { Component } from "react";
// import PropTypes from "prop-types";
import NewPropertyPageOne from "./NewPropertyPageOne";
import NewPropertyPageTwo from "./NewPropertyPageTwo";
import NewPropertyPageThree from "./NewPropertyPageThree";
import AllStepFormInfo from "./AllStepFormInfo";

export class PropertyStepForm extends Component {
  state = {
    step: 1,

    // step 1
    title: "3 Bedroom duplex",
    slug: "",
    address: "",
    amount: 0,

    // step 2
    description: "",
    creator: "",
    latitude: "",
    longitude: "",

    // step 3
    city: "",
    state: "",
    featured: "no",
    recent: "no",
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
      slug,
      address,
      amount,

      description,
      creator,
      latitude,
      longitude,

      city,
      state,
      featured,
      recent,
    } = this.state;

    if (step === 1)
      return (
        <NewPropertyPageOne
          nextStep={this.nextStep}
          // handleChange={this.handleChange}
          title={title}
          slug={slug}
          address={address}
          amount={amount}
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
          city={city}
          state={state}
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
          city={city}
          state={state}
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
