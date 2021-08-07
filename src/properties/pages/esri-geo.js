import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { geosearch } from 'esri-leaflet-geocoder';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const defaultCenter = [0, 0];
const defaultZoom = 4;

function App() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    const control = geosearch();

    control.addTo(map);

    control.on('results', handleOnSearchResuts);

    return () => {
      control.off('results', handleOnSearchResuts);
    }
  }, []);

  /**
   * handleOnSearchResuts
   * @param {object} data Results object from esri-leaflet-geocoder
   */

  function handleOnSearchResuts(data) {
    console.log('Search results', data);
  }

  return (
    <div className="App">
      <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
    </div>
  );
}

export default App;


import React from "react";
import { MapContainer, LayersControl } from "react-leaflet";
import {
  BasemapLayer,
  FeatureLayer,
  DynamicMapLayer,
  TiledMapLayer,
  ImageMapLayer
} from "react-esri-leaflet";

import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import HeatmapLayer from "react-esri-leaflet/plugins/HeatmapLayer";
import ClusterLayer from "react-esri-leaflet/plugins/ClusterLayer";

const Map = (props) => {
  return (
    <MapContainer id="mapId" zoom={7} center={[39.759, -88.157]}>
      <LayersControl position="topleft" collapsed={false}>
        <LayersControl.BaseLayer name="Tiled Map Layer">
          <TiledMapLayer url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Base Map Layer" checked>
          <BasemapLayer name="DarkGray" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Dynamic Map Layer">
          <DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Image Map Layer">
          <ImageMapLayer
            url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer"
            attribution="United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Esri Feature Layer">
          <FeatureLayer
            url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0"
            eventHandlers={{
              loading: () => console.log("featurelayer loading"),
              load: () => console.log("featurelayer loaded")
            }}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Esri Heatmap Layer">
          <HeatmapLayer
            url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/CommunityAddressing/MapServer/0"
            radius={20}
            eventHandlers={{
              loading: () => console.log("loading heatmap")
            }}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Esri Cluster Layer">
          <ClusterLayer url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0" />
        </LayersControl.Overlay>
      </LayersControl>

      <EsriLeafletGeoSearch
        position="topleft"
        useMapBounds={false}
        eventHandlers={{
          requeststart: () => console.log("Started request..."),
          requestend: () => console.log("Ended request..."),
          results: (r) => console.log(r)
        }}
      />
    </MapContainer>
  );
};

export default Map;


import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const mapRef = useRef();
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
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  return (
    <div style={{ height: "100vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  );
};

render(<App />, document.getElementById("root"));

