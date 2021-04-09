import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ApplicationList from '../pages/ApplicationViewPage/ApplicationList';
import Example from '../components/common-ui/example';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Example} />
      <Route path="/applications" component={ApplicationList} />
    </Switch>
  );
}
