import React from 'react';
import {
  PokemonListItemContainer,
  PokemonName,
  OwnedItem
} from './PokemonListItem.style';
import { withRouter } from 'react-router-dom';

const PokemonListItem = ({ data, history, match, ...props }) => {
  const { name } = data;

  const redirectToDetail = () => {
    // console.log(match);
    history.push(`/detail/${name}`);
  };
  return (
    <PokemonListItemContainer {...props} onClick={() => redirectToDetail()}>
      <PokemonName>{name}</PokemonName>
      <OwnedItem>Total Owned : 0</OwnedItem>
    </PokemonListItemContainer>
  );
};

export default withRouter(PokemonListItem);
