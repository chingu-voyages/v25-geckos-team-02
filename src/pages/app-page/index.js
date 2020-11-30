import { navigate } from "@reach/router";
import React from "react";
import useFetch from "../../utils/hooks/useFetch";

const App = () => {
  const { getUserDetails, getSearchItem, displayName } = useFetch();
    // setting some state that we can update and attach to getSearchItem variables
    const [q, setQ] = useState();
    const [track, setTrack] = useState();
    const [artist, setArtist] = useState();

      // logging to check what we get on each re-render
  console.log(q);
  console.log(track);
  console.log(artist);

    // function that handles submission of search form
    const handleSubmit = (e) => {
      e.preventDefault();
      getSearchItem({
        q: q,
        track: track,
        artist: artist,
      });
    };
  
    // function to handle change in the input
    const handleChange = (e) => {
      setQ(e.target.value);
    };
  
    // function to handle the change in select
    const handleSelect = (e) => {
      if (e.target.value === "track") {
        setTrack(e.target.value);
      }
  
      if (e.target.value === "artist") {
        setArtist(e.target.value);
      }
    };

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to landing page</button>
      <h1> {displayName} </h1>
    </div>
  );
};

export default App;
