import React from 'react';

import Course from './Course';
import { CourseData } from '../../models/CourseData';

// URL Endpoint: /courses

interface CourseListProps {
  courseData: CourseData[];
}

const CourseList = ({ courseData }: CourseListProps): JSX.Element => {
  // render courses with fetched data
  const renderCourses = courseData.map(
    ({
      courseCoord,
      courseId,
      courseName,
      semester,
      closingDate,
      availableSpots,
      maxSpots,
    }: CourseData) => (
      <Course
        courseCoord={courseCoord}
        courseId={courseId}
        courseName={courseName}
        semester={semester}
        closingDate={closingDate}
        availableSpots={availableSpots}
        maxSpots={maxSpots}
      />
    )
  );

  return <div>{renderCourses}</div>;
};

export default CourseList;
