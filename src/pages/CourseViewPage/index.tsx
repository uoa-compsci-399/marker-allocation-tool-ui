import React from 'react';

import { Application } from './types';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';

// Dummy application data
const applicationOne: Application = {
  title: '399 Application #1',
  date: '11/04/21',
  applicantName: 'Songyan',
};

const applicationTwo: Application = {
  title: '399 Application #2',
  date: '08/04/21',
  applicantName: 'Isaac',
};

const applicationThree: Application = {
  title: '358 Application #1',
  date: '05/04/21',
  applicantName: 'Issac',
};

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
    applications: [applicationOne, applicationTwo],
    currentMarkers: ['Hussel', 'Lachlan', 'Jim'],
  },
  {
    courseCood: 'John Doe',
    courseId: 'cs358',
    courseName: 'COMPSCI 358',
    availableSpots: '8',
    maxSpots: '10',
    applications: [applicationThree],
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
