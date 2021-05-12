import React from 'react';

import { MarkerData } from '../../models/MarkerData';

const MarkerCard = ({ markerId, name, mobile, email }: MarkerData): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="ml-8 my-8">
        <div className="mt-0 mb-4 w-full">
          <span className="text-2xl">{name}</span>
          <span className="float-right mr-8">KebabMenu</span>
        </div>
        <div className="my-4">{mobile}</div>
        <div className="my-4">{email}</div>
      </div>
    </div>
  );
};

export default MarkerCard;
