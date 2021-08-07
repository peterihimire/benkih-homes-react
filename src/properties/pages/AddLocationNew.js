import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
  FlyToInterpolator,
} from "react-map-gl";

import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";
import swooshAddBtn from "../../images/swosh.svg";
import binoculeSvg from "../../images/binocule-sm.svg";
import searchSvg from "../../images/search-icon.svg";
// import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";

// import PredictionsOnInputChange from "../components/users/PredictionsOnInputChange";

// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "../SearchMap.css";

// import { AuthContext } from "../context/auth-context";
// import { Link } from "react-router-dom";
import addLocIcon from "../../images/addmap-icon.svg";
import { useHistory } from "react-router-dom";
// import Pin from "../components/users/Pin";
// import DraggableMarker from "../components/users/DraggableMarker";

function AddLocation(props) {
  let history = useHistory();
  // const auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = React.useState("");
  const [searchedPlace, setSearchedPlace] = useState();
  const [scapeId, setScapeId] = useState();
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  // This is the map access token
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  useEffect(() => {
    if (!props.match.params.scapeId) {
      return setIsLoading(true);
    }
    setIsLoading(false);
    setScapeId(props.match.params.scapeId);
  }, [props.match.params.scapeId]);

  console.log(coordinates, address);
  console.log(setIsLoading);

  // This is the map reference
  const mapRef = useRef();

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
  const onSelectLocation = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator({ speed: 2.5 }),
      transitionDuration: "auto",
    });
  }, []);

  // FOR SELECTING THE GOOGLE GEO-LOCATION ADDRESS FROM THE RESULTS
  const handleSelect = async (value) => {
    console.log(value);
    const results = await geocodeByAddress(value);
    console.log(results);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    // replace replace results with 'searchedPlace' and during search always press the enter key
    onSelectLocation(searchedPlace);
  };
  console.log(searchedPlace);

  // DRAGGABLE MARKER

  const [events, logEvents] = useState({});
  console.log(events); // commented this cause it is very important
  console.log(events.onDragEnd);

  // FOR SEARCH AND DRAG MARKER
  useEffect(() => {
    if (!events.onDragEnd) {
      return setSearchedPlace({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      });

      // return setCoordinate([3.382923, 6.497892]);
    }
    setSearchedPlace(events.onDragEnd);
  }, [events.onDragEnd, coordinates.lat, coordinates.lng]);

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    // SEARCH AND DRAG MARKER
    setCoordinates({
      lat: event.lngLat[1],
      lng: event.lngLat[0],
    });
  }, []);

  // For Posting a New Post
  const postCoordinateHandler = (e) => {
    e.preventDefault();
    setIsLoading(false);
    const data = {
      location: events.onDragEnd,
    };
    console.log(data);

    localStorage.setItem(
      "locationData",
      JSON.stringify({ location: events.onDragEnd })
    );
    history.push(`/new-post/${scapeId}`);
  };

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
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            // onViewportChange={setViewport}
            dragRotate={false}
          >
            <div className="nav" style={navStyle}>
              <NavigationControl />
            </div>

            <GeolocateControl
              className="p-5"
              style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              // auto
            />

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
                offsetLeft={-10}
                offsetTop={-20}
                draggable={true}
                onDrag={onMarkerDrag}
                onDragEnd={onMarkerDragEnd}
                onDragStart={onMarkerDragStart}
              >
                <img src={addLocIcon} alt="dot icon" />
              </Marker>
            }

            <form
              onSubmit={postCoordinateHandler}
              className="add-location-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="it is for the coordinates."
                  value={events.onDragEnd}
                />
              </div>
              <button className="swoosh-btn" onClick={postCoordinateHandler}>
                <img src={swooshAddBtn} alt="send icon" />
              </button>
            </form>
          </ReactMapGl>
        </div>
      )}
      {/* THIS IS THE REACT-PLACES-AUTOCOMPLETE COMPONENT */}
      <div className="search-map">
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
      </div>
    </>
  );
}

export default AddLocation;
