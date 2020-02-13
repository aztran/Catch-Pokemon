import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: blue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const LogoContainer = styled.div`
  width: 60px;
  height: 100%;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const MenuContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const MenuItem = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  ${'' /* color: white; */}
`;
