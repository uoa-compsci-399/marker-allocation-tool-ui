import React from 'react';

import { CourseData } from '../../models/CourseData';
import { Link } from 'react-router-dom';

import { ReactComponent as EditIcon } from './edit_icon.svg';
import { USER_DETAILS } from '../../utils/Constants';
import { DecodeBitField } from '../../utils/BitFieldHelper';

//TODO: GET application count from DB using a query
const getApplicationCount = (courseId: string): number => {
  return 5;
};

const Course = ({
  courseCoordinators,
  courseID,
  courseName,
  semesters,
  applicationClosingDate,
  year,
  isPublished,
}: CourseData): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="md:flex">
        <Link
          className="w-full text-3xl mx-12 mt-6 font-semibold hover:text-blue-600"
          to={{
            pathname: `/courses/${courseID}/applications/`,
            state: {
              courseID: courseID,
              courseCoordinators: courseCoordinators,
              courseName: courseName,
              semesters: semesters,
              year: year,
            },
          }}
        >
          {courseName}
        </Link>

        <Link
          to={{
            pathname: `/courses/${courseID}/edit`,
            state: {
              courseId: courseID,
              userId: USER_DETAILS.userId,
              userRole: USER_DETAILS.identity,
            },
          }}
        >
          <EditIcon className="mr-4" />
        </Link>
      </div>
      <div className="mx-12 font-medium text-gray-600">{DecodeBitField(semesters).join(', ')}</div>
      <div className="mx-12 font-medium text-gray-600 mb-8">{year}</div>
      <div className="mx-12 font-semibold text-lg my-4">
        Course Coordinator(s): <span className="font-medium">{courseCoordinators}</span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Closing Date: <span className="font-medium">{applicationClosingDate}</span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Number of Applications: <span className="font-medium">{getApplicationCount(courseID)}</span>
      </div>
    </div>
  );
};

export default Course;
