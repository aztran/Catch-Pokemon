export const addPokemon = (pokemon, pokemonToAdd, name) => {

  return [...pokemon, { ...pokemonToAdd, ownedName: name }];
};


export const removePokemon = (pokemons, nameToRemove) => {
  // const existingPokemon = pokemons.find(
  //   pokemon => pokemon.ownedName.pokeName === nameToRemove
  // )
  console.log(nameToRemove, 'name')

  return pokemons.filter(pokemon => pokemon.ownedName !== nameToRemove);
  // console.log(existingPokemon)
}