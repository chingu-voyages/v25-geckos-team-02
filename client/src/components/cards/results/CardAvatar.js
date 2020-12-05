import React from 'react';
import { Avatar } from "@chakra-ui/react";

const CardAvatar = ({image}) => {
  return (
    <div className="ui avatar card">
        <Avatar
          size="xl"
          name="Example"
          src={image}
        />
    </div>
  );
}

export default CardAvatar;
