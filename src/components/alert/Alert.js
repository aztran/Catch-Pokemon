import React from 'react';
import { AlertPokemon } from './Alert.style';

const Alert = ({ msg, type }) => {
    return (
        <AlertPokemon type={type}>
            {msg}
        </AlertPokemon>
    );
}

export default Alert;
