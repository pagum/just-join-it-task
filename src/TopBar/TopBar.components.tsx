import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const TopBarWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
`;
export const Header = styled(Typography)`
  color: #37474f;
  font-weight: 600;
`;

export const UserEmailContainer = styled(Typography)`
  color: #4267b2;
`;
