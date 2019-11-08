import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import queryString from 'query-string';
import * as R from 'ramda';

import { history } from './history';
import MainComponent from './MainComponent/MainComponent';
import { TopBar } from './TopBar/TopBar';
import { JobOffer } from './MainComponent/MainComponent.utils';
import JobOfferCarousel from './MainComponent/JobOfferCarousel';
import map from 'ramda/es/map';

const App = () => {
  const [jobOffers, setJobOffers] = useState<JobOffer[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    await fetch('https://test.justjoin.it/offers').then(res =>
      res.json().then(res => {
        const parsed = queryString.parse(window.location.search);
        setJobOffers(res);
        setLoading(false);
        parsed && filterJobOffers(res);
      }),
    );
  }
  const filterJobOffers = (jobs: JobOffer[]) => {
    const parsed = queryString.parse(window.location.search);

    const tech = parsed.technology;

    const doesContainJobOffer = (offer: JobOffer) => {
      const skillsArray = offer.skills.map(skill => skill.name.toLowerCase());
      const filteredSkills = skillsArray.filter(item =>
        item.includes((tech as String).toLowerCase()),
      );
      return filteredSkills.length > 0;
    };
    const filteredOffers = jobs!.filter(offer => doesContainJobOffer(offer));
    setJobOffers(filteredOffers);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <>
            <TopBar isLoading={isLoading} />
            <MainComponent jobOffers={jobOffers} isLoading={isLoading} />
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
