import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import useFetch from "../../utils/hooks/useFetch";
// import navbar
import SectionOneContent from "./about";
import SectionTwoContent from "./howitworks";
import { Button, Heading, Text } from "@chakra-ui/react";


const LoginButton = () => {
  return (
<<<<<<< HEAD
    <a href="https://v25-geckos-server.herokuapp.com/login">
      <button>Login to spotify</button>
=======
    <a href="http://localhost:8888/login">
      <Heading as="h1" size="3xl" color="#44778c">Listen now</Heading>
>>>>>>> e265272aa0595a450bdf467856cbaacfa2838f33
    </a>
  );
};

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const FullpageWrapper = () => (
  <ReactFullpage
    navigation
    licenseKey="EFFB36A8-2EAB41BF-A372DE30-1008A97B"
    sectionsColor={[ "#44778c", "#d8725b", "#d9ccc4"]}

    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection
            className="section-one"
            content={(<SectionOneContent />)}
          />
          <MySection
            className="section-two"
            content={(<SectionTwoContent />)}
          />
          <MySection
            className="section-three"
            content={(<LoginButton />)}
          />
        </div>
      );
    }}
  />
);

const LandingPage = () => {
  const { authToken, setAuthToken } = useFetch();

  useEffect(() => {
    if (authToken) {
      navigate("discover");
    }
    return () => {
      setAuthToken(null);
    };
  }, [authToken]);

  return <FullpageWrapper />;
};





export default LandingPage;
