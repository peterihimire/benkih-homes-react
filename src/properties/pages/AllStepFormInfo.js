import React, { Component } from "react";
import "./LoginPage.css";
// import { Link } from "react-router-dom";
import homeBg from "../../assets/full-modal.svg";
import closeIcon from "../../assets/close-icon.svg";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../shared/context/auth-context";
import SuccessModal from "../../shared/components/UIElements/SuccessModal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

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
    furnished: false,
    inDoorPool: false,
    outDoorPool: false,
    miniTheater: false,
    featured: false,
    recent: false,
    newProperty: false,
    images: [],
    userId: "",

    errorMsg: {},
    loading: false,
    error: null,
    success: "",
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
      furnished: this.state.furnished,
      inDoorPool: this.state.inDoorPool,
      outDoorPool: this.state.outDoorPool,
      miniTheater: this.state.miniTheater,
      featured: this.state.featured,
      recent: this.state.recent,
      newProperty: this.state.newProperty,
      images: this.state.images,
      userId: this.state.userId,
    });
    this.setState({ loading: true });

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("slug", this.state.slug);
    formData.append("address", this.state.address);
    formData.append("amount", this.state.amount);
    formData.append("description", this.state.description);
    formData.append("latitude", this.state.latitude);
    formData.append("longitude", this.state.longitude);
    formData.append("bedroom", this.state.bedroom);
    formData.append("bathroom", this.state.bathroom);
    formData.append("propertyCity", this.state.propertyCity);
    formData.append("propertyState", this.state.propertyState);
    formData.append("furnished", this.state.furnished);
    formData.append("inDoorPool", this.state.inDoorPool);
    formData.append("outDoorPool", this.state.outDoorPool);
    formData.append("miniTheater", this.state.miniTheater);
    formData.append("featured", this.state.featured);
    formData.append("recent", this.state.recent);
    formData.append("newProperty", this.state.newProperty);
    // FOR MULTIPLE FILE UPLOAD
    for (const key of Object.keys(this.state.images)) {
      formData.append("imagez", this.state.images[key]);
    }
    formData.append("userId", this.state.userId);

    console.log(formData);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/properties/new-property`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: formData,
      // body: JSON.stringify({
      //   title: this.state.title,
      //   slug: this.state.slug,
      //   address: this.state.address,
      //   amount: this.state.amount,
      //   description: this.state.description,
      //   latitude: this.state.latitude,
      //   longitude: this.state.longitude,
      //   bedroom: this.state.bedroom,
      //   bathroom: this.state.bathroom,
      //   propertyCity: this.state.propertyCity,
      //   propertyState: this.state.propertyState,
      //   furnished: this.state.furnished,
      //   inDoorPool: this.state.inDoorPool,
      //   outDoorPool: this.state.outDoorPool,
      //   miniTheater: this.state.miniTheater,
      //   featured: this.state.featured,
      //   recent: this.state.recent,
      //   newProperty: this.state.newProperty,
      //   images: this.state.images,
      //   userId: this.state.userId,
      // }),
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
            this.setState({
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
              featured: "",
              recent: "",
              newProperty: "",
              // userId: context.userId,
            });
            console.log(this.props.closeForm);
            // this.props.closeForm.history.push("/profile");
            this.setState({
              success: res.msg || "Account created, click button to continue!",
            });
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
      furnished: this.props.furnished,
      inDoorPool: this.props.inDoorPool,
      outDoorPool: this.props.outDoorPool,
      miniTheater: this.props.miniTheater,
      featured: this.props.featured,
      recent: this.props.recent,
      newProperty: this.props.newProperty,
      images: this.props.imagesFiles,
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
      furnished,
      inDoorPool,
      outDoorPool,
      miniTheater,
      featured,
      recent,
      newProperty,
      renderImages,
      previewsBlob,
      imagesFiles,
    } = this.props;
    console.log(this.props);
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
      furnished,
      inDoorPool,
      outDoorPool,
      miniTheater,
      imagesFiles,
    );

    return (
      <>
        <SuccessModal link="/profile" success={this.state.success} />
        <ErrorModal error={this.state.error} onClear={this.errorModalHandler} />
        {this.state.loading && <LoadingSpinner asOverlay />}
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
                Furnished: <b>{furnished.toString()}</b>
                <br />
                Out Door Pool: <b>{outDoorPool.toString()}</b>
                <br />
                In Door Pool: <b>{inDoorPool.toString()}</b>
                <br />
                Mini Theater: <b>{miniTheater.toString()}</b>
                <br />
                Featured: <b>{featured.toString()}</b>
                <br />
                Recent: <b>{recent.toString()}</b>
                <br />
                {/* used the toString() method to convert boolean to string */}
                New Property: <b>{newProperty.toString()}</b>
                <form className="form-group">
                  <div className="upload-browse-div">
                    {renderImages(previewsBlob)}
                  </div>
                </form>
              </div>

              <form onSubmit={this.newPropertyHandler}>
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
      </>
    );
  }
}
export default AllStepFormInfo;
// central business district, marina
