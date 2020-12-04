import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
<<<<<<< HEAD
import useFetch from "../../utils/hooks/useFetch";
import Search from "../../components/search";
import ResultsCard from "../../components/cards/results";
=======
import customTheme from "../../utils/theme";
import Header from "./header";
import Main from "./main";
>>>>>>> ed8983070d0cd0b3da825267cfeabbf1597c30e8

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <Search />
      <ResultsCard />
    </div>
=======
    <ChakraProvider theme={customTheme}>
      <Header />
      <Main />
    </ChakraProvider>
>>>>>>> ed8983070d0cd0b3da825267cfeabbf1597c30e8
  );
};

export default App;
