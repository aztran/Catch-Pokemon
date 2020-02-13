import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetail } from 'redux/pokemon/pokemon.action';
import Container from 'components/layouts/container/Container';
import CircleImage from 'components/circle-image/CircleImage';

import pokemon from 'assets/img/pokemon.png';
import WithSpinner from 'components/with-spinner/WithSpinner';
import Card from 'components/card/Card';
import {
  PokemonTitle,
  PokemonName,
  PokemonMoves,
  PokemonMoveList,
  PokemonTypes
} from './PokemonDetail.style';

const PokemonDetail = ({ match }) => {
  const { name } = match.params;
  const dispatch = useDispatch();
  const { pokemonSingle, isFetchingSingle } = useSelector(
    state => state.pokemon
  );

  useState(() => {
    dispatch(fetchPokemonDetail(name));
  }, [isFetchingSingle, name]);

  return (
    <Container>
      {isFetchingSingle && <WithSpinner />}

      <Card>
        <PokemonTitle src={pokemon} />
        <PokemonName className='fz20'>
          {pokemonSingle.name.toUpperCase()}
        </PokemonName>
        {pokemonSingle && (
          <React.Fragment>
            <CircleImage data={pokemonSingle} />
            <PokemonTypes className='fz20'>
              <span className='mr1 fbold'>Types </span>
              {pokemonSingle.types.map(type => (
                <span className='mr1' key={type.type.name}>
                  {type.type.name}
                </span>
              ))}
            </PokemonTypes>
            <PokemonName>Moves</PokemonName>
            <PokemonMoves>
              {pokemonSingle.moves.map(move => (
                <PokemonMoveList key={move.move.name}>
                  {move.move.name}
                </PokemonMoveList>
              ))}
            </PokemonMoves>
          </React.Fragment>
        )}
      </Card>
    </Container>
  );
};

export default PokemonDetail;
