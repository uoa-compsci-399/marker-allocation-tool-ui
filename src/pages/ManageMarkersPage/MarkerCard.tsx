import React from 'react';

import { MarkerData } from '../../models/MarkerData';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import KebabMenu from './KebabMenu';

const MarkerCard = ({ markerId, name, mobile, email }: MarkerData): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="ml-12 my-8">
        <div className="mt-0 mb-4 w-full text-center">
          <span className="text-3xl font-medium">{name}</span>
          <span className="float-right mr-12 w-8 h-8">
            <KebabMenu />
          </span>
        </div>
        <div className="my-8">
          <span className="float-left mr-8">
            <PhoneIcon className="w-6 h-6" />
          </span>
          <span className="text-xl">{mobile}</span>
        </div>
        <div className="my-8">
          <span className="float-left mr-8">
            <MailIcon className="w-6 h-6" />
          </span>{' '}
          <span className="text-xl">{email}</span>
        </div>
        <div className="my-8">
          <span className="text-xl">Assigned Course(s):</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MarkerCard;
