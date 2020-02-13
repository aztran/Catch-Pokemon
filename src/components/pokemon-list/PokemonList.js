import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonListContainer } from './PokemonList.style';

import PokemonListItem from './PokemonListItem';

import { fetchPokemon } from 'redux/pokemon/pokemon.action';
const PokemonList = () => {

  const { pokemons } = useSelector(state => state.pokemon);

  return (
    <PokemonListContainer className='grid'>
      {pokemons && pokemons.map(pokemon => (
        <PokemonListItem data={pokemon} />
      ))}
    </PokemonListContainer>
  );
};

export default PokemonList;
