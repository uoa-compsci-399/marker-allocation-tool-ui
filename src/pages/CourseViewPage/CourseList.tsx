import Course from './Course';
import { CourseData } from 'models/CourseData';

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
      markerAssignmentDeadline,
    }: CourseData) => (
      <Course
        courseCoordinators={courseCoordinators}
        courseID={courseID}
        courseName={courseName}
        semesters={semesters}
        applicationClosingDate={applicationClosingDate}
        markerAssignmentDeadline={markerAssignmentDeadline}
        preferredMarkerCount={preferredMarkerCount}
        isPublished={isPublished}
        year={year}
      />
    )
  );

  return <div>{renderCourses}</div>;
};

export default CourseList;
