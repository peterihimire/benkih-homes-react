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

    recent: false,
    // recentValid: false,

    newProperty: false,
    // newPropertyValid: false,

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
    const { descriptionValid, creatorValid, latitudeValid, longitudeValid } =
      this.state;
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

  // // FOR FEATURED VALIDATION
  // updateFeatured = (featured) => {
  //   this.setState({ featured }, this.validateFeatured);
  // };

  // validateFeatured = () => {
  //   const { featured } = this.state;
  //   let featuredValid = true;
  //   let errorMsg = { ...this.state.errorMsg };

  //   if (featured === "none") {
  //     featuredValid = true;
  //     errorMsg.featured = "This is chosen";
  //   }

  //   this.setState({ featuredValid, errorMsg }, this.validateFormThree);
  // };

    // FOR RECENT VALIDATION
    toggleCheckFeatured = () => {
      console.log(this.state.recent);
      this.setState({ recent: !this.state.featured });
    };

  // FOR RECENT VALIDATION
  toggleCheckRecent = () => {
    console.log(this.state.recent);
    this.setState({ recent: !this.state.recent });
  };

  // FOR NEWPROPERTY VALIDATION

  toggleCheckNew = () => {
    console.log(this.state.newProperty);
    this.setState({ newProperty: !this.state.newProperty });
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
      // featuredValid,
      recent,
      // recentValid,
      newProperty,
      // newPropertyValid,
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
          // FORMER FEATURED LOGIC RADIO BUTTON
          // featured={featured}
          // featuredValid={featuredValid}
          // featuredChange={this.updateFeatured}

          // CURRENT FEATURED LOGIC BASED ON CHECKBOX
          featured={featured}
          featuredChange={this.updateFeatured}

          recent={recent}
          // recentValid={recentValid}
          recentChange={this.toggleCheckRecent}
          newProperty={newProperty}
          // newPropertyValid={newPropertyValid}
          newPropertyChange={this.toggleCheckNew}
          formThreeValid={formThreeValid}
          errorMsg={errorMsg}
          closeForm={this.props}
        />
      );
    if (step === 4)
      return (
        <AllStepFormInfo
          prevStep={this.prevStep}
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
          newProperty={newProperty}
          closeForm={this.props}
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
// https://www.figma.com/file/fjAs3elv1GjdaZ5kfqKMtc/Testimonial?node-id=1%3A397
// https://www.figma.com/file/AKemSFIDCOF8bLmEv8bHvk/REAL-ESTATE?node-id=68%3A43
// https://github.com/wazobiatech/react-technical-task-entry-level
// https://morioh.com/p/17a6491961d4
// http://hire-my-services.herokuapp.com/#skills
// https://xd.adobe.com/view/550d14bc-6e2b-46b0-be4d-639d790acae3-005e/screen/3a77ceaf-a2dd-4f38-9a1a-b317e9f66345/specs/
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
// https://developer.tomtom.com/blog/build-different/building-responsive-location-search-component-react-search-box#placedetails
// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
// https://codesandbox.io/s/q8pn97y064?from-embed=&file=/src/Autocomplete.js
// https://github.com/leighhalliday/demo-google-places-react/blob/master/src/index.css
// https://github.com/flowforfrank/react-autocomplete-search
// https://www.npmjs.com/package/react-places-autocomplete#installation
// https://dev.to/codebucks/how-to-get-user-s-location-in-react-js-1691
// https://stackoverflow.com/questions/50909438/missing-mapbox-css-using-react
// https://app.netlify.com/sites/binoculeapp/settings/deploys
// https://www.smashingmagazine.com/2021/05/building-wysiwyg-editor-javascript-slatejs/
// https://developer.tomtom.com/blog/build-different/building-responsive-location-search-component-react-search-box
// https://tomtomdevs.medium.com/
// https://www.ilovepdf.com/download/cmj85b9bsqy3f119765nAf6s4rpkv8k8m0484hxbt3sd57l5ytxzkc4994wvh2sknjt0vkmjrwy3tdzr313jpmyrjh2qn59362f4k1c7f37sxc4wwc6575879jxx48hAm4qndAsczqgyn8wnxdxn5v8yyz0b0jp5p47xz4453wmqn131d86q/11o
// https://codeytek.com/live-search-search-react-live-search-in-react-axios-autocomplete-pagination/
// https://atomizedobjects.com/blog/react/how-to-use-google-autocomplete-with-react-hooks/
// https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/
// https://xd.adobe.com/view/67021947-7344-4680-9364-76bbfe4b826b-3251/screen/298482ac-08a0-4d8d-b6da-372760340c00
// https://codesandbox.io/s/l7p179qr6m?file=/src/index.js:0-1822
// https://github.com/leighhalliday/react-leaflet-demo/blob/master/src/App.js
// https://github.com/visgl/react-map-gl/blob/6.1-release/examples/viewport-animation/src/app.js
// https://github.com/visgl/react-map-gl/blob/6.1-release/examples/draggable-markers/src/app.js
// https://documenter.getpostman.com/view/10853414/TVzViFwy#7f649134-04db-40af-adf4-56bd761c0553
// https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat
// https://dashboard.heroku.com/apps/benkih-homes/settings
// https://codesandbox.io/embed/github/colbyfayock/egghead-code-examples/tree/master/add-placename-location-search-to-react-leaflet-esri-leaflet-geocoder?fontsize=14&hidenavigation=1&theme=dark
// https://visgl.github.io/react-map-gl/examples/viewport-animation/
// https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:550d14bc-6e2b-46b0-be4d-639d790acae3;revision=0?component_id=8ec3c373-f7a2-49f2-93b1-02a43906d8e6&api_key=CometServer1&access_token=1622521478_urn%3Aaaid%3Asc%3AUS%3A550d14bc-6e2b-46b0-be4d-639d790acae3%3Bpublic_42bb18dbe2fe4d14460031789eaf38fa888310e1
// https://egghead.io/lessons/react-add-placename-location-search-to-react-leaflet-with-esri-leaflet-geocoder
// https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%250Aimport%2520React%252C%2520%257B%2520useState%252C%2520useRef%252C%2520useEffect%252C%2520useCallback%2520%257D%2520from%2520%2522react%2522%253B%250Aimport%2520ReactMapGl%252C%2520%257B%250A%2520%2520GeolocateControl%252C%250A%2520%2520Marker%252C%250A%2520%2520NavigationControl%252C%250A%2520%2520FlyToInterpolator%252C%250A%257D%2520from%2520%2522react-map-gl%2522%253B%250Aimport%2520binoculeSvg%2520from%2520%2522..%252Fimages%252Fbinocule-sm.svg%2522%253B%250Aimport%2520searchSvg%2520from%2520%2522..%252Fimages%252Fsearch-icon.svg%2522%253B%250Aimport%2520LoadingSpinner%2520from%2520%2522..%252Fcomponents%252FUIElements%252FLoadingSpinner%2522%253B%250Aimport%2520ErrorModal%2520from%2520%2522..%252Fcomponents%252FUIElements%252FErrorModal%2522%253B%250Aimport%2520%2522mapbox-gl%252Fdist%252Fmapbox-gl.css%2522%253B%250Aimport%2520PlacesAutocomplete%252C%2520%257B%250A%2520%2520geocodeByAddress%252C%250A%2520%2520getLatLng%252C%250A%257D%2520from%2520%2522react-places-autocomplete%2522%253B%250Aimport%2520%2522.%252FSearchMap.css%2522%253B%250Aimport%2520Pin%2520from%2520%2522..%252Fcomponents%252Fusers%252FPin%2522%253B%250A%250Afunction%2520MappingWork%28props%29%2520%257B%250A%250A%250A%2520%2520const%2520%255BisLoading%252C%2520setIsLoading%255D%2520%253D%2520useState%28false%29%253B%250A%2520%2520const%2520%255Berror%252C%2520setError%255D%2520%253D%2520useState%28%2522%2522%29%253B%250A%2520%2520const%2520%255Baddress%252C%2520setAddress%255D%2520%253D%2520React.useState%28%2522%2522%29%253B%250A%2520%2520const%2520%255BsearchedPlace%252C%2520setSearchedPlace%255D%2520%253D%2520useState%28%29%253B%250A%2520%2520const%2520%255Bcoordinates%252C%2520setCoordinates%255D%2520%253D%2520React.useState%28%257B%250A%2520%2520%2520%2520lat%253A%2520null%252C%250A%2520%2520%2520%2520lng%253A%2520null%252C%250A%2520%2520%257D%29%253B%250A%250A%2520%2520%252F%252F%2520FOR%2520THE%2520BROWSER%2520NAVIGATION%2520GEO-LOCATION%2520API%250A%2520%2520%252F%252F%2520function%2520useCoordinates%28%29%2520%257B%250A%2520%2520const%2520%255Bcoordinate%252C%2520setCoordinate%255D%2520%253D%2520useState%28%257B%250A%2520%2520%2520%2520lat%253A%25200%252C%250A%2520%2520%2520%2520lng%253A%25200%252C%250A%2520%2520%257D%29%253B%250A%250A%2520%2520%252F%252F%2520For%2520the%2520Browser%2520Navigation%2520API%250A%2520%2520useEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520let%2520geoId%253B%250A%2520%2520%2520%2520console.log%28%2522Entr%2522%29%253B%250A%2520%2520%2520%2520geoId%2520%253D%2520window.navigator.geolocation.watchPosition%28%28position%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520setCoordinate%28%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520lat%253A%2520position.coords.latitude%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520lng%253A%2520position.coords.longitude%252C%250A%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520return%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520navigator.geolocation.clearWatch%28geoId%29%253B%250A%2520%2520%2520%2520%257D%253B%250A%2520%2520%257D%29%253B%250A%250A%2520%2520%252F%252F%2520This%2520is%2520the%2520map%2520access%2520token%250A%2520%2520const%2520MAPBOX_TOKEN%2520%253D%2520process.env.REACT_APP_MAPBOX_TOKEN%253B%250A%250A%2520%2520%252F%252F%2520This%2520is%2520the%2520map%2520reference%250A%2520%2520const%2520mapRef%2520%253D%2520useRef%28%29%253B%250A%250A%2520%2520%252F%252F%2520This%2520is%2520the%2520style%2520of%2520the%2520control%2520button%2520for%2520zoom%250A%2520%2520const%2520navStyle%2520%253D%2520%257B%250A%2520%2520%2520%2520position%253A%2520%2522absolute%2522%252C%250A%2520%2520%2520%2520bottom%253A%2520%2522350px%2522%252C%250A%2520%2520%2520%2520right%253A%25200%252C%250A%2520%2520%2520%2520paddingRight%253A%2520%252250px%2522%252C%250A%2520%2520%257D%253B%250A%250A%2520%2520%252F%252F%2520Added%2520this%2520get%2520viewport%250A%2520%2520const%2520placeViewport%2520%253D%2520JSON.parse%28localStorage.getItem%28%2522placeViewport%2522%29%29%253B%250A%2520%2520console.log%28placeViewport%29%253B%250A%250A%2520%2520%252F%252F%2520This%2520is%2520the%2520mapbox%2520viewport%250A%2520%2520const%2520%255Bviewport%252C%2520s
// https://codesandbox.io/s/using-leaflet-control-geocoder-with-react-leaflet-v3x-63wqz?file=/src/constants.js
// https://vercel.com/peterihimire/peterihimire-next/dDPVahDtfgwHPGVNnUN71Y69Bpta
// https://www.npmjs.com/package/react-leaflet-geosearch
// https://www.google.com/search?q=react+esri+leaflet+codesandbox&oq=react+esri+leaflet+codesandbox&aqs=chrome..69i57j69i60.16539j0j1&sourceid=chrome&ie=UTF-8
