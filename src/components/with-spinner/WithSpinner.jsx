import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = () => {
  // console.log(isFetchingSingle);
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default WithSpinner;
