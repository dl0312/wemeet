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
import User from "../assets/user.png";
export class MapContainer extends Component {
  onMarkerClick = () => {
    console.log("mark click");
  };

  render() {
    var bounds = new this.props.google.maps.LatLngBounds();
    bounds.extend(this.props.defaultCenter);
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
            url: User,
            anchor: new this.props.google.maps.Point(32, 32),
            scaledSize: new this.props.google.maps.Size(64, 64)
          }}
        />

        {this.props.places.length !== 0 && (
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            position={{
              lat: this.props.places[this.props.places.length - 1].lat,
              lng: this.props.places[this.props.places.length - 1].lng
            }}
            icon={{
              url: require(`../assets/tracker${this.props.currentIndex}.png`),
              anchor: new this.props.google.maps.Point(64, 64),
              scaledSize: new this.props.google.maps.Size(128, 128)
            }}
          />
        )}
        <Polyline
          path={this.props.places}
          strokeColor={this.props.lineColor}
          strokeOpacity={0.5}
          strokeWeight={10}
        />
      </Map>
    );
  }
}
export default MapContainer;
