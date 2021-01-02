import React, { useEffect } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Image,
  Select,
  Flex,
  Box,
  Text,
  Heading,
  InputGroup,
  List,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useFetch from "../../utils/hooks/useFetch";

const Result = ({ artistImages, trackImages, artistNames, name, album }) => {
  let image;
  let artist;
  if (artistImages) {
    if (artistImages[0] !== undefined) {
      image = artistImages[0].url;
    }
  }

  if (trackImages) {
    if (trackImages[0] !== undefined) {
      image = trackImages[0].url;
    }
  }

  if (artistNames) {
    artist = artistNames[0].name;
  }

  return (
    <Box
      as="li"
      listStyleType="none"
      // border="1px solid"
      // borderColor="gray.300"
    >
      <Box as="button" w="100%" p="8px" _hover={{ bg: "gray.100" }}>
        <Flex>
          <Image
            mr="16px"
            borderRadius="full"
            boxSize="20px"
            objectFit="cover"
            src={image ? image : "https://via.placeholder.com/150"}
            alt={name}
          />
          <Text mr="8px" textAlign="left">
            {name}
          </Text>
          {artistNames && (
            <Flex>
              <Text mr="8px">-</Text>
              <Text fontWeight="semibold" color="gray.500">
                {artist}
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

const Search = () => {
  const {
    getSearchItem,
    trackResults,
    artistResults,
    q,
    setQ,
    setSelect,
  } = useFetch();
  // setting some state that we can update and attach to getSearchItem variables
  // const [q, setQ] = useState();
  // const [select, setSelect] = useState("artist");

  useEffect(() => {
    if (q) {
      getSearchItem();
    }
  }, [q]);

  useEffect(() => {
    if (trackResults) {
      console.log(trackResults);
    }
  }, [trackResults]);

  // function to handle change in the input
  const handleChange = (e) => {
    setQ(e.target.value);
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
    <Box w={{ base: "100%", lg: "55%" }} mb="32px">
      <Heading mb="16px">Search</Heading>
      <Flex w={{ base: "100%" }} mb="4px">
        <Box w="85%">
          <FormControl id="search">
            <FormLabel hidden={true}>Search by track or artist</FormLabel>
            <InputGroup>
              <InputLeftElement
                top="-2px"
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input
                autoComplete="off"
                variant="flushed"
                type="text"
                placeholder="Search by track or artist"
                //w={{ base: "70%" }}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
        </Box>
        <Box w="15%">
          <Select
            variant="flushed"
            defaultValue="artist"
            onChange={handleSelect}
          >
            <option value="track">Track</option>
            <option value="artist">Artist</option>
          </Select>
        </Box>
      </Flex>
      {artistResults && q && (
        <List overflowY="auto" maxH="320px">
          {artistResults.map((artist) => (
            <Result key={artist.id} artistImages={artist.images} {...artist} />
          ))}
        </List>
      )}
      {trackResults && q && (
        <List overflowY="auto" maxH="320px">
          {trackResults.map((track) => (
            <Result
              key={track.id}
              artistNames={track.artists}
              trackImages={track.album.images}
              {...track}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default Search;
