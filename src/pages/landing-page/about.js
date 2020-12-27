import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ReactFullpage from '@fullpage/react-fullpage';
import SectionTwoContent from "./howitworks";


const SectionOneContent = () => {

  return (
    <div className="section-1">
      <Heading as="h1" size="4xl" fontSize='10em'>The A-List</Heading>
      <Heading as="h2" size="xl" mt="40px">Discover new songs and artists based on your favourites</Heading>
    </div>
  );
}

export default SectionOneContent;

// <Button colorScheme="blue" mt="40px" onClick={() => this.props.fullpageApi.moveSectionDown()}>
  // Find out more
// </Button>


