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
        sessionStorage.setItem('jobs', JSON.stringify(res));
        setLoading(false);
        parsed.technology && filterJobOffers(res);
      }),
    );
  }
  const filterJobOffers = (jobs: JobOffer[]) => {
    const parsed = queryString.parse(window.location.search);

    const tech = parsed.technology;

    const doesContainJobOffer = (offer: JobOffer) => {
      const skillsArray = offer.skills.map(skill => skill.name.toLowerCase());
      const regex = /^java($|ee|\s)/gi;
      const filteredSkills = skillsArray.filter(item => {
        return tech === 'java'
          ? item.match(regex)
          : item.includes((tech as String).toLowerCase());
      });
      return filteredSkills.length > 0;
    };

    const filteredOffers = jobs!.filter(offer => doesContainJobOffer(offer));
    setJobOffers(filteredOffers);
  };
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    sessionStorage.getItem('jobs')
      ? parsed.technology &&
        filterJobOffers(JSON.parse(sessionStorage.getItem('jobs')!))
      : fetchData();
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
