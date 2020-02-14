import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OwnedPokemon from 'components/owned-pokemon/OwnedPokemon';

const MyPokemon = () => {
  const { ownedPokemon } = useSelector(state => state.pokemon);
  useEffect(() => {
    console.log(ownedPokemon);
  }, [ownedPokemon]);
  return <OwnedPokemon data={ownedPokemon} />;
};

export default MyPokemon;
