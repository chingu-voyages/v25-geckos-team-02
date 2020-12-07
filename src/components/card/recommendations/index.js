import React, { useState } from "react";
import { Flex, Box, Text, Image, Heading, IconButton } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";
import { MdPlayArrow, MdPause, MdPlaylistAdd } from "react-icons/md";
import { convertMs } from "../../../utils";

const Recommendations = () => {
  const { recommendations, recentlyPlayed, trackResults } = useFetch();
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  const Card = ({ album, name, artists, duration_ms }) => {
    const image = album.images[0].url;
    const artist = artists[0].name;
    const duration = convertMs(duration_ms);

    return (
      <Flex
        p="4px"
        w={{ base: "100%" }}
        as="li"
        listStyleType="none"
        align="center"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
        mb="4px"
      >
        <Image
          mr="16px"
          borderRadius="full"
          boxSize="50px"
          objectFit="cover"
          src={image}
          alt={`Cover art for ${name} by ${artist}`}
        />
        <Flex align="center" w="100%" justify="space-between">
          <Flex>
            <Text mr="8px">{name}</Text>
            <Text mr="8px">-</Text>
            <Text fontWeight="bold">{artist}</Text>
          </Flex>
          <Flex align="center">
            <IconButton
              variant="ghost"
              colorScheme="gray.700"
              fontSize="20px"
              icon={<MdPlaylistAdd />}
            />
            <Text>{duration}</Text>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box w={{ base: "100%", lg: "none" }} as="section">
      {recentlyPlayed && (
        <Box
          w="100%"
          // w={{ base: "100%", md: "80%", lg: "60%", xl: "40%" }}
          my="32px"
        >
          <Heading mb="16px">You've recently listened to</Heading>
          <Flex direction="column" as="ul" w="100%" justify="space-evenly">
            {recentlyPlayed.map((track) => (
              <Card key={track.track.id} {...track.track} />
            ))}
          </Flex>
        </Box>
      )}
      {recommendations && (
        <Box
          w="100%"
          // w={{ base: "100%", md: "80%", lg: "60%", xl: "40%" }}
        >
          <Heading mb="16px">We think you should listen to</Heading>
          <Flex direction="column" as="ul" w="100%" justify="space-evenly">
            {recommendations &&
              recommendations.map((track) => (
                <Card key={track.id} {...track} />
              ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Recommendations;
