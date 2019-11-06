import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import {
  DecisionBarContainer,
  GreenButton,
  RedButton,
} from './MainComponent.components';

export const DecisionBar = () => {
  const applyForJob = () => {
    //the employee gets info that the user is interested
  };
  const rejectJob = () => {
    //user moves to next offert
  };
  return (
    <DecisionBarContainer>
      <RedButton>
        <CloseIcon onClick={rejectJob} />
      </RedButton>
      <GreenButton onClick={applyForJob}>
        <CheckIcon />
      </GreenButton>
    </DecisionBarContainer>
  );
};
