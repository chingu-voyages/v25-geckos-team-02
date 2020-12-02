import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";

const Recommendations = () => {
  const { recommendations, recentlyPlayed } = useFetch();

  const Card = ({ album, name, artists }) => {
    console.log(album);
    const image = album.images[0].url;
    const artist = artists[0].name;
    return (
      <Flex
        as="li"
        direction="column"
        // bg="red.200"
        listStyleType="none"
        w="300px"
        h="320px"
        objectFit="cover"
        justify="space-evenly"
        p="8px"
        // align="center"
      >
        <Image src={image} />
        <Box>
          <Text mt="8px">{name}</Text>
          <Text fontWeight="bold">{artist}</Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box>
      {recentlyPlayed && (
        <Box w="70%" m="auto" my="64px">
          <Heading fontWeight="bold">You've recently listened to</Heading>
          <Flex as="ul" w="100%" justify="space-evenly">
            {recentlyPlayed.map((track) => (
              <Card key={track.id} {...track.track} />
            ))}
          </Flex>
        </Box>
      )}
      <Box w="70%" m="auto">
        <Heading fontWeight="bold">We think you should listen to</Heading>
        <Flex as="ul" w="100%" justify="space-evenly">
          {recommendations &&
            recommendations.map((track) => <Card key={track.id} {...track} />)}
        </Flex>
      </Box>
    </Box>
  );
};

export default Recommendations;
