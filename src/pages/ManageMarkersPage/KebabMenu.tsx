import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

// const openMenu = () => {
//     return (
//         <div>

//         </div>
//     )
// }

const KebabMenu = (): JSX.Element => {
  return (
    <button>
      <DotsVerticalIcon className="hover:bg-gray-300 rounded-md mt-2" />
    </button>
  );
};

export default KebabMenu;
