import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

import { MarkerData } from 'models/MarkerData';
import KebabPopup from './KebabPopup';

const KebabMenu = ({ markerId, name, mobile, email }: MarkerData): JSX.Element => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <button onClick={(): void => setShowPopup(!showPopup)}>
        <DotsVerticalIcon className="hover:bg-gray-300 rounded-md mt-2" />
      </button>
      {showPopup ? (
        <KebabPopup markerId={markerId} name={name} mobile={mobile} email={email} />
      ) : null}
    </>
  );
};

export default KebabMenu;
