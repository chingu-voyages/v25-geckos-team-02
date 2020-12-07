import React, { useEffect } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";
import CardAvatar from "./CardAvatar";

const ResultsCard = () => {
  const { artistResults } = useFetch();

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
    <Box>
      {artistResults && <Text>Hello</Text>}
      {artistResults &&
        artistResults.map((artist) => <Card {...artist} key={artist.id} />)}
      <Text>Cards here</Text>
    </Box>
  );
};

export default ResultsCard;
