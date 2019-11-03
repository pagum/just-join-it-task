import React from 'react';
import JobOfferCarousel from './Carousel';
import { Paper } from '@material-ui/core';
import { MainComponentProps } from './MainComponent.utils';
import { JobOfferWrapperWrapper } from './MainComponent.components';

const MainComponent = ({ jobOffers }: MainComponentProps) => {
  return (
    <>
      <JobOfferWrapperWrapper>
        {jobOffers && <JobOfferCarousel jobOffers={jobOffers} />}
      </JobOfferWrapperWrapper>
    </>
  );
};
export default MainComponent;
