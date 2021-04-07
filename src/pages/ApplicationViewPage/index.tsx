import React from 'react';

import ApplicationList from './ApplicationList';

const ApplicationViewPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex justify-end mx-12 my-4">
        <label className="mx-4 text-lg font-semibold">Sort by:</label>
        <select className="text-lg">
          <option>Latest</option>
          <option>GPA</option>
          <option>Location</option>
        </select>
      </div>
      <ApplicationList />
    </div>
  );
};

export default ApplicationViewPage;
