import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../shared/context/auth-context";

class AllStepFormInfo extends Component {
  static contextType = AuthContext;

  state = {
    title: "",
    slug: "",
    address: "",
    amount: "",
    description: "",
    latitude: "",
    longitude: "",
    bedroom: "",
    bathroom: "",
    propertyCity: "",
    propertyState: "",
    featured: false,
    recent: false,
    newProperty: false,
    userId: "",

    errorMsg: {},
    loading: false,
    error: null,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  // NEW PROPERTY HANDLER
  newPropertyHandler = (e) => {
    e.preventDefault();
    console.log({
      title: this.state.title,
      slug: this.state.slug,
      address: this.state.address,
      amount: this.state.amount,
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      bedroom: this.state.bedroom,
      bathroom: this.state.bathroom,
      propertyCity: this.state.propertyCity,
      propertyState: this.state.propertyState,
      featured: this.state.featured,
      recent: this.state.recent,
      newProperty: this.state.newProperty,
      userId: this.state.userId,
    });
    this.setState({ loading: true });
    fetch(`http://localhost:4000/api/properties/new-property`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        slug: this.state.slug,
        address: this.state.address,
        amount: this.state.amount,
        description: this.state.description,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        bedroom: this.state.bedroom,
        bathroom: this.state.bathroom,
        propertyCity: this.state.propertyCity,
        propertyState: this.state.propertyState,
        featured: this.state.featured,
        recent: this.state.recent,
        newProperty: this.state.newProperty,
        userId: this.state.userId,
      }),
    })
      .then((response) => {
        console.log(response);
        response
          .json()
          .then((res) => {
            console.log(res);
            console.log(res.token);
            console.log(res.userId);
            console.log(res.fullname);
            console.log(res.admin);

            if (!response.ok) {
              throw new Error(res.msg);
            }
            this.setState({ loading: false });
            this.context.login(res.userId, res.token, res.admin);
            this.props.history.push("/profile");
          })
          .catch((err) => {
            console.log(err);
            this.setState({ loading: false });
          });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  // FOR STATE MANAGEMENT
  componentDidMount() {
    const context = this.context;
    console.log(context);
    console.log(context.login);

    console.log(this.props);
    this.setState({
      title: this.props.title,
      slug: this.props.slug,
      address: this.props.address,
      amount: this.props.amount,
      description: this.props.description,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      bedroom: this.props.bedroom,
      bathroom: this.props.bathroom,
      propertyCity: this.props.propertyCity,
      propertyState: this.props.propertyState,
      featured: this.props.featured,
      recent: this.props.recent,
      newProperty: this.props.newProperty,
      userId: context.userId,
    });
  }

  render() {
    const {
      title,
      slug,
      address,
      amount,
      description,
      // creator,
      latitude,
      longitude,
      bedroom,
      bathroom,
      propertyCity,
      propertyState,
      featured,
      recent,
      newProperty,
    } = this.props;

    console.log(
      title,
      slug,
      address,
      amount,
      description,
      // creator,
      latitude,
      longitude,
      bedroom,
      bathroom,
      propertyCity,
      propertyState,
      featured,
      recent,
      newProperty,
    );

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
              <p>All filled property information.</p>
            </div>
            <div>
              Title: <b>{title}</b>
              <br />
              Slug: <b>{slug}</b>
              <br />
              Address: <b>{address}</b>
              <br />
              Amount: <b>{amount.toString()}</b>
              <br />
              Description: <b>{description}</b>
              <br />
              {/* Creator: <b>{creator}</b>
              <br /> */}
              Latitude: <b>{latitude.toString()}</b>
              <br />
              Longitude: <b>{longitude.toString()}</b>
              <br />
              Bedroom: <b>{bedroom.toString()}</b>
              <br />
              Bathroom: <b>{bathroom.toString()}</b>
              <br />
              Property City: <b>{propertyCity}</b>
              <br />
              Property State: <b>{propertyState}</b>
              <br />
              Featured: <b>{featured.toString()}</b>
              <br />
              Recent: <b>{recent.toString()}</b>
              <br />
              {/* used the toString() method to convert boolean to string */}
              New Property: <b>{newProperty.toString()}</b>
            </div>

            <form onSubmit={this.newPropertyHandler}>
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
                add property
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AllStepFormInfo;
