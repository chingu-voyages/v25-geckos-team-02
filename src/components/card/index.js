import React from "react";
import { Flex, Box, Text, Image, IconButton } from "@chakra-ui/react";
import { MdFavoriteBorder, MdPlayArrow, MdPause } from "react-icons/md";
import { convertMs } from "../../utils";

const Card = ({
  album,
  name,
  artists,
  duration_ms,
  uri,
  contextURI,
  setContextURI,
  trackUri,
  setTrackUri,
  isPlaying,
  setIsPlaying,
  setPlayback,
  prevContextURI,
}) => {
  const image = album.images[0].url;
  const artist = artists[0].name;
  const duration = convertMs(duration_ms);

  // console.log(contextURI);
  // console.log(prevContextURI);

  // console.log(uri);

  const PlaybackIcon = () => {
    if (trackUri === uri) {
      if (isPlaying) {
        return <MdPause />;
      } else {
        return <MdPlayArrow />;
      }
    } else {
      return <MdPlayArrow />;
    }
  };

  const handleClick = () => {
    if (trackUri === uri) {
      if (isPlaying) {
        console.log("paused");
        setContextURI(null);
      }
      if (!isPlaying) {
        console.log("resumed");
        setContextURI(null);
      }
    } else {
      console.log("started playing");
      setTrackUri(uri);
      setContextURI(album.uri);
    }
  };

  return (
    <Box as="li" listStyleType="none">
      <Flex
        p="4px"
        w={{ base: "100%" }}
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
            <Flex mr="8px" align="center">
              <IconButton
                mr="8px"
                variant="ghost"
                _hover={{ variant: "ghost" }}
                colorScheme="gray.700"
                fontSize="20px"
                icon={<PlaybackIcon />}
                onClick={handleClick}
              />
              <IconButton
                variant="ghost"
                _hover={{ variant: "ghost", color: "red.400" }}
                colorScheme="gray.700"
                fontSize="20px"
                icon={<MdFavoriteBorder />}
              />
            </Flex>
            <Text>{duration}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
