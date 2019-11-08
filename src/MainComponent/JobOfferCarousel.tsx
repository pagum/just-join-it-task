import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { JobOffer } from './MainComponent.utils';
import { JobOfferPage } from './JobOfferPage';
import { DecisionBar } from './DecisionBar';

interface JobOfferCarouselProps {
  jobOffers: JobOffer[];
}

const JobOfferCarousel = ({ jobOffers }: JobOfferCarouselProps) => (
  <Slider>
    {jobOffers.map(item => (
      <div key={item.id}>
        <JobOfferPage item={item} />
      </div>
    ))}
  </Slider>
);
export default JobOfferCarousel;
