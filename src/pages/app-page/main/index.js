import React, { useState } from "react";
import Search from "../../../components/search";
import Recommendations from "../../../components/card/recommendations";
import { Box, Flex } from "@chakra-ui/react";
import ResultsCard from "../../../components/card/results";

const Main = () => {
  return (
    <Box as="main" w="100%" p="16px">
      <Flex
        w="100%"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Search />
        <Recommendations />
      </Flex>
    </Box>
  );
};

export default Main;
