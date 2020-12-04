import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import useFetch from "../../../utils/hooks/useFetch";
import { useState } from "react";
import CardAvatar from './CardAvatar'

const ResultsCard = () => {

  const { searchResults } = useFetch()

  const Card = ({name, images }) => {
    return (
      <div className="ui card container">
        <Flex align="center" bg="blue" w="500px" h="150px" bg="tomato">
          <CardAvatar image={images[0].url}/>
          <Text fontSize="3xl">{name}</Text>
        </Flex>
      </div>
    )
  };

  return (
    < >
    { searchResults &&
       searchResults.artists.items.map(artist => <Card {... artist} key = {artist.id} />)
    }
    </>
  )
};


export default ResultsCard;
