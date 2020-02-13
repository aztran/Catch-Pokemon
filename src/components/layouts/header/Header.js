import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  MenuContainer,
  MenuItem
} from './Header.style';
import logo from 'assets/img/icon.png';
const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>{/* <Logo src={logo} /> */}</LogoContainer>
      <MenuContainer>
        <MenuItem>Pokemmon List</MenuItem>
        <MenuItem>My Pokemon</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
