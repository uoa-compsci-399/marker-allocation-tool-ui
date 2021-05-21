import React from 'react';

import FloatingButton from '../../components/common-ui/FAB';
import Modal from '../../components/common-ui/Modal';
import { useModal } from '../../hooks/useModal';
import CCsList from './CCsList';

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
  const [isShown, toggle] = useModal();

  const modal = <React.Fragment>Modal!</React.Fragment>;

  return (
    <div>
      <CCsList ccData={courseCoordinators} />
      <Modal isShown={isShown} hide={toggle} modalContent={modal} headerText={'Modal!'} />
      <FloatingButton onClick={toggle} />
    </div>
  );
};

export default ManageCoursesPage;
