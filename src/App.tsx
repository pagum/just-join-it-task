import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

import { history } from './history';
import MainComponent from './MainComponent/MainComponent';
import { TopBar } from './TopBar/TopBar';
import { JobOffer } from './MainComponent/MainComponent.utils';

const App = () => {
  const [jobOffers, setJobOffers] = useState<JobOffer[] | undefined>(undefined);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const res = await fetch('https://test.justjoin.it/offers');

    res
      .json()
      .then(res => setJobOffers(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router history={history}>
      <>
        <TopBar />
        <MainComponent jobOffers={jobOffers} />
      </>
    </Router>
  );
};

export default App;
