import React from 'react';
import {
  PokemonListItemContainer,
  PokemonName,
  OwnedItem
} from './PokemonListItem.style';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonListItem = ({ data, history, match, ...props }) => {
  const { name } = data;

  const { ownedPokemon } = useSelector(state => state.pokemon);

  let total =
    ownedPokemon.length > 0
      ? ownedPokemon.filter(pokemon => {
        return pokemon.name === name ? true : false;
      })
      : 0;
  total = total.length > 0 ? total.length : 0;

  const redirectToDetail = () => {
    history.push(`/detail/${name}`);
  };

  return (
    <PokemonListItemContainer {...props} onClick={() => redirectToDetail()}>
      <PokemonName>{name}</PokemonName>
      <OwnedItem>Total Owned : {total}</OwnedItem>
    </PokemonListItemContainer>
  );
};

export default withRouter(PokemonListItem);
