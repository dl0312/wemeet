import React, { Component } from "react";
import { render } from "react-dom";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Circle,
  Polyline
} from "google-maps-react";
export class MapContainer extends Component {
  onMarkerClick = () => {
    console.log("mark click");
  };

  render() {
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < this.props.places.length; i++) {
      bounds.extend(this.props.places[i]);
    }
    return (
      <Map
        google={this.props.google}
        zoom={this.props.defaultZoom}
        initialCenter={this.props.defaultCenter}
        bounds={bounds}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          icon={{
            url:
              "https://www.fourjay.org/myphoto/f/2/29501_person-icon-png.png",
            anchor: new this.props.google.maps.Point(20, 20),
            scaledSize: new this.props.google.maps.Size(40, 40)
          }}
        />
        <Polyline
          path={this.props.places}
          strokeColor={this.props.lineColor}
          strokeOpacity={0.5}
          strokeWeight={4}
        />
      </Map>
    );
  }
}
export default MapContainer;
