import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
// import { FaArrowLeft } from "react-icons/fa";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPageOne extends Component {
  state = {
    title: "",
    titleValid: false,
    slug: "",
    slugValid: false,
    address: "",
    addressValid: false,
    amount: "",
    amountValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: "",
  };

  // FOR OVERALL FORM VALIDATION
  validateForm = () => {
    console.log(this.props);
    const { titleValid, slugValid, addressValid, amountValid } = this.props;
    this.setState({
      formValid: titleValid && slugValid && addressValid && amountValid,
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
      errorMsg.title = "Title must be at least 7 characters long";
    }

    this.setState({ titleValid, errorMsg }, this.validateForm);
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
      errorMsg.slug = "Slug must be at least 5 characters long";
    }

    this.setState({ slugValid, errorMsg }, this.validateForm);
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

    this.setState({ addressValid, errorMsg }, this.validateForm);
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

    this.setState({ amountValid, errorMsg }, this.validateForm);
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    console.log(this.props);
    console.log(this.props.closeForm.history.goBack);
    const {
      title,
      titleChange,
      titleValid,
      errorMsg,

      slug,
      slugChange,
      slugValid,

      bedroom,
      bedroomChange,
      bedroomValid,
      

      bathroom,
      bathroomChange,
      bathroomValid,

      address,
      addressChange,
      addressValid,

      amount,
      amountChange,
      amountValid,

      formOneValid,
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
            {/* <div className="back-arrow">
              <button
                className="back-btn"
                // onClick={() => this.props.history.goBack()}
                onClick={() => this.props.closeForm.history.goBack()}
              >
                <FaArrowLeft className="arrow-back-icon" />
              </button>
            </div> */}
            <div className="heading">
              <h2>Add new property.</h2>
              <p>Add or create new property for sale.</p>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="form-field"
                  id="title"
                  // value={this.state.title}
                  value={title}
                  // onChange={(e) => this.updateTitle(e.target.value)}
                  onChange={(e) => titleChange(e.target.value)}
                />
                <ValidationMessage
                  valid={titleValid}
                  message={errorMsg.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="slug">Slug</label>
                <input
                  name="slug"
                  type="text"
                  placeholder="Slug"
                  className="form-field"
                  id="slug"
                  // value={this.state.slug}
                  value={slug}
                  onChange={(e) => slugChange(e.target.value)}
                />
                <ValidationMessage valid={slugValid} message={errorMsg.slug} />
              </div>
              <div className="form-group">
                <label htmlFor="bedroom">Bedroom(s)</label>
                <input
                  name="bedroom"
                  type="number"
                  placeholder="no. of bedroom"
                  className="form-field"
                  id="bedroom"
                  value={bedroom}
                  onChange={(e) => bedroomChange(e.target.value)}
                />
                <ValidationMessage
                  valid={bedroomValid}
                  message={errorMsg.bedroom}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathroom">Bathroom(s)</label>
                <input
                  name="bathroom"
                  type="number"
                  placeholder="no. of bathroom"
                  className="form-field"
                  id="bathroom"
                  value={bathroom}
                  onChange={(e) => bathroomChange(e.target.value)}
                />
                <ValidationMessage
                  valid={bathroomValid}
                  message={errorMsg.bathroom}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="form-field"
                  id="address"
                  // value={this.state.address}
                  value={address}
                  onChange={(e) => addressChange(e.target.value)}
                />
                <ValidationMessage
                  valid={addressValid}
                  message={errorMsg.address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  className="form-field"
                  id="amount"
                  // value={this.state.amount}
                  value={amount}
                  onChange={(e) => amountChange(e.target.value)}
                />
                <ValidationMessage
                  valid={amountValid}
                  message={errorMsg.amount}
                />
              </div>

              <button
                type="submit"
                className="btn btn-full"
                disabled={!formOneValid}
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

export default NewPropertyPageOne;
