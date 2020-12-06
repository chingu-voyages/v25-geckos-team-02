import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const AyanLink = () => {
  return (
    <Link href="https://github.com/anya91m" target="_blank" method="get">
      Ayan Ali
    </Link>
  );
};

const GregLink = () => {
  return (
    <Link href="https://github.com/gregogun" target="_blank" method="get">
      Greg Ogun
    </Link>
  );
};

const Footer = () => {
  return (
    <Box
      h="10vh"
      display="grid"
      placeItems="center"
      borderTop="2px solid"
      borderTopColor="gray.300"
    >
      <Flex
        w={{ base: "100%", md: "70%", lg: "50%" }}
        justify="space-evenly"
        align="center"
      >
        <Flex>
          <Text fontWeight="bold">
            Created by <AyanLink /> and <GregLink />
            {""}
            <span>🚀</span>
          </Text>
        </Flex>
        <Flex align="center">
          <Link
            target="_blank"
            method="get"
            href="https://github.com/chingu-voyages/v25-geckos-team-03"
            fontWeight="bold"
            mr="8px"
          >
            Repo
          </Link>
          <Icon as={FaGithub} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
