import React from 'react';

import Course from './Course';
import { CourseData } from '../../constants/types';

// URL Endpoint: /courses

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
      semester,
      closingDate,
      availableSpots,
      maxSpots,
      applications,
      currentMarkers,
    }: CourseData) => (
      <Course
        courseCood={courseCood}
        courseId={courseId}
        courseName={courseName}
        semester={semester}
        closingDate={closingDate}
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
