import React from 'react';

import Application from './Application';

const ApplicationList = (): JSX.Element => {
  return (
    <div>
      <Application title="Application #1" date="7/4/2021" />
      <Application title="Application #2" date="5/4/2021" />
      <Application title="Application #3" date="3/4/2021" />
    </div>
  );
};

export default ApplicationList;
