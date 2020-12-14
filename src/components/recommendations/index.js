import React, { useState } from "react";
import { Flex, Box, Text, Image, Heading, IconButton } from "@chakra-ui/react";
import useFetch from "../../utils/hooks/useFetch";
import { MdFavoriteBorder } from "react-icons/md";
import { convertMs } from "../.././utils";

const Card = ({ album, name, artists, duration_ms }) => {
  const image = album.images[0].url;
  const artist = artists[0].name;
  const duration = convertMs(duration_ms);

  return (
    <Box as="li" listStyleType="none">
      <Flex
        p="4px"
        w={{ base: "100%" }}
        as="button"
        listStyleType="none"
        align="center"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
        _hover={{ bg: "gray.100" }}
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
              _hover={{ variant: "ghost", color: "red.400" }}
              colorScheme="gray.700"
              fontSize="20px"
              icon={<MdFavoriteBorder />}
            />
            <Text>{duration}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const Recommendations = () => {
  const { recommendations, recentlyPlayed, trackResults } = useFetch();
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <Box w={{ base: "100%", lg: "42%" }} as="section" mb="128px">
      {recentlyPlayed && (
        <Box w="100%" mb="32px">
          <Heading mb="16px">You've recently listened to</Heading>
          <Flex direction="column" as="ul" w="100%" justify="space-evenly">
            {recentlyPlayed.map((track) => (
              <Card key={track.track.id} {...track.track} />
            ))}
          </Flex>
        </Box>
      )}
      {recommendations && (
        <Box w="100%">
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
