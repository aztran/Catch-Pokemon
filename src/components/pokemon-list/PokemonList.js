import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonListContainer } from './PokemonList.style';
import PokemonListItem from './PokemonListItem';
const PokemonList = () => {
  const { pokemons } = useSelector(state => state.pokemon);

  return (
    <PokemonListContainer>
      {pokemons &&
        pokemons.map(pokemon => (
          <PokemonListItem data={pokemon} key={pokemon.name} />
        ))}
    </PokemonListContainer>
  );
};

export default PokemonList;
