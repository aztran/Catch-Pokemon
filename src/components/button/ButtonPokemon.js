import React from 'react';
import { PokemonButton, PokemonButtonWrapper } from './Button.style';

const ButtonPokemon = ({ children, ...props }) => {
  return (
    <PokemonButtonWrapper>
      <PokemonButton {...props}>{children}</PokemonButton>
    </PokemonButtonWrapper>
  );
};

export default ButtonPokemon;
