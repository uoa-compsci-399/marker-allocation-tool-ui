import React from 'react';

import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';
import CourseList from './CourseList';

// Pretend that we fetch data from API by
// const dummyCourseData = await fetch(URL blah blah)
// And maybe that data will be something like:
const dummyCourseData = [
  {
    courseCoord: 'Asma Shakil',
    courseId: 'cs399',
    courseName: 'COMPSCI 399',
    semester: 'Semester 1, 2021',
    closingDate: '14/04/2021',
    availableSpots: '7',
    maxSpots: '10',
  },
  {
    courseCoord: 'John Doe',
    courseId: 'cs358',
    courseName: 'COMPSCI 358',
    semester: 'Semester 2, 2021',
    closingDate: '14/04/2021',
    availableSpots: '8',
    maxSpots: '10',
  },
];

const CourseViewPage = (): JSX.Element => {
  return (
    <>
      <FilterButtons />
      <SearchBar />
      <CourseList courseData={dummyCourseData} />
    </>
  );
};

export default CourseViewPage;
