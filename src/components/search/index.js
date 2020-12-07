import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Flex,
  Box,
  Text,
  Heading,
  InputGroup,
  InputRightElement,
  List,
} from "@chakra-ui/react";
import useFetch from "../../utils/hooks/useFetch";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ResultsCard from "../card/results";

const Result = ({ images, name }) => {
  // const image = images[0].url;
  return (
    <Box
      as="li"
      listStyleType="none"
      w="100%"
      maxH="200px"
      mb="16px"
      // display="grid"
      // placeItems="center"
    >
      <Flex>
        <Text>{name}</Text>
      </Flex>
    </Box>
  );
};

const Search = () => {
  const { getSearchItem, artistResults } = useFetch();
  // setting some state that we can update and attach to getSearchItem variables
  const [q, setQ] = useState();
  const [select, setSelect] = useState("artist");

  // function to handle change in the input
  const handleChange = (e) => {
    setQ(e.target.value);
    getSearchItem({
      q: q,
      select: select,
    });
  };

  // function to handle the change in select
  const handleSelect = (e) => {
    if (e.target.value === "track") {
      setSelect("track");
      console.log("track");
    }

    if (e.target.value === "artist") {
      setSelect("artist");
      console.log("artist");
    }
  };

  return (
    <Box w="100%" mb="32px">
      <Heading>Search</Heading>
      <Flex w={{ base: "100%" }}>
        <FormControl id="search">
          <FormLabel hidden={true}>Search by track or artist</FormLabel>
          <InputGroup>
            <InputRightElement pointerEvents="none" children={<FaSearch />} />
            <Input
              variant="flushed"
              type="text"
              placeholder="Search by track or artist"
              //w={{ base: "70%" }}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <Select
          variant="flushed"
          //w={{ base: "30%" }}
          defaultValue="artist"
          onChange={handleSelect}
        >
          <option value="track">Track</option>
          <option value="artist">Artist</option>
        </Select>
      </Flex>
      {artistResults && (
        <List>
          {artistResults.map((artist) => (
            <Result key={artist.id} {...artist} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default Search;
