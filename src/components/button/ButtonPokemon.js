import React from 'react';
import { PokemonButton, PokemonButtonWrapper } from './Button.style';

const Button = ({ children, ...props }) => {
  return (
    <PokemonButtonWrapper>
      <PokemonButton {...props}>{children}</PokemonButton>
    </PokemonButtonWrapper>
  );
};

export default Button;
