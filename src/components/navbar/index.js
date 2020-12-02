import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="100%" justify="space-between">
      <Heading>The A-List</Heading>
      <Button>Logout</Button>
    </Flex>
  );
};

export default Navbar;
