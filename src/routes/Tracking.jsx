import React, { Component } from "react";
import MapContainer from "../components/MapContainer";

const places = [
  { latitude: 25.8103146, longitude: -80.1751609 },
  { latitude: 27.9947147, longitude: -82.5943645 },
  { latitude: 28.4813018, longitude: -81.4387899 }
];

class Tracking extends Component {
  render() {
    return <MapContainer defaultZoom={7} places={places} />;
  }
}

export default Tracking;
