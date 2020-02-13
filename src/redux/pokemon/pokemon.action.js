import pokemonTypes from './pokemon.types';
import config from 'config';
import axios from 'axios';

export const fetchPokemonsStart = () => ({
  type: pokemonTypes.FETCH_POKEMON_START
});

export const fetchPokemon = () => async dispatch => {
  dispatch(fetchPokemonsStart());
  console.log('halo');
  try {
    console.log(config.baseUrl);
    const resp = await axios.get(config.baseUrl);
    const { data } = resp;
    console.log(data);
    dispatch({
      type: pokemonTypes.FETCH_POKEMON_SUCCESS,
      payload: data
    });
  } catch (error) {}
};
