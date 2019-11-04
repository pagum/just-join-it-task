import styled from 'styled-components';
import { Typography, Paper, Fab } from '@material-ui/core';

export const JobOfferWrapper = styled(Paper)`
  margin: 100px;
  padding: 50px 20px;
  display: flex;
`;

export const JobOfferContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const DecisionBarContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 300px;
  align-self: center;
  min-height: 60px;
`;
export const FieldContainer = styled.div`
  color: ${props => props.color};
  align-self: center;
  display: flex;
`;

export const TextWrapper = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const JobTitle = styled(Typography)`
  align-self: center;
`;
const Button = styled(Fab)`
  color: white !important;
  box-shadow: none !important;
`;
export const RedButton = styled(Button)`
  background-color: red !important;
`;

export const GreenButton = styled(Button)`
  background-color: green !important;
`;

export const SkillsWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-self: center;
`;
