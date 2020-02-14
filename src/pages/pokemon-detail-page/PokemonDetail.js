import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetail, catchPokemon } from 'redux/pokemon/pokemon.action';
import Container from 'components/layouts/container/Container';
import pokemon from 'assets/img/pokemon.png';
import WithSpinner from 'components/with-spinner/WithSpinner';
import Card from 'components/card/Card';
import {
  PokemonTitle,
  PokemonName,
  PokemonMoves,
  PokemonMoveList,
  PokemonPositionText,
  PokemonList,
  AvatarWrapper
} from './PokemonDetail.style';
import Input from 'components/input/Input';
import Avatar from 'components/avatar/Avatar';
import ButtonPokemon from 'components/button/ButtonPokemon';
import Button from 'components/button/Button';
import Alert from 'components/alert/Alert';

const PokemonDetail = ({ match, history }) => {
  const { name } = match.params;
  const { pokemonSingle, isFetchingSingle, ownedPokemon } = useSelector(
    state => state.pokemon
  );

  const [state, setState] = useState({
    isCatch: false,
    open: false,
    message: `Oh Noo... Pokemon broke the pokeball`
  });

  const [pokeName, setForm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
    console.log(pokemonSingle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, dispatch]);

  const handlerCatch = () => {



    let isNameExist = ownedPokemon.length > 0 ? ownedPokemon.filter(name => name.ownedName === pokeName) : false;
    if (isNameExist.length > 0) {
      alert('NickName Already Exists');
      return;
    }

    // console.log(isNameExist);
    // return;
    dispatch(catchPokemon(pokemonSingle, pokeName));

    history.push('/my-pokemon');
  };

  const handleChange = event => {
    setForm(event.target.value);
  };

  const throwPokeBall = () => {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    // if (state.open) return;
    setState({ ...state, open: true });
    if (getRandomInt(2) === 1) {
      setState({
        ...state,
        isCatch: true,
        open: false,
        message: `Excellent Throw! ${pokemonSingle.name} was caught!`
      });
    }
    setTimeout(() => {
      // setState({ ...state, open: false });
    }, 2000);
  };

  return (
    <Container>
      {isFetchingSingle && <WithSpinner />}
      <PokemonTitle src={pokemon} />
      <Card className='mt3'>
        {pokemonSingle && (
          <React.Fragment>
            <PokemonName className='fz20'>
              {pokemonSingle.name.toUpperCase()}
            </PokemonName>
            <ButtonPokemon onClick={() => throwPokeBall()}>Throw Ball</ButtonPokemon>
            <AvatarWrapper>
              <Avatar img={pokemonSingle.sprites.front_default} />
              <Avatar img={pokemonSingle.sprites.back_default} />
            </AvatarWrapper>
            {state.isCatch ? (
              <React.Fragment>
                <Alert msg={`Excellent Throw! ${pokemonSingle.name} was caught!`} />
                <Input
                  placeholder='Your Pokemon NickName'
                  name='pokeName'
                  onChange={e => handleChange(e)}
                />
                <Button className="bg-yellow" onClick={handlerCatch} title="Add to My pokemon List" />
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <PokemonName className='mr1 fbold'>
                    {pokemonSingle.types.length > 1 ? 'Types' : 'Type'}{' '}
                  </PokemonName>
                  <PokemonPositionText className='fz12'>
                    {pokemonSingle.types.map(type => (
                      <PokemonList
                        className='mr1 bg-orange cl-white'
                        key={type.type.name}
                      >
                        {type.type.name}
                      </PokemonList>
                    ))}
                  </PokemonPositionText>
                  <PokemonName>Abilites</PokemonName>
                  <PokemonPositionText className='fz12'>
                    {pokemonSingle.abilities.map(ability => (
                      <PokemonList
                        className='mr1 bg-red cl-white'
                        key={ability.ability.name}
                      >
                        {ability.ability.name}
                      </PokemonList>
                    ))}
                  </PokemonPositionText>
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
            {/* {alert(state.message)} */}
            {state.open && alert(state.message)}
          </React.Fragment>
        )}
      </Card>
    </Container>
  );
};

export default PokemonDetail;
