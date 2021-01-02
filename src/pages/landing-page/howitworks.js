import React from "react";
import { Box, Button, Heading, Text, Image, Circle, HStack, VStack, Flex, Center } from "@chakra-ui/react";
import Logo from "/images/spotifylogoblack.png"
import Search from "/images/noun_Search_3669023.png"
import Listen from "/images/listening.png"

const SectionTwoContent = () => {
  return (
    <div>
      <Heading as="h1" size="3xl" mb="40px" color="#D9CCC5">How it works:</Heading>
      <Center>
        <HStack spacing="30px">
          <VStack>
            <Circle size="325px" bg="#D9CCC5" p="5">
              <Image src={Logo} w="350px"/>
            </Circle>
            <Text fontSize="2xl" color="#D9CCC5" fontWeight="bold">Login with your Spotify account</Text>
          </VStack>

          <VStack>
            <Circle size="325px" bg="#D9CCC5" color="white">
              <Image src={Search} w="90%"/>
            </Circle>
            <Text fontSize="2xl" color="#D9CCC5" fontWeight="bold">Search for a track or artist</Text>
          </VStack>

          <VStack>
            <Circle size="325px" bg="#D9CCC5" color="white">
              <Image src={Listen} />
            </Circle>
            <Text mt="15px" fontSize="2xl" color="#D9CCC5" fontWeight="bold">Discover new music!</Text>
          </VStack>
        </HStack>
      </Center>
    </div>
    )
};

export default SectionTwoContent;
