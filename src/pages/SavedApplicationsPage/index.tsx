import React from 'react';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from '../../models/FormApplication';

// TODO: Send GET request
// This should be a response of an api request like /api/get_saved_apps
// which will need user id or anything that can specify currently signed-in user
const savedApplicantDetails = (id: string): FormApplication[] => {
  const courseNumber = id.substr(2);
  return [
    {
      courseID: id,
      title: `${courseNumber} Saved Application #1`,
      date: '11/04/21',
      applicantName: 'Jim Park',
      applicationID: '2456879',
    },
    {
      courseID: id,
      title: `${courseNumber} Saved Application #2`,
      date: '08/04/21',
      applicantName: 'Isaac Kaabel',
      applicationID: '1234567',
    },
    {
      courseID: id,
      title: `${courseNumber} Saved Application #3`,
      date: '05/04/21',
      applicantName: 'Darren Chen',
      applicationID: '5968745',
    },
  ];
};

const renderApplications = (courseId: string): JSX.Element[] =>
  savedApplicantDetails(courseId).map((application: ApplicationType) => {
    const { title, date, applicantName, applicationID } = application;
    return (
      <Application
        courseID={courseId}
        title={title}
        date={date}
        applicantName={applicantName}
        applicationID={applicationID}
      />
    );
  });

const SavedApplicationsPage = (): JSX.Element => {
  return <div>{renderApplications}</div>;
};

export default SavedApplicationsPage;
