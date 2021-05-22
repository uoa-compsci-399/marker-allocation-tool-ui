import React from 'react';

import useFetch from '../../hooks/useFetch';
import CCsList from './CCsList';
import ExtendedFAB from './ExtendedFAB';

// fetch course coordinators
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

const ManageCCsPage = (): JSX.Element => {
  const [users, loading] = useFetch('https://dev.classe.wumbo.co.nz/api/users');
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Course Coordinators
        </p>
        <ExtendedFAB title={'Add a New Course Coordinator'} to={'/add-new-cc'} />
      </div>
      {loading ? (
        <div className="m-auto ease-linear border-8 border-t-8 border-gray-200 rounded-full w-14 h-14 loader"></div>
      ) : (
        <CCsList ccData={courseCoordinators} />
      )}
      {console.log(users)}
    </div>
  );
};

export default ManageCCsPage;
