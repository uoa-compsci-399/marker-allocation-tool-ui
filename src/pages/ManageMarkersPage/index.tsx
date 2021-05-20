import React from 'react';

import FloatingButton from './FAB';
import MarkersList from './MarkersList';
import Modal from '../../components/common-ui/Modal';
import { useModal } from '../../hooks/useModal';

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
  const [isShown, toggle] = useModal();

  const modal = <React.Fragment>Modal!</React.Fragment>;

  return (
    <div>
      <MarkersList markerData={markers} />
      <Modal isShown={isShown} hide={toggle} modalContent={modal} headerText={'Modal!'} />
      <FloatingButton onClick={toggle} />
    </div>
  );
};

export default ManageCoursesPage;
