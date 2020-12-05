import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Image, Heading, IconButton } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";
import { MdPlayArrow, MdPause, MdPlaylistAdd } from "react-icons/md";

const Recommendations = () => {
  const { recommendations, recentlyPlayed } = useFetch();
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  const Card = ({ album, name, artists }) => {
    const image = album.images[0].url;
    const artist = artists[0].name;
    return (
      <Flex
        as="li"
        direction="column"
        listStyleType="none"
        w="300px"
        objectFit="cover"
        justify="center"
        p="32px"
      >
        <Image src={image} />
        <Flex w="100%" justify="space-between">
          <Box>
            <Text mt="8px">{name}</Text>
            <Text fontWeight="bold">{artist}</Text>
          </Box>
          <Flex align="center">
            <IconButton
              onClick={handleClick}
              variant="ghost"
              colorScheme="gray.700"
              fontSize="20px"
              icon={playing ? <MdPause /> : <MdPlayArrow />}
            />
            <IconButton
              variant="ghost"
              colorScheme="gray.700"
              fontSize="20px"
              icon={<MdPlaylistAdd />}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box as="section">
      {recentlyPlayed && (
        <Box w="100%" m="auto" my="16px">
          <Heading fontWeight="bold">You've recently listened to</Heading>
          <Flex as="ul" w="100%" justify="space-evenly" align="center">
            {recentlyPlayed.map((track) => (
              <Card key={track.track.id} {...track.track} />
            ))}
          </Flex>
        </Box>
      )}
      <Box w="100%" m="auto">
        <Heading fontWeight="bold">We think you should listen to</Heading>
        <Flex as="ul" w="100%" justify="space-evenly" align="center">
          {recommendations &&
            recommendations.map((track) => <Card key={track.id} {...track} />)}
        </Flex>
      </Box>
    </Box>
  );
};

export default Recommendations;
