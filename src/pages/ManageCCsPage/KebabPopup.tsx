import React from 'react';

import { CCData } from '../../models/CCData';

// TODO:
const deleteCoordinator = (id: string): void => {
  // Delete marker using id
  console.log(`Course Coordinator with ccID ${id} will be deleted`);
};

const KebabPopup = ({ ccId, name, mobile, email }: CCData): JSX.Element => {
  return (
    <div className="border-2 w-20 h-24 shadow-lg">
      <button className="w-full h-12 text-center hover:bg-gray-200">Edit</button>
      <button
        className="w-full h-12 text-center hover:bg-gray-200"
        onClick={(): void => deleteCoordinator(ccId)}
      >
        Delete
      </button>
    </div>
  );
};

export default KebabPopup;
