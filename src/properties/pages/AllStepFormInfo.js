import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
import { FaArrowLeft } from "react-icons/fa";

class AllStepFormInfo extends Component {
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
      title,
      slug,
      address,
      amount,
      description,
      creator,
      latitude,
      longitude,
      bedroom,
      bathroom,
      propertyCity,
      propertyState,
      featured,
      recent,
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
              onClick={() => this.props.history.goBack()}
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
              <p>All filled property information.</p>
            </div>
            <div>
              Title: <b>{title}</b>
              <br />
              Slug: <b>{slug}</b>
              <br />
              Address: <b>{address}</b>
              <br />
              Amount: <b>{amount}</b>
              <br />
              Recent: <b>{recent}</b>
              <br />
            </div>

            <form>
              {/* <div className="form-group">
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
              </div> */}

              <button
                type="submit"
                className="btn btn-full"
                // disabled={!this.state.formValid}
                // onClick={this.continue}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AllStepFormInfo;
