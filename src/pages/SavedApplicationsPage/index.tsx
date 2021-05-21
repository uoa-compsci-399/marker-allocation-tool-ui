import React from 'react';
import SavedApplication from './SavedApplication';
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
      applicantName: 'Songyan Teng',
      applicationID: '2456879',
    },
  ];
};

const renderApplications = (courseId: string): JSX.Element[] =>
  savedApplicantDetails(courseId).map((application: ApplicationType) => {
    const { title, date, applicantName, applicationID } = application;
    return (
      <SavedApplication
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
