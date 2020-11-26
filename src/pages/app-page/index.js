import { navigate } from "@reach/router";
import React from "react";
import useFetch from "../../utils/hooks/useFetch";

const App = () => {
  const { displayName } = useFetch();
  return (
    <div>
      <button onClick={() => navigate("/")}>Back to landing page</button>
      <h1> {displayName} </h1>
    </div>
  );
};

export default App;
