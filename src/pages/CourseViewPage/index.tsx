import React from 'react';

import CourseList from './CourseList';
import ExtendedFAB from '../../components/common-ui/ExtendedFAB';

//TODO: Replace with API call
const dummyCourseData = [
  {
    courseCoord: 'Asma Shakil',
    courseId: 'cs399',
    courseName: 'COMPSCI 399',
    semester: 'Semester 1, 2021',
    closingDate: '14/06/2021',
    availableSpots: '7',
    maxSpots: '10',
  },
  {
    courseCoord: 'John Doe, Asma Shakil',
    courseId: 'cs358',
    courseName: 'COMPSCI 358',
    semester: 'Semester 2, 2021',
    closingDate: '14/06/2021',
    availableSpots: '8',
    maxSpots: '10',
  },
];

const CourseViewPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Courses
        </p>
        <ExtendedFAB />
      </div>
      <CourseList courseData={dummyCourseData} />
    </div>
  );
};

export default CourseViewPage;
