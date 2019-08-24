import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import Select from "./routes/Select";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Tracking from "./routes/Tracking";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

const Container = styled.div`
  min-height: 100vh;
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit .fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

// interface Props {}

const Router: React.SFC<any> = ({ location }) => (
  <>
    <BackTop />
    <Container>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }}>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/select" component={Select} />
            <Route path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  </>
);

export default withRouter(Router);
