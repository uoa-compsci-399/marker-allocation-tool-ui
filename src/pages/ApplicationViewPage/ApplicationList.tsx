import React from 'react';

import Application from './Application';

const ApplicationList = (): JSX.Element => {
  return (
    <div>
      <Application title="Application #3" date="7/4/2021" applicantName="Name #3" />
      <Application title="Application #2" date="5/4/2021" applicantName="Name #2" />
      <Application title="Application #1" date="3/4/2021" applicantName="Name #1" />
    </div>
  );
};

export default ApplicationList;
