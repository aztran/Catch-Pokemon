import styled from 'styled-components';

export const PokemonListItemContainer = styled.div`
  border-bottom: 1px solid cornflowerblue;

  display: flex;
  justify-content: space-between;
  ${'' /* margin: 12px 12px; */}

  &:hover {
    background: gray;
    cursor: pointer;
  }
`;

export const PokemonName = styled.div`
  font-size: 18px;
  color: black;
  padding: 12px;
`;

export const OwnedItem = styled.div`
  font-size: 18px;
  color: black;
  padding: 12px;
`;
