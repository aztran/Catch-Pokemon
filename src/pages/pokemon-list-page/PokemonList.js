import React, { useEffect } from 'react';
import Container from 'components/layouts/container/Container';
import PokemonList from 'components/pokemon-list/PokemonList';
import { fetchPokemon } from 'redux/pokemon/pokemon.action';

import { useDispatch } from 'react-redux';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  // const { pokemons } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  });
  return (
    <Container>
      <PokemonList></PokemonList>
    </Container>
  );
};

export default PokemonListPage;
