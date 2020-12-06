import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import customTheme from "../../utils/theme";
import Header from "./header";
import Main from "./main";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
};

export default App;
