import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

import KebabPopup from './KebabPopup';
import { CoordinatorData } from 'models/CoordinatorData';

const KebabMenu = ({ userID }: CoordinatorData): JSX.Element => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <button onClick={(): void => setShowPopup(!showPopup)}>
        <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="content-center inline-block w-6 h-6 mr-2"
        >
          <DotsVerticalIcon className="hover:bg-gray-300 rounded-md mt-2" />
        </svg>
      </button>
      {showPopup ? <KebabPopup userID={userID} /> : null}
    </>
  );
};

export default KebabMenu;
