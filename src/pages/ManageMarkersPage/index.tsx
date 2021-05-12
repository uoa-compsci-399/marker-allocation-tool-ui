import React from 'react';

import MarkersList from './MarkersList';

// fetch markers
const markers = [
  {
    markerId: '0000',
    name: 'Songyan Teng',
    mobile: '0224471114',
    email: 'sten223@aucklanduni.ac.nz',
  },
  {
    markerId: '0001',
    name: 'Darren Chen',
    mobile: '0213858345',
    email: 'dche125@aucklanduni.ac.nz',
  },
  {
    markerId: '0002',
    name: 'Isaac Kabel',
    mobile: '0278842239',
    email: 'ikab999@aucklanduni.ac.nz',
  },
];

const ManageCoursesPage = (): JSX.Element => {
  return (
    <div>
      <MarkersList markerData={markers} />
    </div>
  );
};

export default ManageCoursesPage;
