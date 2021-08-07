import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
// import { geosearch } from "esri-leaflet-geocoder";
import "leaflet/dist/leaflet.css";
// import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
// import { SearchControl, OpenStreetMapProvider } from "../dist/index";
import LeafletControlGeocoder from "./LeafletControlGeocoder";

//here you can add some styles
// import "./example/react-leaflet-geosearch.css";

// import binoculeSvg from "../images/binocule-sm.svg";
// import searchSvg from "../images/search-icon.svg";
// import LoadingSpinner from "../components/UIElements/LoadingSpinner";
// import ErrorModal from "../components/UIElements/ErrorModal";
// import Pin from "../components/users/Pin";

// export const icon = new Icon({
//   iconUrl: "../images/loc-icon.svg",
//   iconSize: [25, 25],
// });
const MappingWork = (props) => {
  // const mapRef = useRef();

  // const mapContainerRef = forwardRef((props, ref) => (<MapContainer ref={ref} />))

  // useEffect(() => {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;

  //   if (!map) return;

  //   const control = geosearch();

  //   control.addTo(map);

  //   control.on("results", handleOnSearchResuts);

  //   return () => {
  //     control.off("results", handleOnSearchResuts);
  //   };
  // }, []);

  // function handleOnSearchResuts(data) {
  //   console.log("Search results", data);
  // }

  // // REMOVES THE ERROR MODAL
  // const errorModalHandler = () => {
  //   setError("");
  // };
  // const prov = OpenStreetMapProvider();
  // const GeoSearchControlElement = SearchControl;

  return (
    <>
      <MapContainer center={[6.497892, 3.382923]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LeafletControlGeocoder />
        {/* <GeoSearchControlElement
          provider={prov}
          showMarker={true}
          showPopup={false}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
          popupFormat={({ query, result }) => result.label}
        /> */}
        {/* <Marker
          position={[6.497892, 3.382923]}
          onClick={() => {
            // setActivePark(park);
          }}
          // icon={icon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
};

export default MappingWork;
