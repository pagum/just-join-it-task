import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { JobOffer } from './MainComponent.utils';

interface JobOfferCarouselProps {
  jobOffers: JobOffer[];
}
const JobOfferCarousel = ({ jobOffers }: JobOfferCarouselProps) => {
  return (
    <Slider>
      {jobOffers.map((item, index) => (
        <div key={index}>
          <div className="center">
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default JobOfferCarousel;
