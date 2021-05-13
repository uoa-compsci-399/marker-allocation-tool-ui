import { Switch, Route } from 'react-router-dom';

import Form from 'pages/CourseApplyPage';
import ApplicationDetail from 'pages/ApplicationDetailPage';
import CourseViewPage from 'pages/CourseViewPage';
import CourseDetail from 'pages/ApplicationViewPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
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
    </Switch>
  );
}
