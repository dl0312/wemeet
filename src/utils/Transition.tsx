import React from "react";

interface Props {}

interface State {}

class Transition extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Transition</div>;
  }
}

export default Transition;
