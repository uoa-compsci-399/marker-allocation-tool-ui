import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

import { CCData } from '../../models/CCData';
import KebabPopup from './KebabPopup';

const KebabMenu = ({ ccId, name, mobile, email }: CCData): JSX.Element => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <button onClick={(): void => setShowPopup(!showPopup)}>
        <DotsVerticalIcon className="hover:bg-gray-300 rounded-md mt-2" />
      </button>
      {showPopup ? <KebabPopup ccId={ccId} name={name} mobile={mobile} email={email} /> : null}
    </>
  );
};

export default KebabMenu;
