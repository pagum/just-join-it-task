import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import {
  DecisionBarContainer,
  GreenButton,
  RedButton,
} from './MainComponent.components';

export const DecisionBar = () => (
  <DecisionBarContainer>
    <RedButton>
      <CloseIcon />
    </RedButton>
    <GreenButton>
      <CheckIcon />
    </GreenButton>
  </DecisionBarContainer>
);
