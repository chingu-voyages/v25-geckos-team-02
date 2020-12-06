import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import useFetch from "../../utils/hooks/useFetch";
// import navbar
import SectionOneContent from "./about";

const LoginButton = () => {
  return (
    <a href="https://v25-geckos-server.herokuapp.com/login">
      <button>Login to spotify</button>
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
    sectionsColor={["#44778c", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection
            className="section-one"
            content={("About", (<SectionOneContent />))}
          />
          <MySection className="section-two" content={"How"} />
          <MySection
            className="section-three"
            content={("Enter!", (<LoginButton />))}
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
