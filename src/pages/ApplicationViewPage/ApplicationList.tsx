import React from 'react';

import Application from './Application';
import { FormApplication } from '../../models/FormApplication';

//TODO: GET data from API
const applicationArray: FormApplication[] = [
  { title: 'Application #3', date: '7/4/2021', applicantName: 'Name #3', applicationID: '1234567' },
  { title: 'Application #2', date: '5/4/2021', applicantName: 'Name #2', applicationID: '2478913' },
  { title: 'Application #1', date: '3/4/2021', applicantName: 'Name #1', applicationID: '7789456' },
];

const applicationList = (applicationArray: FormApplication[]): JSX.Element[] => {
  return applicationArray.map((application) => (
    <Application
      title={application.title}
      date={application.date}
      applicantName={application.applicantName}
      applicationID={application.applicationID}
    />
  ));
};

const ApplicationList = (): JSX.Element => {
  return <div>{applicationList(applicationArray)}</div>;
};

export default ApplicationList;
