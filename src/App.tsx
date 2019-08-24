import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./global-styles";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <ScrollToTop>
          <AppContainer className="app">
            <Router />
          </AppContainer>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
