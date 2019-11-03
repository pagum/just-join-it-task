import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Route, Switch, Router } from 'react-router-dom';
import { history } from './history';
import MainComponent from './MainComponent';
import { Header } from './App.components';
import { TopBar } from './TopBar/TopBar';

const App = () => {
  return (
    <Router history={history}>
      <>
        <TopBar />
        <Switch>
          <Route exact path="/" component={MainComponent} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
