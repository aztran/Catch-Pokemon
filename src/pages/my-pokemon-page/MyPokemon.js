import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyPokemon = () => {
  const { ownedPokemon } = useSelector(state => state.pokemon);
  useEffect(() => {
    console.log(ownedPokemon);
  }, []);
  return <div></div>;
};

export default MyPokemon;
