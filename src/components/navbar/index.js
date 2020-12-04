import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import useFetch from "../../utils/hooks/useFetch";

const Navbar = () => {
  const { username } = useFetch();
  return (
    <Flex w="100%" justify="space-between">
      <Heading>The A-List</Heading>
      <Flex align="center">
        {username && <Text mr="8px">{username}</Text>}
        <Button>Logout</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
