import React from 'react';
import JobOfferCarousel from './JobOfferCarousel';
import { Paper } from '@material-ui/core';
import { MainComponentProps } from './MainComponent.utils';
import { JobOfferWrapper } from './MainComponent.components';

const MainComponent = ({ jobOffers }: MainComponentProps) => {
  return (
    <>
      <JobOfferWrapper>
        {jobOffers && <JobOfferCarousel jobOffers={jobOffers} />}
      </JobOfferWrapper>
    </>
  );
};
export default MainComponent;
