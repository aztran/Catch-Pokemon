import React from 'react';
import {
  PokemonListItemContainer,
  PokemonName,
  OwnedItem
} from './PokemonListItem.style';

const PokemonListItem = ({ data, ...props }) => {
  const { name } = data;
  return (
    <PokemonListItemContainer {...props}>
      <PokemonName>{name}</PokemonName>
      <OwnedItem>0</OwnedItem>
    </PokemonListItemContainer>
  );
};

export default PokemonListItem;
