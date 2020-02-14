export const addPokemon = (pokemon, pokemonToAdd, name) => {
  const existingPokemon = pokemon.find(data => data.id === pokemonToAdd.id);
  console.log(existingPokemon);

  //   if (existingPokemon) {
  //     return pokemon.map(pokemon =>
  //       pokemon.id === pokemonToAdd.id
  //         ? { ...pokemon, quantity: pokemon.quantity + 1 }
  //         : pokemon
  //     );
  //   }
  return [...pokemon, { ...pokemonToAdd, quantity: 1, ownedName: name }];
};
