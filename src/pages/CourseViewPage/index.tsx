import React from 'react';

import CourseList from './CourseList';
import CourseDetail from './CourseDetail';

// Pretend that we fetch data from API by
// const dummyCourseData = await fetch(URL blah blah)
// And maybe that data will be something like:
const dummyCourseData = [
  {
    courseCood: 'Asma',
    courseId: 'cs399',
    courseName: 'COMPSCI 399',
    availableSpots: '7',
    maxSpots: '10',
    currentMarkers: ['Hussel', 'Lachlan', 'Jim'],
  },
  {
    courseCood: 'John Doe',
    courseId: 'cs358',
    courseName: 'COMPSCI 358',
    availableSpots: '8',
    maxSpots: '10',
    currentMarkers: ['Darren', 'Songyan'],
  },
];

const CourseViewPage = (): JSX.Element => {
  return (
    <div>
      <CourseList courseData={dummyCourseData} />
      <CourseDetail courseData={dummyCourseData} />
    </div>
  );
};

export default CourseViewPage;
