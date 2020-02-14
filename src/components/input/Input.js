import React from 'react';
import { InputContainer, InputBox } from './Input.style';
const Input = props => {
  return (
    <InputContainer>
      <InputBox {...props} />
    </InputContainer>
  );
};

export default Input;
