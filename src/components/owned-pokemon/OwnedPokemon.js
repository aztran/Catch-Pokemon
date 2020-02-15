import React from 'react';
import {
  OwnedWrapper,
  OwnedImg,
  OwnedList,
  OwnedDescription,
  OwnedName,
  OwnedNull
} from './OwnedPokemon.style';
import Button from 'components/button/Button';

import { useDispatch } from 'react-redux';
import { releasePokemon, releaseAll } from 'redux/pokemon/pokemon.action';

const OwnedPokemon = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>

      <OwnedWrapper>
        {data.length > 0 && <Button className="bg-red cl-white" title="Release All" onClick={() => dispatch(releaseAll())} />}
        {data.length > 0 ? data.map(pokemon => {
          console.log(data);
          return (
            <OwnedList key={pokemon.ownedName}>
              <OwnedImg src={pokemon.sprites.front_default} />
              <OwnedDescription>
                <OwnedName className="fbold fz20">{pokemon.ownedName}</OwnedName>
                <OwnedName className="bg-orange cl-white">{pokemon.name}</OwnedName>
                <div className="mt2">
                  <Button className="bg-red cl-white" title="Release " onClick={() => dispatch(releasePokemon(pokemon.ownedName))} />
                </div>
              </OwnedDescription>
            </OwnedList>
          );
        }) : <OwnedNull className="fz20 fbold">You Don't Have any Pokemon</OwnedNull>}
      </OwnedWrapper>
    </React.Fragment>
  );
};

export default OwnedPokemon;
