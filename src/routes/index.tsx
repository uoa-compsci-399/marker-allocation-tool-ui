import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from '../components/common-ui/example';
import ApplicationDetail from '../pages/ApplicationDetailPage';
import CourseViewPage from '../pages/CourseViewPage';
import CourseDetail from '../pages/ApplicationViewPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Example} />
      <Route
        path="/courses/:id/applications"
        exact
        render={(props): JSX.Element => {
          return <CourseDetail {...props} />;
        }}
      />
      <Route
        path="/courses/:id/applications/:id"
        exact
        render={(props): JSX.Element => {
          return <ApplicationDetail {...props} />;
        }}
      />
      <Route path="/courses" exact component={CourseViewPage} />
    </Switch>
  );
}
