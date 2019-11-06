import React from 'react';
import { Header, TopBarWrapper, UserEmailContainer } from './TopBar.components';

export const TopBar = () => {
  return (
    <TopBarWrapper>
      <Header variant="h3">justjoin.it</Header>
      <UserEmailContainer variant="h5">johndoe@email.com</UserEmailContainer>
    </TopBarWrapper>
  );
};
