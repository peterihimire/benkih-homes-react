import React, { Component } from "react";
// import PropTypes from "prop-types";
import NewPropertyPageOne from "./NewPropertyPageOne";
import NewPropertyPageTwo from "./NewPropertyPageTwo";
import NewPropertyPageThree from "./NewPropertyPageThree";

export class PropertyStepForm extends Component {
  state = {
    step: 1,

    // step 1
    title: "3 Bedroom duplex",
    slug: "",
    address: "",
    amount: 0,

    // step 2
    jobTitle: "",
    jobCompany: "",
    jobLocation: "",
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
      firstName,
      lastName,
      jobTitle,
      jobCompany,
      jobLocation,
    } = this.state;

    if (step === 1)
      return (
        <NewPropertyPageOne
          nextStep={this.nextStep}
          // handleChange={this.handleChange}
          firstName={firstName}
          lastName={lastName}
          closeForm={this.props}
        />
      );
    if (step === 2)
      return (
        <NewPropertyPageTwo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange={this.handleChange}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
        />
      );

    if (step === 3)
      return (
        <NewPropertyPageThree
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange={this.handleChange}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
        />
      );
    // if (step === 4)
    //   return (
    //     <AllInfo
    //       firstName={firstName}
    //       lastName={lastName}
    //       jobTitle={jobTitle}
    //       jobCompany={jobCompany}
    //       jobLocation={jobLocation}
    //       prevStep={this.prevStep}
    //     />
    //   );
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
