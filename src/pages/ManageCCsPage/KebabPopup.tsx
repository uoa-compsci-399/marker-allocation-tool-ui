import React from 'react';

import { CoordinatorData } from 'models/CoordinatorData';

// TODO: Delete marker using id
const deleteCoordinator = (id: string): void => {
  console.log(`Course Coordinator with userID ${id} will be deleted`);
};

const KebabPopup = ({ userID }: CoordinatorData): JSX.Element => {
  return (
    <div className="border-2 w-20 h-24 shadow-lg">
      <button className="w-full h-12 text-center hover:bg-gray-200">Edit</button>
      <button
        className="w-full h-12 text-center hover:bg-gray-200"
        onClick={(): void => deleteCoordinator(userID)}
      >
        Delete
      </button>
    </div>
  );
};

export default KebabPopup;
