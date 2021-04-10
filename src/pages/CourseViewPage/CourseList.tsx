import React from 'react';

import Course from './Course';
import { CourseData } from './type';

interface CourseListProps {
  courseData: CourseData[];
}

const CourseList = ({ courseData }: CourseListProps): JSX.Element => {
  // render courses with fetched data
  const renderCourses = courseData.map(
    ({
      courseCood,
      courseId,
      courseName,
      availableSpots,
      maxSpots,
      currentMarkers,
    }: CourseData) => (
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
