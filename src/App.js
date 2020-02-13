import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from 'components/layouts/header/Header';
import PokemonListPage from 'pages/PokemonList';
import Theme from 'components/Theme';

const pokemonList = props => {
  return <PokemonListPage {...props} />;
};

function App() {
  return (
    <Theme>
      <Header />
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' components={PokemonList} /> */}
          <Route exact path='/' render={props => pokemonList(props)} />
        </Switch>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
