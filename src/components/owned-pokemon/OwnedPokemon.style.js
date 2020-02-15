import styled from 'styled-components';

export const OwnedWrapper = styled.div`
  background: white;
  overflow: auto;
  height: 80vh;
  display: block;
`;

export const OwnedList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const OwnedImg = styled.img`
  width: 50vh;
`;

export const OwnedDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  align-items: flex-end;
`;

export const OwnedName = styled.div`
  padding: 10px;
`

export const OwnedNull = styled.div`
  padding: 20px;
  text-align: center;
`
