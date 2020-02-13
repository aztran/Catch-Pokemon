import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  MenuItem
} from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>{/* <Logo src={logo} /> */}</LogoContainer>
      <MenuContainer>
        <MenuItem to='/'>Pokemmon List</MenuItem>
        <MenuItem to='/my-pokemon'>My Pokemon</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
