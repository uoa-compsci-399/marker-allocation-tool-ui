import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from '../components/common-ui/example';
import ApplicationViewPage from '../pages/ApplicationViewPage';
import ApplicationDetail from '../pages/ApplicationDetailPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Example} />
      <Route path="/applications" exact component={ApplicationViewPage} />
      <Route
        path="/applications/:id"
        render={(props): JSX.Element => {
          return <ApplicationDetail {...props} />;
        }}
      />
    </Switch>
  );
}
