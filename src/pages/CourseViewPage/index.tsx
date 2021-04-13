import React from 'react';

import { FormApplication as Application } from '../../models/FormApplication';
import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';
import CourseList from './CourseList';
import CourseDetail from '../CourseDetailPage/';

// Dummy application data
const applicationOne: Application = {
  title: '399 Application #1',
  date: '11/04/21',
  applicantName: 'Songyan',
  applicationID: '2456879',
};

const applicationTwo: Application = {
  title: '399 Application #2',
  date: '08/04/21',
  applicantName: 'Isaac',
  applicationID: '1234567',
};

const applicationThree: Application = {
  title: '358 Application #1',
  date: '05/04/21',
  applicantName: 'Issac',
  applicationID: '5968745',
};

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
    applications: [applicationOne, applicationTwo],
    currentMarkers: ['Hussel', 'Lachlan', 'Jim'],
  },
  {
    courseCoord: 'John Doe',
    courseId: 'cs358',
    courseName: 'COMPSCI 358',
    semester: 'Semester 2, 2021',
    closingDate: '14/04/2021',
    availableSpots: '8',
    maxSpots: '10',
    applications: [applicationThree],
    currentMarkers: ['Darren', 'Songyan'],
  },
];

const CourseViewPage = (): JSX.Element => {
  return (
    <>
      <FilterButtons />
      <SearchBar />
      <CourseList courseData={dummyCourseData} />
      <CourseDetail courseData={dummyCourseData} />
    </>
  );
};

export default CourseViewPage;
