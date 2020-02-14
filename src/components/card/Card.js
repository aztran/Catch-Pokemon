import React from 'react';
import { CardContainer } from './Card.style';

const Card = props => {
  return <CardContainer {...props}>{props.children}</CardContainer>;
};

export default Card;
