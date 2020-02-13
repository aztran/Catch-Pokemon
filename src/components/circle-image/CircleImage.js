import React from 'react';
import { BackgroundImage, Avatar, AvatarWrapper } from './CircleImage.style';
import pokeball from 'assets/img/pokeball.png';

const CircleImage = ({ data }) => {
  return (
    <BackgroundImage imageUrl={pokeball}>
      <AvatarWrapper>
        <Avatar src={data.sprites.front_default} />
      </AvatarWrapper>
    </BackgroundImage>
  );
};

export default CircleImage;
