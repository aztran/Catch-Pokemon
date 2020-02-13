import React from 'react';
import { ContainerLayout } from './Container.style';
const Container = ({ children }) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};

export default Container;
