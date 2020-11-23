import React, { useState } from "react";
import useFetch from "./utils/hooks/useFetch";
import {
  Input,
  Button,
  ChakraProvider,
  Link,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";

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
    <ChakraProvider>
      <div>
        <Link href="http://localhost:8888/login">
          <Button>Login to spotify</Button>
        </Link>
        <Button onClick={getUserDetails}>Get your details here</Button>
        <form action="" onSubmit={handleSubmit}>
          <FormControl id="search">
            <FormLabel hidden={true}>Search</FormLabel>
            <Input
              placeholder="Search by Track or Artist"
              onChange={handleChange}
            />
            <Select
              placeholder="Choose track or artist"
              onChange={handleSelect}
            >
              <option value="track">Track</option>
              <option value="artist">Artist</option>
            </Select>
            <Button as="button">Search</Button>
          </FormControl>
        </form>
        <h1> {displayName} </h1>
      </div>
    </ChakraProvider>
  );
};

export default App;
