import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonListContainer, BtnWrapper, BtnPagination } from './PokemonList.style';
import PokemonListItem from './PokemonListItem';

import { fetchPokemon } from 'redux/pokemon/pokemon.action';
import WithSpinner from 'components/with-spinner/WithSpinner';
const PokemonList = () => {
  const { pokemons, nextUrl, prevUrl, isFetching } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  return (
    <PokemonListContainer>
      {isFetching && <WithSpinner />}
      {!isFetching && pokemons ?
        pokemons.map(pokemon => (
          <PokemonListItem data={pokemon} key={pokemon.name} />
        )) : null}
      <BtnWrapper>
        <BtnPagination className="bg-yellow cl-white fz18" onClick={() => dispatch(fetchPokemon(prevUrl))}>Prev</BtnPagination>
        <BtnPagination className="bg-yellow cl-white fz18" onClick={() => dispatch(fetchPokemon(nextUrl))}>Next</BtnPagination>
      </BtnWrapper>
    </PokemonListContainer>
  );
};

export default PokemonList;
