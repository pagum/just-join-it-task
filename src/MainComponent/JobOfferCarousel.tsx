import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import MoneyIcon from '@material-ui/icons/Money';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MapIcon from '@material-ui/icons/Map';

import { JobOffer } from './MainComponent.utils';
import {
  JobOfferContainer,
  JobTitle,
  FieldContainer,
  TextWrapper,
} from './MainComponent.components';
import { DecisionBar } from './DecisionBar';
import MapContainer from './MapContainer';
import { JobOfferPage } from './JobOfferPage';
interface JobOfferCarouselProps {
  jobOffers: JobOffer[];
}
interface SalaryProps {
  from: number;
  to: number;
  currency: string;
}
const JobOfferCarousel = ({ jobOffers }: JobOfferCarouselProps) => (
  <Slider>
    {jobOffers.map(item => (
      <div>
        <JobOfferPage item={item} />
      </div>
    ))}
  </Slider>
);
export default JobOfferCarousel;
