import React from 'react';

import Course from './Course';
import { CourseData } from './types';

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
      applications,
      currentMarkers,
    }: CourseData) => (
      <Course
        courseCood={courseCood}
        courseId={courseId}
        courseName={courseName}
        availableSpots={availableSpots}
        maxSpots={maxSpots}
        applications={applications}
        currentMarkers={currentMarkers}
      />
    )
  );

  return <div>{renderCourses}</div>;
};

export default CourseList;
