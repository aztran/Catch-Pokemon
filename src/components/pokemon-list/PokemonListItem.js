import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (ownedPokemon) {
      console.log(ownedPokemon, 's');
    }
  }, [ownedPokemon]);

  let totalOwned =
    ownedPokemon.length > 0
      ? ownedPokemon.filter(pokemon => {
          return pokemon.name === name ? true : false;
        })
      : 0;
  totalOwned = totalOwned.length > 0 ? totalOwned.length : 0;
  // console.log(totalOwned.length);
  const redirectToDetail = () => {
    history.push(`/detail/${name}`);
  };

  return (
    <PokemonListItemContainer {...props} onClick={() => redirectToDetail()}>
      <PokemonName>{name}</PokemonName>
      <OwnedItem>Total Owned : {totalOwned}</OwnedItem>
    </PokemonListItemContainer>
  );
};

export default withRouter(PokemonListItem);
