import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

import KebabPopup from './KebabPopup';

const KebabMenu = (): JSX.Element => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <button onClick={(): void => setShowPopup(!showPopup)}>
        <DotsVerticalIcon className="hover:bg-gray-300 rounded-md mt-2" />
      </button>
      {showPopup ? <KebabPopup /> : null}
    </>
  );
};

export default KebabMenu;
