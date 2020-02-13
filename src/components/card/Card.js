import React from 'react';
import { CardContainer } from './Card.style';

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
