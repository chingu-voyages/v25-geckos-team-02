import React from 'react';
import useFetch from "./utils/hooks/useFetch"

const App = () => {
  const { getUserDetails, displayName } = useFetch();
  return (
    <div>
      <a href="http://localhost:8888/login">
        <button>Login to spotify</button>
      </a>
      <button onClick={getUserDetails}>Get your details here</button>
      <h1>{displayName}</h1>
    </div>
    );
};

export default App;
