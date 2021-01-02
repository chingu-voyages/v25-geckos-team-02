import React from "react";
import Search from "../../../components/search";
import Recommendations from "../../../components/card/recommendations";
import { Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box as="main" w="70%" p="16px">
      <Search />
      <Recommendations />
    </Box>
  );
};

export default Main;
