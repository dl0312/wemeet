import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./global-styles";
import { ToastContainer } from "react-toastify";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

const AppContainer = styled.div``;

const App: React.SFC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        draggable={true}
        position={"bottom-right"}
        autoClose={5000}
        hideProgressBar={true}
        pauseOnHover={true}
      />
      <HashRouter>
        <ScrollToTop>
          <AppContainer className="app">
            <Router />
          </AppContainer>
        </ScrollToTop>
      </HashRouter>
    </>
  );
};

export default App;
