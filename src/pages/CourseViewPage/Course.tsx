import React from 'react';

import { Application } from '../../constants/types';

interface CourseProps {
  courseCood: string;
  courseId: string;
  courseName: string;
  semester: string;
  closingDate: string;
  availableSpots: string;
  maxSpots: string;
  applications: Application[];
  currentMarkers: string[];
}

const Course = ({
  courseCood,
  courseId,
  courseName,
  semester,
  closingDate,
  applications,
}: //   availableSpots,
//   maxSpots,
CourseProps): JSX.Element => {
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="md:flex">
        <a
          href={`/courses/${courseId}`}
          className="w-full text-3xl mx-12 mt-6 font-semibold hover:text-blue-600"
        >
          {courseName}
        </a>
      </div>
      <div className="mx-12 font-medium text-gray-600">{semester}</div>
      <div className="mx-12 font-semibold text-lg my-4">
        Course Coordinator(s): <span className="font-medium">{courseCood}</span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Closing Date:{' '}
        <span className="font-medium">
          {closingDate}
          <span className="font-light text-red-500 text-base mx-12"> # days left</span>
        </span>
      </div>
      <div className="mx-12 font-semibold text-lg my-4">
        Number of Applications: <span className="font-medium">{applications.length}</span>
      </div>
    </div>
  );
};

export default Course;
