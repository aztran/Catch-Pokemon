import styled from 'styled-components';

export const BackgroundImage = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  display: block;
 
  ${
    '' /* &:after {
    content: '';
    position: absolute;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;

    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
    margin: 12px;
    background-image: url(/static/media/pokeball.c40f1486.png);
    opacity: 0.2;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  } */
  }

  ${'' /* background-color: grey; */}
  ${'' /* background-image: ${({ imageUrl }) => `url(${imageUrl})`}; */}
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 250px;
  height: auto;
  text-align: center;
`;
