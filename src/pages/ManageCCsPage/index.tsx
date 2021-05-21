import React from 'react';

import CCsList from './CCsList';
import ExtendedFAB from './ExtendedFAB';

// fetch markers
const courseCoordinators = [
  {
    ccId: '0000',
    name: 'Asma Shakil',
    mobile: '0229572357',
    email: 'asha747@aucklanduni.ac.nz',
  },
  {
    ccId: '0001',
    name: 'Burkhard Wuensche',
    mobile: '0275882229',
    email: 'bwue853@aucklanduni.ac.nz',
  },
];

const ManageCoursesPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Course Coordinators
        </p>
        <ExtendedFAB
          title={'Add a New Course Coordinator'}
          to={'/add-new-cc'}
        />
      </div>
      <CCsList ccData={courseCoordinators} />
    </div>
  );
};

export default ManageCoursesPage;
