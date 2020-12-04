import React from "react";
import { Input, FormControl, FormLabel, Button, Select } from "@chakra-ui/react"
import useFetch from "../../utils/hooks/useFetch";
import { useState } from "react";

const Search = () => {
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
    <form action="" onSubmit={handleSubmit}>
      <FormControl id="email">
      <FormLabel hidden={true}>Search</FormLabel>
      <Input type="text" placeholder="search by track or artist" w={{base: "40rem"}} onChange={handleChange}/>
      </FormControl>
      <Select placeholder="choose track or artist" onChange={handleSelect}>
        <option value="track">Track</option>
        <option value="artist">Artist</option>
      </Select>
      <Button as="button" colorScheme="blue" variant="outline">Submit</Button>
    </form>
  )
}

export default Search;
