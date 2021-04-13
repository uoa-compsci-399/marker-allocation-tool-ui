import React from 'react';

import { CourseData } from '../../models/CourseData';

const Course = ({
  courseCoord,
  courseId,
  courseName,
  semester,
  closingDate,
  applications,
}: CourseData): JSX.Element => {
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
        Number of Applications: <span className="font-medium">{applications.length}</span>
      </div>
    </div>
  );
};

export default Course;
