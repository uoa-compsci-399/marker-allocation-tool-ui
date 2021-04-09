import React from 'react';

import { Router } from 'react-router';
import Routes from './routes';

import history from './services/history';

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
