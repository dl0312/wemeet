import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import { markers1 } from "../data/markers";
class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: markers1,
      index: 1
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      const { index } = this.state;
      this.setState({ places: markers1.slice(0, index), index: index + 1 });
    }, 1000);
  };
  render() {
    return <MapContainer defaultZoom={14} places={this.state.places} />;
  }
}

export default Tracking;
