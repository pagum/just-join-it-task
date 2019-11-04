import React, { useState } from 'react';
import { JobOffer } from './MainComponent.utils';
import MoneyIcon from '@material-ui/icons/Money';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MapIcon from '@material-ui/icons/Map';

import {
  JobOfferContainer,
  JobTitle,
  FieldContainer,
  TextWrapper,
} from './MainComponent.components';
import { DecisionBar } from './DecisionBar';
import MapContainer from './MapContainer';
import { SkillsPanel } from './SkillsPanel';

interface SalaryProps {
  from: number;
  to: number;
  currency: string;
}
interface JobOfferPageProps {
  item: JobOffer;
}
const countSalaryString = ({ from, to, currency }: SalaryProps) => (
  <TextWrapper>{` ${from}-${to} ${currency}`.toUpperCase()}</TextWrapper>
);
export const JobOfferPage = ({ item }: JobOfferPageProps) => {
  const [isMapOpen, setMap] = useState(false);
  const showMap = () => setMap(!isMapOpen);
  return (
    <JobOfferContainer key={item.id}>
      <JobTitle variant="h4">{item.title}</JobTitle>
      <FieldContainer color="green">
        <MoneyIcon />
        {countSalaryString({
          from: item.salary_from,
          to: item.salary_to,
          currency: item.salary_currency,
        })}
      </FieldContainer>
      <FieldContainer>
        <ApartmentIcon />
        <TextWrapper> {item.company_name} </TextWrapper>
      </FieldContainer>
      <FieldContainer>
        <MapIcon onClick={showMap} />
        <TextWrapper>
          {item.city}, {item.street}
        </TextWrapper>
      </FieldContainer>
      {isMapOpen && (
        <MapContainer
          latitude={item.latitude}
          longitude={item.longitude}
          street={item.street}
        />
      )}
      <SkillsPanel skills={item.skills} />
      <DecisionBar />
    </JobOfferContainer>
  );
};
