import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Image, List, ListItem } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";

const Recommendations = () => {
  const { recommendations, trackResults, artistResults } = useFetch();

  const Card = ({ album, name }) => {
    console.log(album);
    const image = album.images[0].url;
    return (
      <ListItem listStyleType="none" w="140px" h="140px" objectFit="cover">
        <Image w="100%" h="100%" src={image} />
        <Text>{name}</Text>
      </ListItem>
    );
  };

  const resultCard = ({ name, images }) => {
    const image = images[0].url;
    return (
      <ListItem listStyleType="none" objectFit="cover">
        <Flex w="140px" h="400px">
          <Image w="100%" h="100%" src={image} />
          <Text>{name}</Text>
        </Flex>
      </ListItem>
    );
  };

  return (
    <>
      <List>
        {recommendations &&
          recommendations.map((track) => <Card key={track.id} {...track} />)}
      </List>
    </>
  );
};

export default Recommendations;
