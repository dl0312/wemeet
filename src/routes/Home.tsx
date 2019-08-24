import React from "react";
import { RouteChildrenProps } from "react-router";

interface Props extends RouteChildrenProps {}

interface State {}

export default class Home extends React.Component<Props, State> {
  render() {
    return (
      <div onClick={() => this.props.history.push("/register")}>
        Click and Please find my wang wang!
      </div>
    );
  }
}
