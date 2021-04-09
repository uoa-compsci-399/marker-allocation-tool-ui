import React from 'react';

import Course from './Course';

const CourseList = (): JSX.Element => {
  // Pretend that we fetch data from API by
  // const dummyCourseData = await fetch(URL blah blah)
  // And maybe that data will be something like:
  const dummyCourseData = [
    {
      courseCood: 'Asma',
      courseId: '399',
      courseName: 'COMPSCI 399',
      availableSpots: '7',
      maxSpots: '10',
      currentMarkers: ['Hussel', 'Lachlan', 'Darren'],
    },
    {
      courseCood: 'John Doe',
      courseId: '358',
      courseName: 'COMPSCI 358',
      availableSpots: '2',
      maxSpots: '10',
      currentMarkers: ['Darren', 'Songyan', 'Jim'],
    },
  ];

  // render courses with fetched data
  const renderCourses = dummyCourseData.map(
    ({ courseCood, courseId, courseName, availableSpots, maxSpots, currentMarkers }) => (
      <Course
        courseCood={courseCood}
        courseId={courseId}
        courseName={courseName}
        availableSpots={availableSpots}
        maxSpots={maxSpots}
        currentMarkers={currentMarkers}
      />
    )
  );

  return <div>{renderCourses}</div>;
};

export default CourseList;
