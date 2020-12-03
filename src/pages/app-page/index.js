import { navigate } from "@reach/router";
import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import Search from "../../components/search";
import ResultsCard from "../../components/cards/results";

const App = () => {

  return (
    <div>
      <Search />
      <ResultsCard />
    </div>
  );
};

export default App;
