import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";


// class SectionOne extends React.Component {
//   constructor(props) {
//     super(props)

//     this.sectionRef = React.createRef();
//   }

// }

const SectionOneContent = () => {
  return (
    <div className="section-1">
      <Heading as="h1" size="4xl">The A-List</Heading>
      <Heading as="h2" size="xl">Discover new songs and artists based on your favourites</Heading>
      <Button colorScheme="blue">Find out more</Button>
    </div>

  );
}

export default SectionOneContent;





