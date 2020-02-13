import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from 'components/layouts/header/Header';
import PokemonListPage from 'pages/pokemon-list-page/PokemonList';
import PokemonDetailPage from 'pages/pokemon-detail-page/PokemonDetail';
import Theme from 'components/Theme';

const pokemonList = props => {
  return <PokemonListPage {...props} />;
};

function App() {
  return (
    <Theme>
      <Header />
      <Switch>
        {/* <Route exact path='/' components={PokemonList} /> */}
        <Route exact path='/' render={props => pokemonList(props)} />
        <Route path='/detail/:name' component={PokemonDetailPage} />
      </Switch>
    </Theme>
  );
}

export default App;
