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
      courseCoordinators,
      courseID,
      courseName,
      semesters,
      applicationClosingDate,
      isPublished,
      year,
      preferredMarkerCount,
    }: CourseData) => (
      <Course
        courseCoordinators={courseCoordinators}
        courseID={courseID}
        courseName={courseName}
        semesters={semesters}
        applicationClosingDate={applicationClosingDate}
        preferredMarkerCount={preferredMarkerCount}
        isPublished={isPublished}
        year={year}
      />
    )
  );

  return <div>{renderCourses}</div>;
};

export default CourseList;
