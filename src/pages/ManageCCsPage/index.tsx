import React from 'react';

import CCsList from './CCsList';
import ExtendedFAB from 'components/common-ui/ExtendedFAB';
import useFetchCoordinators from 'hooks/useFetchCoordinators';

const ManageCCsPage = (): JSX.Element => {
  const [users, loading] = useFetchCoordinators();
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Course Coordinators
        </p>
        <ExtendedFAB
          title={'Add a New Course Coordinator'}
          to={{
            pathname: `/add-new-cc`,
          }}
        />
      </div>
      {loading ? (
        <div className="m-auto ease-linear border-8 border-t-8 border-gray-200 rounded-full w-14 h-14 loader" />
      ) : (
        <CCsList ccData={users.data} />
      )}
    </div>
  );
};

export default ManageCCsPage;
