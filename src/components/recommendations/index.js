import React, { useState } from "react";
import { Flex, Box, Text, Image, Heading, IconButton } from "@chakra-ui/react";
import useFetch from "../../utils/hooks/useFetch";
import usePrevious from "../../utils/hooks/usePrevious";
import Card from "../card";

const Recommendations = () => {
  const {
    recommendations,
    recentlyPlayed,
    contextURI,
    setContextURI,
    trackUri,
    setTrackUri,
    isPlaying,
    setIsPlaying,
    isActive,
    setPlayback,
  } = useFetch();
  const prevContextURI = usePrevious(contextURI);
  const [playing, setPlaying] = useState(false);

  return (
    <Box w={{ base: "100%", lg: "42%" }} as="section" mb="128px">
      {recentlyPlayed && (
        <Box w="100%" mb="32px">
          <Heading mb="16px">You've recently listened to</Heading>
          <Flex direction="column" as="ul" w="100%" justify="space-evenly">
            {recentlyPlayed.map((item) => (
              <Card
                key={item.track.id}
                {...item.track}
                contextURI={contextURI}
                setContextURI={setContextURI}
                trackUri={trackUri}
                setTrackUri={setTrackUri}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setPlayback={setPlayback}
                isActive={isActive}
                prevContextURI={prevContextURI}
              />
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
                <Card
                  key={track.id}
                  {...track}
                  contextURI={contextURI}
                  setContextURI={setContextURI}
                  trackUri={trackUri}
                  setTrackUri={setTrackUri}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  setPlayback={setPlayback}
                  isActive={isActive}
                  prevContextURI={prevContextURI}
                />
              ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Recommendations;
