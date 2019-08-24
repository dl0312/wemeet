import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Tracking from "./routes/Tracking";
import { Switch, Route } from "react-router-dom";

const Container = styled.div`
  position: relative;
  z-index: 2;
`;

interface Props {}

const Router: React.SFC<Props> = () => (
  <>
    <BackTop />
    <Container>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Tracking} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  </>
);

export default Router;
