import React from 'react';
import { BaseButton, PokemonButtonWrapper } from './Button.style';

const Button = ({ title, ...props }) => {
    return (
        <PokemonButtonWrapper>
            <BaseButton {...props}>
                {title}
            </BaseButton>
        </PokemonButtonWrapper>
    );
}

export default Button;
