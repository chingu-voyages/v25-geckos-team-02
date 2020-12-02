import { navigate } from "@reach/router";
import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import Search from "../../components/search";
import ResultsCard from "../../components/card/results";
import RecCard from "../../components/card/recommendations";

const App = () => {
  return (
    <>
      <Search />
      <ResultsCard />
      <RecCard />
    </>
  );
};

export default App;
