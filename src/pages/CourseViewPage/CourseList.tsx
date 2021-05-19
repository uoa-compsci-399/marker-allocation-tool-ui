import Course from './Course';
import { CourseData } from 'models/CourseData';

interface CourseListProps {
  courseData: CourseData[];
}

/*function bitCodeDecoder(value: number): string {
  let str = '';
  if (value === 1) {
    str = 'Semester 1';
  } else if (value === 2) {
    str = 'Semester 2';
  } else if (value === 4) {
    str = 'Summer School';
  }

  return str;
}

function CourseDetails(data: any): CourseData {
  return {
    courseCoord: `N/A`,
    courseID: `${data.courseID}`,
    courseName: `${data.courseName}`,
    semester: `${bitCodeDecoder(data.whichSemestersField)}`,
    closingDate: `${data.markerAssignmentDeadline}`,
    daysLeft: `${data.daysLeft}`,
    availableSpots: ``,
    maxSpots: ``,
  };
}*/

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
