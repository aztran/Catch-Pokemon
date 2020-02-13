import pokemonTypes from './pokemon.types';
import config from 'config';
import axios from 'axios';

export const fetchPokemonsStart = () => ({
  type: pokemonTypes.FETCH_POKEMONS_START
});

export const fetchPokemonStart = () => ({
  type: pokemonTypes.FETCH_POKEMON_START
});

export const fetchPokemon = () => async dispatch => {
  dispatch(fetchPokemonsStart());

  try {
    const resp = await axios.get(config.baseUrl);
    const { data } = resp;

    dispatch({
      type: pokemonTypes.FETCH_POKEMONS_SUCCESS,
      payload: data
    });
  } catch (error) {}
};

export const fetchPokemonDetail = name => async dispatch => {
  dispatch(fetchPokemonStart());
  try {
    const resp = await axios.get(`${config.baseUrl}/${name}`);
    const { data, status } = resp;

    if (status === 200) {
      // console.log(data);
      dispatch({
        type: pokemonTypes.FETCH_POKEMON_SUCCESS,
        payload: data
      });
    }
  } catch (error) {}
};
