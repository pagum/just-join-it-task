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
  CompanyLogo,
  TitleWrapper,
} from './MainComponent.components';
import { DecisionBar } from './DecisionBar';
import MapContainer from './MapContainer';
import { SkillsPanel } from './SkillsPanel';
import { OtherInfoPanel } from './OtherInfoPanel';

interface SalaryProps {
  from: number;
  to: number;
  currency: string;
}
export interface JobOfferPageProps {
  item: JobOffer;
}
const countSalaryString = ({ from, to, currency }: SalaryProps) => (
  <TextWrapper>{` ${from}-${to} ${currency}`.toUpperCase()}</TextWrapper>
);
export const JobOfferPage = ({ item }: JobOfferPageProps) => {
  const [isMapOpen, setMap] = useState(false);
  const showMap = () => setMap(!isMapOpen);
  const goToCompanyWebSite = () => (window.location.href = item.company_url);

  return (
    <JobOfferContainer key={item.id}>
      <TitleWrapper>
        {' '}
        <CompanyLogo src={item.company_logo_url} />
        <JobTitle variant="h4">{item.title}</JobTitle>
      </TitleWrapper>
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
        <TextWrapper onClick={goToCompanyWebSite}>
          {item.company_name}
        </TextWrapper>
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
      <OtherInfoPanel item={item} />
    </JobOfferContainer>
  );
};
