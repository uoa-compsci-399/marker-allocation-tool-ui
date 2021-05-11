import React from 'react';

import { MarkerData } from '../../models/MarkerData';

const MarkerCard = ({ markerId, name, mobile, email }: MarkerData): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="ml-8 my-4">
        <div className="text-right mr-4">...</div>
        <div className="mt-0 mb-4 text-xl">{name}</div>
        <div className="my-4">{mobile}</div>
        <div className="my-4">{email}</div>
      </div>
    </div>
  );
};

export default MarkerCard;
