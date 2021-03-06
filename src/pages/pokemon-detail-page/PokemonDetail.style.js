import styled from 'styled-components';

export const PokemonTitle = styled.img`
  width: 200px;
  margin: 0 auto;
  display: block;
`;

export const PokemonName = styled.h4`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const PokemonMoves = styled.ul`
  text-decoration: none;
  display: block;
  column-count: 2;
  padding: 0;
`;

export const PokemonPositionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonList = styled.div`
  padding: 12px;
  border-radius: 50%;
`;

export const PokemonMoveList = styled.li`
  font-size: 15px;
  list-style: none;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
