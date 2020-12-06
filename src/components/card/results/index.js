import React, { useEffect } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";
import CardAvatar from "./CardAvatar";

const ResultsCard = () => {
  const { artistResults, trackResults } = useFetch();

  useEffect(() => {
    if (artistResults) {
      console.log(artistResults);
    }
  }, [artistResults]);

  const Card = ({ name, images }) => {
    return (
      <Box w="100%">
        <Flex align="center" bg="blue" w="500px" h="150px" bg="tomato">
          <CardAvatar image={images[0].url} />
          <Text fontSize="3xl">{name}</Text>
        </Flex>
      </Box>
    );
  };

  return (
    <>
      {artistResults &&
        artistResults.map((artist) => <Card {...artist} key={artist.id} />)}
      <Text>Cards here</Text>
    </>
  );
};

export default ResultsCard;
