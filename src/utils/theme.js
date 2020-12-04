import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  styles: {
    global: (props) => ({
      "html, body": {
        overflowX: "hidden",
        fontFamily: "body",
      },
    }),
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Open Sans', sans-serif",
  },
};

export default customTheme;
