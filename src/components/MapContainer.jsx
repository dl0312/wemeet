import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./Map";

const googleMapsApiKey = "AIzaSyAJcBecQPTrNS6dvx-ILxU2ETgsJDP4hdY";

const MapContainer = props => {
  const { places } = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    <Map
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?key=" +
        googleMapsApiKey +
        "&libraries=geometry,drawing,places"
      }
      markers={places}
      loadingElement={loadingElement || <div style={{ height: `100%` }} />}
      containerElement={containerElement || <div style={{ height: "80vh" }} />}
      mapElement={mapElement || <div style={{ height: `100%` }} />}
      defaultCenter={defaultCenter || { lat: 25.798939, lng: -80.291409 }}
      defaultZoom={defaultZoom || 11}
    />
  );
};

export default MapContainer;
