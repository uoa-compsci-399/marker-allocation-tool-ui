import { Switch, Route, Redirect } from 'react-router-dom';

import Form from 'pages/CourseApplyPage';
import ApplicationDetail from 'pages/ApplicationDetailPage';
import CourseViewPage from 'pages/CourseViewPage';
import CourseDetail from 'pages/ApplicationViewPage';
import DashBoardViewPage from 'pages/DashBoardPage';
import ManageMarkersPage from 'pages/ManageMarkersPage';
import NewCoursePage from 'pages/NewCoursePage';
import ManageCCsPage from 'pages/ManageCCsPage';
import AddCCPage from 'pages/AddCCPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/dashboard" exact component={DashBoardViewPage} />
      <Route path="/apply" exact component={Form} />
      <Route path="/courses" exact component={CourseViewPage} />
      <Route path="/manage-markers" exact component={ManageMarkersPage} />
      <Route path="/coursecoordinators" exact component={ManageCCsPage} />
      <Route
        path="/courses/new"
        exact
        render={(props): JSX.Element => {
          if (!props.location.state) {
            return <Redirect to="/courses" />;
          }
          return <NewCoursePage {...props} />;
        }}
      />
      <Route
        path="/courses/:id/edit"
        exact
        render={(props): JSX.Element => {
          if (!props.location.state) {
            return <Redirect to="/courses" />;
          }
          return <NewCoursePage {...props} />;
        }}
      />
      <Route
        path="/courses/:id/applications"
        exact
        render={(props): JSX.Element => {
          if (!props.location.state) {
            return <Redirect to="/courses" />;
          }
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
      <Route
        path="/coursecoordinator/new"
        exact
        render={(props): JSX.Element => {
          if (!props.location.state) {
            return <Redirect to="/coursecoordinators" />;
          }
          return <AddCCPage {...props} />;
        }}
      />
      <Route
        path="/coursecoordinator/:id/edit"
        exact
        render={(props): JSX.Element => {
          if (!props.location.state) {
            return <Redirect to="/coursecoordinators" />;
          }
          return <AddCCPage {...props} />;
        }}
      />
      <Redirect to="/apply" />
    </Switch>
  );
}
