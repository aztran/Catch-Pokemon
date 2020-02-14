import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuItem,
  Logo
} from './Header.style';

import icon from 'assets/img/icon.png'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer><Logo src={icon} /></LogoContainer>
      <MenuContainer>
        <MenuItem to='/'>Pokemon List</MenuItem>
        <MenuItem to='/my-pokemon'>My Pokemon</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
