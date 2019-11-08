import React from 'react';
import { Header, TopBarWrapper, UserEmailContainer } from './TopBar.components';
import { JobFilter } from './JobFilter';

interface TopBarProps {
  isLoading: boolean;
}

export const TopBar = ({ isLoading }: TopBarProps) => {
  return (
    <TopBarWrapper>
      <Header variant="h3">minijustjoin.it</Header>
      {!isLoading && <JobFilter />}
      <UserEmailContainer variant="h5">johndoe@email.com</UserEmailContainer>
    </TopBarWrapper>
  );
};
