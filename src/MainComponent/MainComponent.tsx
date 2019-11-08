import React from 'react';

import JobOfferCarousel from './JobOfferCarousel';
import { MainComponentProps } from './MainComponent.utils';
import { JobOfferWrapper, StyledProgress } from './MainComponent.components';
import { DecisionBar } from './DecisionBar';

const MainComponent = ({ jobOffers, isLoading }: MainComponentProps) => {
  return (
    <>
      <JobOfferWrapper>
        {isLoading ? (
          <StyledProgress color="secondary" />
        ) : (
          <>
            {jobOffers &&
              (jobOffers!.length > 0 ? (
                <JobOfferCarousel jobOffers={jobOffers} />
              ) : (
                <div>no job for you now, sorry</div>
              ))}
            <DecisionBar />
          </>
        )}
      </JobOfferWrapper>
    </>
  );
};
export default MainComponent;
