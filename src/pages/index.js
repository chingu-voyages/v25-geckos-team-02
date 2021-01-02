import React from "react";
import { Router } from "@reach/router";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import App from "./app-page";
import LandingPage from "./landing-page";

const Pages = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <LandingPage path="/" />
        <App path="discover" />
      </Router>
    </ChakraProvider>
  );
};

export default Pages;
