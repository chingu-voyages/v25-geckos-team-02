import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import search from "../../images/search.png";

const SectionTwoContent = () => {
  return (
    <div>
      <Heading as="h1" size="3xl">How it works 🚀</Heading>
      <img src={search} alt="Search" h="50%" w="50%"/>
    </div>
  )
};

export default SectionTwoContent;
