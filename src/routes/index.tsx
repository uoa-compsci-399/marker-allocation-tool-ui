import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../pages/CourseApplyPage';
import ApplicationDetail from '../pages/ApplicationDetailPage';
import CourseViewPage from '../pages/CourseViewPage';
import CourseDetail from '../pages/ApplicationViewPage';
import DashBoardViewPage from '../pages/DashBoardPage';
import ManageMarkersPage from '../pages/ManageMarkersPage';
import ManageCCsPage from '../pages/ManageCCsPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/dashBoard" exact component={DashBoardViewPage} />
      <Route path="/apply" exact component={Form} />
      <Route path="/courses" exact component={CourseViewPage} />
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
      <Route path="/manage-markers" exact component={ManageMarkersPage} />
      <Route path="/manage-course-coordinators" exact component={ManageCCsPage} />
    </Switch>
  );
}
