import styled from 'styled-components';
import { Typography, Paper, Fab, CircularProgress } from '@material-ui/core';

export const StyledProgress = styled(CircularProgress)`
  align-self: center;
`;
export const JobOfferWrapper = styled(Paper)`
  margin: 50px 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const JobOfferContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;
export const CompanyLogo = styled.img`
  max-width: 50px;
  padding-right: 5px;
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
export const OtherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  font-size: 16px;
`;
export const Row = styled.div`
  margin: 0;
  align-self: center;
`;
export const ContainerTitle = styled(Typography)`
align-self:center
  color:#37474f
`;
