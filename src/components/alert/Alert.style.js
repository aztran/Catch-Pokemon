import styled from 'styled-components';

export const AlertPokemon = styled.div`
 padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background:  ${({ type }) => (type === 'danger' ? "red" : "green")};
  color: white;
`