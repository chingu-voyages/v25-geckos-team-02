import React from "react";
import { Router } from "@reach/router";
import App from "./app-page";
import LandingPage from "./landing-page";

const Pages = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <App path="discover" />
    </Router>
  );
};

export default Pages;
