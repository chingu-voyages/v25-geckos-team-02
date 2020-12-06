import React from "react";
import Search from "../../../components/search";
import Recommendations from "../../../components/card/recommendations";
import { Box } from "@chakra-ui/react";
import ResultsCard from "../../../components/card/results";

const Main = () => {
  return (
    <Box as="main" w="100%" p="16px">
      <Search />
      <ResultsCard />
      <Recommendations />
    </Box>
  );
};

export default Main;
