import React from 'react';

import { CourseData } from '../../models/CourseData';
import { Link } from 'react-router-dom';

import { ReactComponent as EditIcon } from './edit_icon.svg';

//TODO: GET user role using /whoami from backend
//0: Marker, 1: MC, 2: CC
import { userDetails } from './index';

//TODO: GET application count from DB using a query
const getApplicationCount = (courseId: string): number => {
  return 5;
};

const Course = ({
  courseCoord,
  courseId,
  courseName,
  semester,
  closingDate,
}: CourseData): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="md:flex">
        <Link
          className="w-full text-3xl mx-12 mt-6 font-semibold hover:text-blue-600"
          to={{
            pathname: `/courses/${courseId}/applications/`,
            state: {
              courseId: courseId,
              courseCoord: courseCoord,
              courseName: courseName,
              semester: semester,
            },
          }}
        >
          {courseName}
        </Link>

        <Link
          to={{
            pathname: `/courses/${courseId}/edit`,
            state: {
              courseId: courseId,
              userId: userDetails.userId,
              userRole: userDetails.identity,
            },
          }}
        >
          <EditIcon className="mr-4" />
        </Link>
      </div>
      <div className="mx-12 font-medium text-gray-600 mb-8">{semester}</div>
      <div className="mx-12 font-semibold text-lg my-4">
        Course Coordinator(s): <span className="font-medium">{courseCoord}</span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Closing Date:{' '}
        <span className="font-medium">
          {closingDate}
          <span className="font-light text-red-500 text-base mx-12"> # days left</span>
        </span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Number of Applications: <span className="font-medium">{getApplicationCount(courseId)}</span>
      </div>
    </div>
  );
};

export default Course;
