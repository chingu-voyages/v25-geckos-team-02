import { navigate } from "@reach/router";
import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import Search from "../../components/search";
import Recommendations from "../../components/card/recommendations";

const App = () => {
  return (
    <>
      <Search />
      <Recommendations />
    </>
  );
};

export default App;
