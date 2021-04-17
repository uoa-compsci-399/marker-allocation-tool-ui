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
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-6">
        <ExtendedFAB />
      </div>
      <CourseList courseData={dummyCourseData} />
    </div>
  );
};

export default CourseViewPage;
