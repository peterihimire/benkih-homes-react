// import React, { useState, useEffect } from 'react'
import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
  // FlyToInterpolator,
  // FullscreenControl,
  // ScaleControl,
} from "react-map-gl";

// import smallDot from "../images/small-dot.svg";
// import binoculeSvg from "../images/binocule-sm.svg";
// import searchSvg from "../images/search-icon.svg";

import LoadingSpinner from "./UIElements/LoadingSpinner";
import ErrorModal from "./UIElements/ErrorModal";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";

// import PredictionsOnInputChange from "../components/users/PredictionsOnInputChange";

import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";

import "./SearchMap.css";

// import { AuthContext } from "../context/auth-context";
// import { Link } from "react-router-dom";

import Pin from "./users/Pin";
// import DraggableMarker from "../components/users/DraggableMarker";

function MappingWork(props) {
  // const auth = useContext(AuthContext);
  // const api = 'https://s3.eu-central-1.amazonaws.com/hdx-ckan-filestore-prod/resources/83dba4b0-992f-4748-b037-4b55ecc0c3b4/nigeria_lga.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=180&X-Amz-Credential=AKIARZNKTAO7U6UN77MP%2F20201209%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20201209T204212Z&X-Amz-Signature=907a8b72de5abea217715c6c32c4a0cbe21072cb439d7371bbd12be0cbe42b00'

  // useEffect(() => {
  //   fetchMapData()
  // }, [])

  // const fetchMapData = async () => {
  //     const data = await fetch(api)
  //     console.log(data)
  // }

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = React.useState("");
  const [searchedPlace, setSearchedPlace] = useState();
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  console.log(setAddress, searchedPlace, setCoordinates);
  // FOR GOOGLE AUTO-COMPLETE
  // const [searchValue, setSearchValue] = useState("");

  // FOR THE BROWSER NAVIGATION GEO-LOCATION API
  // function useCoordinates() {
  // const [coordinate, setCoordinate] = useState({
  //   lat: 0,
  //   lng: 0,
  // });

  // FOR ANOTHER BROWSER GEO-LOCATION CODE
  // const [browserCoord, setBrowserCoord] = React.useState({
  //   lng: null,
  //   lat: null,
  // });

  // // For the Browser Navigation API
  // useEffect(() => {
  //   let geoId;
  //   console.log("Entr");
  //   geoId = window.navigator.geolocation.watchPosition((position) => {
  //     setCoordinate({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     });
  //   });

  //   return () => {
  //     navigator.geolocation.clearWatch(geoId);
  //   };
  // });

  // For the Browser Navigation API 2
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition((position) => {
  //     setBrowserCoord({
  //       // ...viewport,
  //       lng: position.coords.longitude,
  //       lat: position.coords.latitude,
  //     });
  //   });
  // }, []);
  // console.log(browserCoord);

  // const coordinatee = useCoordinates();
  // this is for the browser geo-navigation api
  // console.log(coordinate);

  console.log(coordinates, address);
  console.log(setIsLoading);

  // This is the map access token
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  // This is the map reference
  const mapRef = useRef();

  // // SECOND FUNCTION VIEWPORT
  // const handleViewPortChange = useCallback(
  //   (newViewport) => setViewport(newViewport),
  //   []
  // );

  // This is the style of the control button for zoom
  const navStyle = {
    position: "absolute",
    bottom: "350px",
    right: 0,
    paddingRight: "50px",
  };

  // Added this get viewport
  const placeViewport = JSON.parse(localStorage.getItem("placeViewport"));
  console.log(placeViewport);

  // This is the mapbox viewport
  const [viewport, setViewport] = useState({
    // width: "100vw",
    // height: "100vh",
    zoom: 15,
    bearing: 0,
    pitch: 0,
    latitude: !coordinates.lat
      ? (coordinates.lat = 6.497892)
      : placeViewport.latitude,
    longitude: !coordinates.lng
      ? (coordinates.lng = 3.382923)
      : placeViewport.longitude,
  });
  console.log(viewport);

  // This is the geolocatecontrol
  const geolocateStyle = {
    position: "absolute",
    bottom: 70,
    left: 0,
    margin: 10,
    color: "blue",
    borderRadius: "50px",
  };

  // const fullscreenControlStyle = {
  //   top: 106,
  //   padding: "10px",
  //   right: 0,
  // };

  // const scaleControlStyle = {
  //   bottom: 86,
  //   left: 0,
  //   padding: "10px",
  // };

  // REMOVES THE ERROR MODAL
  const errorModalHandler = () => {
    setError("");
  };

  // PLACE SEARCHED OBJECT TO WORK WITH THE ON-SELECT-LOCATION FUNCTION
  useEffect(() => {
    let place = {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    };
    // added this place-viewport to persist in the database
    localStorage.setItem(
      "placeViewport",
      JSON.stringify({ latitude: coordinates.lat, longitude: coordinates.lng })
    );
    setSearchedPlace(place);
  }, [coordinates.lat, coordinates.lng]);

  // let placeJson = JSON.stringify(place);
  // console.log(placeJson);

  // FOR SEARCH VIEWPORT TRANSITION
  // const onSelectLocation = useCallback(({ longitude, latitude }) => {
  //   setViewport({
  //     longitude,
  //     latitude,
  //     zoom: 15,
  //     transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
  //     transitionDuration: "auto",
  //   });
  // }, []);

  // TO HIDE KEYBOARD ON MOBILE
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("Enter key was pressed...");
  //     e.preventDefault();
  //     e.target.blur();
  //   }
  // };

  // FOR SELECTING THE GOOGLE GEO-LOCATION ADDRESS FROM THE RESULTS
  // const handleSelect = async (value) => {
  //   console.log(value);
  //   const results = await geocodeByAddress(value);
  //   console.log(results);
  //   const latLng = await getLatLng(results[0]);
  //   setAddress(value);
  //   setCoordinates(latLng);
  //   // replace replace results with 'searchedPlace' and during search always press the enter key
  //   onSelectLocation(results);
  // };
  // console.log(searchedPlace);

  return (
    <>
      <ErrorModal error={error} onClear={errorModalHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
      {coordinates.lat && coordinates.lng && (
        <div id="map">
          <ReactMapGl
            ref={mapRef}
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/binocule/ckb15bubn1en51iliqpwtmabm"
            onViewportChange={handleViewportChange}
            // onViewportChange={(nextViewport) => setViewport(nextViewport)}
            // onViewportChange={setViewport}
            dragRotate={false}
          >
            <div className="nav" style={navStyle}>
              <NavigationControl />
            </div>
            <Geocoder
              mapRef={mapRef}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              onViewportChange={handleGeocoderViewportChange}
              position="top-left"
            />
            <GeolocateControl
              className="p-5"
              style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              auto
            />
            {/* <FullscreenControl style={fullscreenControlStyle} /> */}
            {/* <ScaleControl style={scaleControlStyle} /> */}

            {
              <Marker
                latitude={
                  !coordinates.lat
                    ? (coordinates.lat = 6.497892)
                    : coordinates.lat
                }
                longitude={
                  !coordinates.lng
                    ? (coordinates.lng = 3.382923)
                    : coordinates.lng
                }
              >
                {/* <img src={smallDot} alt="dot icon" /> */}
                <Pin size={30} />
              </Marker>
            }
          </ReactMapGl>
        </div>
      )}
      {/* THIS IS THE REACT-PLACES-AUTOCOMPLETE COMPONENT */}
      {/* <div className="search-map">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          // onKeyPress={handleKeyPress}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="home-search-container">
              <div className="home-search">
                <div className="home-menu-div">
                  <img src={binoculeSvg} alt="binocule icon" />
                </div>
                <input
                  {...getInputProps({
                    placeholder: "Search address",
                    className: "location-search-input",
                    // onKeyPress: handleKeyPress(Event),
                    // onKeyPress: (e) => {
                    //   console.log("key enter pressed");
                    //   if (e.key === "Enter") {
                    //     e.preventDefault();
                    //     console.log("Enter key was clicked");
                    //     e.target.blur();
                    //   }
                    // },
                  })}
                />
                <div className="home-search-div">
                  <img src={searchSvg} alt="search icon" />
                </div>
              </div>

              <div>
                {loading ? <div>loading...</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <div
                      className="input-suggestion"
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div> */}
    </>
  );
}

export default MappingWork;

// latitude: !coordinates.lat ? (coordinates.lat = 6.497892) : coordinates.lat,
// longitude: !coordinates.lng
//   ? (coordinates.lng = 3.382923)
//   : coordinates.lng,

// latitude: !placeViewport.latitude
// ? (placeViewport.latitude = 6.497892)
// : placeViewport.latitude,
// longitude: !placeViewport.longitude
// ? (placeViewport.longitude = 3.382923)
// : placeViewport.longitude,
// e.key === "Enter" || e.keyCode == 13
