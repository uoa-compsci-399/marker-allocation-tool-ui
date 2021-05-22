import React from 'react';

import { MailIcon } from '@heroicons/react/outline';
import KebabMenu from './KebabMenu';
import { CoordinatorData } from 'models/CoordinatorData';

const CCCard = ({ userID, firstName, lastName, email, courses }: CoordinatorData): JSX.Element => {
  const assignedCourses = !courses ? 'No Courses' : courses;
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-blue-300 border-2 my-5 py-4">
      <div className="ml-12 my-8">
        <div className="mt-0 mb-4 w-full text-center">
          <span className="text-3xl font-medium">{`${firstName} ${lastName}`}</span>
          <span className="float-right mr-12 w-8 h-8">
            <KebabMenu userID={userID} />
          </span>
        </div>
        <div className="my-8">
          <span className="float-left mr-8">
            <MailIcon className="w-6 h-6" />
          </span>
          <a className="text-xl" href={`mailto:${email}`}>
            {' '}
            {email}{' '}
          </a>
        </div>
        <div className="my-8">
          <span className="text-xl">{`Assigned Course(s): ${assignedCourses}`}</span>
        </div>
        <div />
      </div>
    </div>
  );
};

export default CCCard;
