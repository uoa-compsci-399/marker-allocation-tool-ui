import React from 'react';

import { MarkerData } from '../../models/MarkerData';

// TODO:
const deleteMarker = (id: string): void => {
  // Delete marker using id
  console.log(`Marker with markerID ${id} will be deleted`);
};

const KebabPopup = ({ markerId, name, mobile, email }: MarkerData): JSX.Element => {
  return (
    <div className="border-2 w-20 h-24 shadow-lg">
      <button className="w-full h-12 text-center hover:bg-gray-200">Edit</button>
      <button
        className="w-full h-12 text-center hover:bg-gray-200"
        onClick={(): void => deleteMarker(markerId)}
      >
        Delete
      </button>
    </div>
  );
};

export default KebabPopup;
