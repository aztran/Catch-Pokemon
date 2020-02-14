import pokemonTypes from './pokemon.types';
import { addPokemon } from 'utils';
const initialState = {
  isFetching: false,
  isFetchingSingle: false,
  // SelectedPokemonLoading: true,
  message: null,
  total: 0,
  pokemons: null,
  pokemonSingle: null,
  ownedPokemon: [],
  nextUrl: null,
  prevUrl: null,
  currentPage: 1
};

const pokemonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case pokemonTypes.FETCH_POKEMONS_START:
      return {
        ...state,
        isFetching: true
      };
    case pokemonTypes.FETCH_POKEMON_START:
      return {
        ...state,
        isFetchingSingle: true
      };
    case pokemonTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemons: payload.results,
        nextUrl: payload.next,
        prevUrl: payload.prev,
        total: payload.count
      };
    case pokemonTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFetchingSingle: false,
        pokemonSingle: payload
      };
    case pokemonTypes.CATCH_POKEMON:
      return {
        ...state,
        ownedPokemon: addPokemon(
          state.ownedPokemon,
          action.payload,
          action.name
        )
      };
    default:
      return state;
  }
};

export default pokemonReducer;
