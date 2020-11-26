import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "../landing-page/styles.css";
import useFetch from "../../utils/hooks/useFetch";

const LoginButton = () => {
  return (
    <a href="http://localhost:8888/login">
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
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection content={"About the A-List"} />
          <MySection content={"How the A-List Works"} />
          <MySection content={("Check out our App!", (<LoginButton />))} />
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
