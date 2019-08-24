import { Component } from "react";

interface Props {}

interface State {}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Home</div>;
  }
}

export default Home;
