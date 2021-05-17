import React from 'react';

// TODO:
const deleteMarker = (id: string): void => {
  // Delete marker using id
  console.log(id);
};

const KebabPopup = (): JSX.Element => {
  return (
    <div className="border-2 w-20 h-24 shadow-lg">
      <button className="w-full h-12 text-center hover:bg-gray-200">Edit</button>
      <button
        className="w-full h-12 text-center hover:bg-gray-200"
        onClick={(): void => deleteMarker('ay')}
      >
        Delete
      </button>
    </div>
  );
};

export default KebabPopup;
