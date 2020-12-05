import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../../components/navbar";

const Header = () => {
  return (
    <Box
      as="header"
      h="10vh"
      w="100%"
      m="auto"
      mb="32px"
      p="16px"
      borderBottom="2px solid"
      borderBottomColor="grey.200"
    >
      <Navbar />
    </Box>
  );
};

export default Header;
