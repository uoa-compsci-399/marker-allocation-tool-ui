import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from '../components/common-ui/example';
import ApplicationViewPage from '../pages/ApplicationViewPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Example} />
      <Route path="/applications" component={ApplicationViewPage} />
    </Switch>
  );
}
